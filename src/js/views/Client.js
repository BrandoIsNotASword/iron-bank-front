import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';

import * as ClientActions from '../actions/ClientActions';

const { Component } = React;
const {
  Paper,
  RaisedButton,
  Dialog,
  FlatButton,
  TextField,
  SelectField,
  MenuItem
} = mui;

class Client extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getCardsByClient();
  }

  handleSetShowModal(showModal) {
    this.actions.setShowModal(showModal);
  }

  handleChangeBank(e, value, bank) {
    this.actions.setSelectedBank(bank);
  }

  handleSendTransaction() {
    const amount = this.refs.amount.getValue();
    const destination_account = this.refs.destination_account.getValue();

    if (destination_account.length) {
      this.actions.sendTransaction(amount, destination_account);
    }
  }

  renderTransaction() {
    if (this.props.user.type === 'client') {
      return (
        <div className="Client__transaction">
          <RaisedButton
            primary={true}
            label="Realizar transacción interbancaria"
            onClick={this.handleSetShowModal.bind(this, true)}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Client">
      <Dialog
          title="Realiza una transacción"
          actions={[
            <FlatButton
              label="Cancelar"
              secondary={true}
              onClick={this.handleSetShowModal.bind(this, false)}
            />,
            <FlatButton
              label="Realizar transacción"
              primary={true}
              onClick={this.handleSendTransaction.bind(this)}
            />
          ]}
          modal={true}
          open={this.props.showModal}
        >
          <TextField
            ref="amount"
            hintText="Ingresa la cantidad"
            flaotingLabelText="Ingresa la cantidad"
            type="number"
            defaultValue="1"
            min="1"
          />
          <TextField
            ref="destination_account"
            hintText="Ingresa la cuenta destino"
            flaotingLabelText="Ingresa la cuenta destino"
          />
          <SelectField
            hintText="Selecciona banco"
            floatingLabelText="Selecciona banco"
            onChange={this.handleChangeBank.bind(this)}
            value={this.props.selectedBank}
          >
            <MenuItem value="iron_bank" primaryText="Mi Banco" />
            <MenuItem value="banco_unicaribe" primaryText="Banco Unicaribe" />
            <MenuItem
              value="cube_world_bank"
              primaryText="Cube World Bank"
            />
          </SelectField>
        </Dialog>

        <Paper className="Client__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={this.props.cards} />
          {this.renderTransaction()}
        </Paper>
      </div>
    );
  }
}

export default branch(Client, {
  cursors: {
    user: ['main', 'user'],
    cards: ['client', 'cards'],
    showModal: ['client', 'showModal'],
    selectedBank: ['client', 'selectedBank']
  },
  actions: { ...ClientActions }
});
