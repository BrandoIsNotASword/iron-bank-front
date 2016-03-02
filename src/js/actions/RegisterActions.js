import state from '../tree';
import history from '../history';
import api from '../api';
import request from 'superagent';

const cursor = state.select('register');

export function setInformation(tree, name, value) {
  cursor.set(name, value);
}

export function setToken(token) {
  cursor.set('token', token);
}

export function setLoader(tree, loader) {
  cursor.set('loader', loader);
}

export function setError(tree, error) {
  cursor.set('error', error);
}

export function sendInformation(tree, password) {
  const token = cursor.get('token');

  request
    .post(api.setPassword)
    .send({ token, password })
    .set('Accept', 'application/json')
    .end((err, res) => {
      setLoader(null, false);

      if (res.ok) {
        history.replace('/login');
      }
    });
}
