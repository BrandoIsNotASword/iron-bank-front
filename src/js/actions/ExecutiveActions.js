import state from '../tree';
import api from '../api';
import * as MainActions from './MainActions';
import request from 'superagent';

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
  const client = cursor.get('selectedClient');

  if (client) {
    setShowModalCard(null, false);
    cursor.set('selectedClient', '');
  }
}
