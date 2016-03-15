import state from '../tree';
import request from 'superagent';
import api from '../api';

const cursor = state.select('profile');

export function getClientById(tree, clientId) {
  request
    .get(api.getUser.replace('{id}', clientId))
    .end((err, res) => {
      if (res.ok) {
        cursor.set('client', res.body.data);
      }
    });
}
