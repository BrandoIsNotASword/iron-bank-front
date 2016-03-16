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
  RaisedButton,
  TextField
} = mui;

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

  renderClientInformation() {
    if (this.props.selectedClient) {
      const selectedClient = this.props.selectedClient;

      return (
        <Paper className="Cashier__section" zDepth={1}>
          <p className="Cashier__title">TARJETAS</p>

          <div className="Cashier__content">
            <p className="Cashier__information">
              Nombre de cliente: {selectedClient.name + selectedClient.last_name}
            </p>
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

          <Cards cards={selectedClient.cards} onClickCard={this.handleClickCard.bind(this)} />
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
            hintText="Agregar saldo"
            floatingLabelText="Agregar saldo"
          />
        </Dialog>

        <Paper className="Cashier__section">
          <p className="Cashier__title">LISTA DE CLIENTES</p>
          <Clients
            clients={this.props.clients.filter((client) => client.type === 'client')}
            onClickClient={this.handleClickClient.bind(this)}
          />
        </Paper>

        {this.renderClientInformation()}
      </div>
    );
  }
}

export default branch(Cashier, {
  cursors: {
    user: ['main', 'user'],
    clients: ['main', 'clients'],
    selectedClient: ['cashier', 'selectedClient'],
    selectedClientCards: ['cashier', 'selectedClientCards'],
    showModal: ['cashier', 'showModal']
  },
  actions: { ...CashierActions }
});
