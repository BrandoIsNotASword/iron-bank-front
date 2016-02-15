import Baobab from 'baobab';

export default new Baobab({
  main: {
    user: {}
  },
  login: {
    code: '',
    password: ''
  },
  register: {
    token: '',
    password: '',
    repassword: '',
    error: false
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
    selectedClient: '',
    selectedType: ''
  }
}, {
  shiftReferences: true,
  autoCommit: true
});
