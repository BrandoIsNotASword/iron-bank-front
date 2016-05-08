import state from '../tree';
import request from 'superagent';
import api from '../api';

import * as MainActions from '../actions/MainActions';

const cursor = state.select('profile');

export function setLoader(tree, loader) {
  cursor.set('loader', loader);
}

export function setShowModal(tree, showModal) {
  cursor.set('showModal', showModal);
}

export function setSelectedBank(tree, selectedBank) {
  cursor.set('selectedBank', selectedBank);
}

export function getClientById(tree, clientId) {
  request
    .get(api.getUser.replace('{id}', clientId))
    .end((err, res) => {
      if (res.ok) {
        cursor.set('client', res.body.data);
        setLoader(null, false);
      }
    });
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
  cursor.set('loader', true);
  cursor.set('client', {});
  cursor.set('showModal', false);
  cursor.set('selectedBank', 'iron_bank');
}
