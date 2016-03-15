import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import * as CashierActions from '../actions/CashierActions';

import Cards from '../components/Cards';
import Clients from '../components/Clients';
import ProfileHeader from '../components/ProfileHeader';

const { Component } = React;
const {
  Paper,
  Dialog,
  FlatButton,
  RaisedButton,
  TextField
} = mui;
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
      const selectedClient = this.props.clients.filter((client) => {
        return client.id === this.props.selectedClient;
      })[0];

      return (
        <Paper className="Cashier__section" zDepth={1}>
          <p className="Cashier__title">TARJETAS</p>

          <div className="Cashier__content">
            <p className="Cashier__information">
              Nombre de cliente: {selectedClient.name + selectedClient.last_name}
            </p>
            <p className="Cashier__information">Email: {selectedClient.email}</p>
            <p className="Cashier__information">Código de cliente: {selectedClient.code}</p>
          </div>

          <div className="Cashier__actions">
            <RaisedButton
              primary={true}
              linkButton={true}
              label="VER INFORMACIÓN"
              target="_blank"
              href={`/#/profile/${selectedClient.id}`}
            />
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

        <ProfileHeader user={this.props.user} />

        <Paper className="Cashier__section">
          <p className="Cashier__title">LISTA DE CLIENTES</p>
          <Clients
            clients={this.props.clients}
            onClickClient={this.handleClickClient.bind(this)}
          />
        </Paper>

        {this.renderClientCards()}
      </div>
    );
  }
}

export default branch(Cashier, {
  cursors: {
    user: ['main', 'user'],
    clients: ['main', 'clients'],
    selectedClient: ['cashier', 'selectedClient'],
    showModal: ['cashier', 'showModal']
  },
  actions: { ...CashierActions }
});
