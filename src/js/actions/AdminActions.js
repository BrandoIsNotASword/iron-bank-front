import state from '../tree';
import request from 'superagent';
import api from '../api';

import * as MainActions from './MainActions';

const cursor = state.select('admin');

export function setShowModal(tree, showModal) {
  cursor.set('showModal', showModal);
}

export function setSelectedUser(tree, userCode) {
  cursor.set('selectedUser', userCode);
}

export function deleteSelectedUser() {
  const { token } = MainActions.getUser();
  const user = cursor.get('selectedUser');

  request
    .delete(api.deleteUser.replace('{id}', user))
    .send({ token })
    .end((err, res) => {
      if (res.ok) {
        MainActions.getUsers();
        setShowModal(null, false);
      }
    });
}

export function clean() {
  cursor.set('showModal', false);
}
