import Baobab from 'baobab';

export default new Baobab({
  main: {},
  login: {
    code: '',
    password: ''
  },
  dashboard: {}
}, {
  shiftReferences: true,
  autoCommit: true
});
