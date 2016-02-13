import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import * as CashierActions from '../actions/CashierActions';

import Cards from '../components/Cards';
import Clients from '../components/Clients';

const { Component } = React;
const {
  Paper,
  Dialog,
  FlatButton,
  TextField
} = mui;
const dummyClients = [
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco', type: 'client' },
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco', type: 'client' },
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco', type: 'client' },
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco', type: 'client' },
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco', type: 'client' }
];
const dummyCards = [
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' }
];

class Cashier extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  handleClickClient(clientCode) {
    this.actions.setSelectedClient(clientCode);
  }

  handleClickCard(cardCode) {
    this.actions.setSelectedCard(cardCode);
  }

  handleClickCancel() {
    this.actions.setShowModal(false);
  }

  handleClickAddMoney() {
    const money = this.refs.money.getValue();
    if (money) this.actions.sendMoney(money);
  }

  renderClientCards() {
    if (this.props.selectedClient) {
      return (
        <Paper className="Cashier__section" zDepth={1}>
          <p className="Cashier__title">TARJETAS</p>
          <div className="Cashier__content">
            <p className="Cashier__information">Nombre de cliente: Uriel</p>
            <p className="Cashier__information">Email: aero@gmail.com</p>
            <p className="Cashier__information">Código de cliente: ASD86233FSDF7</p>
          </div>

          <Cards cards={dummyCards} onClickCard={this.handleClickCard.bind(this)} />
        </Paper>
      );
    }
  }

  render() {
    return (
      <div className="Cashier">
        <Dialog
          title="AGREGAR SALDO A CLIENTE"
          actions={[
            <FlatButton
              label="Cancelar"
              secondary={true}
              onClick={this.handleClickCancel.bind(this)}
            />,
            <FlatButton
              label="Agregar saldo"
              primary={true}
              onClick={this.handleClickAddMoney.bind(this)}
            />
          ]}
          modal={true}
          open={this.props.showModal}
        >
          <TextField
            ref="money"
            type="number"
            min="1"
            hintText="Agregar saldo"
            floatingLabelText="Agregar saldo"
          />
        </Dialog>

        <Paper className="Cashier__section" zDepth={1}>
          <p className="Cashier__title">INFORMACIÓN</p>
          <div className="Cashier__content">
            <p className="Cashier__information">Nombre: Uriel</p>
            <p className="Cashier__information">Email: aero@gmail.com</p>
            <p className="Cashier__information">Código de cajera: ASD86233FSDF7</p>
          </div>
        </Paper>

        <Paper className="Cashier__section">
          <p className="Cashier__title">LISTA DE CLIENTES</p>
          <Clients clients={dummyClients} onClickClient={this.handleClickClient.bind(this)} />
        </Paper>

        {this.renderClientCards()}
      </div>
    );
  }
}

export default branch(Cashier, {
  cursors: {
    selectedClient: ['cashier', 'selectedClient'],
    showModal: ['cashier', 'showModal']
  },
  actions: { ...CashierActions }
});
