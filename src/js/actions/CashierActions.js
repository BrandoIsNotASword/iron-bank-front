import state from '../tree';
import api from '../api';
import request from 'superagent';

import * as MainActions from '../actions/MainActions';

const cursor = state.select('cashier');

export function setSelectedClient(tree, selectedClient) {
  request
    .get(api.getUser.replace('{id}', selectedClient))
    .end((err, res) => {
      if (res.ok) {
        cursor.set('selectedClient', res.body.data);
      }
    });
}

export function setShowModal(tree, showModal) {
  cursor.set('showModal', showModal);
}

export function setSelectedCard(tree, selectedCard) {
  setShowModal(null, true);
  cursor.set('selectedCard', selectedCard);
}

export function sendMoney(tree, amount) {
  const { token } = MainActions.getUser();
  const card = cursor.get('selectedCard');

  request
    .put(api.updateCard.replace('{id}', card))
    .send({ token, amount })
    .end((err, res) => {
      if (res.ok) {
        setShowModal(null, false);
        setSelectedClient(null, cursor.get('selectedClient').id);
      }
    });
}
