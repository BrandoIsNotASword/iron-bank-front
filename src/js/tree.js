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
  },
  executive: {
    showModalRegister: false,
    showModalCard: false,
    selectedClient: ''
  }
}, {
  shiftReferences: true,
  autoCommit: true
});
