import state from '../tree';
// import request from 'superagent';

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

/* eslint-disable */
export function sendInformationRegister(tree, name, surname, email) {
  console.log(name, surname, email);
  setShowModalRegister(null, false);
}
/* eslint-enable */

/* eslint-disable */
export function sendInformationCard(tree) {
  const client = cursor.get('selectedClient');

  if (client) {
    setShowModalCard(null, false);
    cursor.set('selectedClient', '');
  }
}
/* eslint-enable */
