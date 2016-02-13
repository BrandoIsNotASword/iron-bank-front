import state from '../tree';
// import request from 'superagent';

const cursor = state.select('cashier');

export function setSelectedClient(tree, selectedClient) {
  cursor.set('selectedClient', selectedClient);
}

export function setShowModal(tree, showModal) {
  cursor.set('showModal', showModal);
}

export function setSelectedCard(tree, selectedCard) {
  setShowModal(null, true);
  cursor.set('selectedCard', selectedCard);
}

/* eslint-disable */
export function sendMoney(tree, money) {
  const card = cursor.get('selectedCard');
  console.log(money, card);
}
/* eslint-enable */
