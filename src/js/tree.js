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
  client: {},
  cashier: {
    selectedClient: '',
    selectedCard: '',
    showModal: false
  }
}, {
  shiftReferences: true,
  autoCommit: true
});
