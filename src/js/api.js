const BASE_URL = 'http://iron_api.reepsy.com/api/v1/';

export default {
  login: BASE_URL + 'users/login',
  newUser: BASE_URL + 'users',
  users: BASE_URL + 'users',
  getUser: BASE_URL + 'users/{id}',
  deleteUser: BASE_URL + 'users/{id}',
  cards: BASE_URL + 'cards',
  updateCard: BASE_URL + 'cards/{id}',
  getCards: BASE_URL + 'users/{id}',
  setPassword: BASE_URL + 'users/set_password'
};
