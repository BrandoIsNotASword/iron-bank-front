import state from '../tree';

const cursor = state.select('main');

export function setUser(user) {
  cursor.set('user', user);
}

export function getUser() {
  return cursor.get('user');
}
