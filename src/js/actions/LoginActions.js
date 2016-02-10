import state from '../tree';
import history from '../history';
// import request from 'superagent';

const cursor = state.select('login');

export function setInformation(tree, name, value) {
  cursor.set(name, value);
}

export function sendInformation() {
  history.push('/dashboard');

  /*
  request
    .post(api.login)
    .send({})
    .set('Accept', 'application/json')
    .end((err, res) => {
      history.push('/dashboard');
    });
  */
}
