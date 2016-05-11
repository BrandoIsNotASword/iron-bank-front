import state from '../tree';
import api from '../api';
import request from 'superagent';

import * as MainActions from './MainActions';

const cursor = state.select('client');

export function getCardsByClient() {
  const user = MainActions.getUser();

  request
    .get(api.getCards.replace('{id}', user.id))
    .end((err, res) => {
      if (res.ok) {
        cursor.set('cards', res.body.data.cards);
      }
    });
}

export function setShowModal(tree, showModal) {
  cursor.set('showModal', showModal);
}

export function setSelectedBank(tree, selectedBank) {
  cursor.set('selectedBank', selectedBank);
}

/* eslint-disable */
export function sendTransaction(tree, amount, destination_account) {
  const bank_origin = cursor.get('selectedBank');
  const origin_account = MainActions.getUser().id;

  console.log(amount, origin_account, destination_account, bank_origin);

  request
    .post(amount, origin_account, destination_account, bank_origin)
    .end((err, res) => {
      if (res.ok) {

      }
    });
}
/* eslint-enable */

export function clean() {
  cursor.set('cards', []);
  cursor.set('showModal', false);
  cursor.set('selectedBank', 'iron_bank');
}
