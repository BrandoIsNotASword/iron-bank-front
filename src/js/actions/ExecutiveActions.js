import state from '../tree';
import api from '../api';
import request from 'superagent';

import * as MainActions from './MainActions';

const cursor = state.select('executive');

export function setShowModalRegister(tree, showModalRegister) {
  cursor.set('showModalRegister', showModalRegister);
}

export function setShowModalCard(tree, showModalCard) {
  cursor.set('showModalCard', showModalCard);
}

export function setSelectedClient(tree, selectedClient) {
  cursor.set('selectedClient', selectedClient);
}

export function setSelectedType(tree, selectedType) {
  cursor.set('selectedType', selectedType);
}

export function setSelectedTypeCard(tree, selectedTypeCard) {
  cursor.set('selectedTypeCard', selectedTypeCard);
}

export function setSelectedNameCard(tree, selectedNameCard) {
  cursor.set('selectedNameCard', selectedNameCard);
}

export function sendInformationRegister(tree, name, last_name, email, phone, address) {
  const { token } = MainActions.getUser();
  const type = cursor.get('selectedType');

  request
    .post(api.newUser)
    .send({ token, name, last_name, email, phone, address, type })
    .end((err, res) => {
      if (res.ok) {
        setShowModalRegister(null, false);
      }
    });
}

export function sendInformationCard() {
  const { token } = MainActions.getUser();
  const user_id = cursor.get('selectedClient');
  const type = cursor.get('selectedTypeCard');
  const name = cursor.get('selectedNameCard');

  request
    .post(api.cards)
    .send({ token, user_id, type, name })
    .end((err, res) => {
      if (res.ok) {
        setShowModalCard(null, false);
        cursor.set('selectedClient', '');
        cursor.set('selectedTypeCard', '');
        cursor.set('selectedNameCard', '');
      }
    });
}

export function clean() {
  cursor.set('showModalRegister', false);
  cursor.set('showModalCard', false);
  cursor.set('selectedClient', '');
  cursor.set('selectedType', '');
  cursor.set('selectedTypeCard', '');
  cursor.set('selectedNameCard', '');
}
