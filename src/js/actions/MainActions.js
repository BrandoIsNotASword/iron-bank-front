import state from '../tree';
import request from 'superagent';
import api from '../api';

const cursor = state.select('main');

export function setUser(user) {
  cursor.set('user', user);
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  return cursor.get('user');
}

export function getUsers() {
  request
    .get(api.users)
    .end((err, res) => {
      if (res.ok) {
        cursor.set('clients', res.body.data);
      }
    });
}
