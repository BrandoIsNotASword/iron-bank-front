import Baobab from 'baobab';

const user = JSON.parse(localStorage.getItem('user'));

export default new Baobab({
  main: {
    user: user || {},
    clients: []
  },
  login: {
    code: '',
    password: '',
    loader: false
  },
  register: {
    token: '',
    password: '',
    repassword: '',
    error: false,
    loader: false
  },
  admin: {
    showModal: false
  },
  profile: {
    client: {},
    loader: true
  },
  client: {
    cards: []
  },
  cashier: {
    selectedClient: '',
    selectedCard: '',
    showModal: false
  },
  executive: {
    showModalRegister: false,
    showModalCard: false,
    selectedClient: '',
    selectedType: '',
    selectedTypeCard: '',
    selectedNameCard: ''
  }
}, {
  shiftReferences: true,
  autoCommit: true
});
