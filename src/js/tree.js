import Baobab from 'baobab';

export default new Baobab({
  main: {},
  login: {
    code: '',
    password: ''
  },
  register: {
    password: '',
    repassword: ''
  },
  dashboard: {}
}, {
  shiftReferences: true,
  autoCommit: true
});
