import state from '../tree';
import api from '../api';
import history from '../history';
import request from 'superagent';

import * as MainActions from '../actions/MainActions';

const cursor = state.select('login');

export function setInformation(tree, name, value) {
  cursor.set(name, value);
}

export function setLoader(tree, loader) {
  cursor.set('loader', loader);
}

export function sendInformation() {
  const code = cursor.get('code');
  const password = cursor.get('password');

  request
    .post(api.login)
    .send({ code, password })
    .set('Accept', 'application/json')
    .end((err, res) => {
      setLoader(null, false);

      if (res.ok) {
        MainActions.setUser(res.body.data);
        history.replace('/dashboard');
      }
    });
}
