import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Clients from '../components/Clients';

import * as ExecutiveActions from '../actions/ExecutiveActions';

const { Component } = React;
const {
  Paper,
  Dialog,
  FlatButton,
  TextField,
  SelectField,
  MenuItem
} = mui;

class Executive extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentWillUnmount() {
    this.actions.clean();
  }

  handleClickShowModalRegister() {
    this.actions.setShowModalRegister(true);
  }

  handleClickShowModalCard() {
    this.actions.setShowModalCard(true);
  }

  handleClickClient(clientCode) {
    window.open(`/#/profile/${clientCode}`);
  }

  handleClickCancelRegister() {
    this.actions.setShowModalRegister(false);
  }

  handleClickCancelCard() {
    this.actions.setShowModalCard(false);
  }

  handleClickAddInformationRegister() {
    const name = this.refs.name.getValue().trim();
    const last_name = this.refs.last_name.getValue().trim();
    const email = this.refs.email.getValue().trim();
    const phone = this.refs.phone.getValue().trim();
    const address = this.refs.address.getValue().trim();

    this.actions.sendInformationRegister(name, last_name, email, phone, address);
  }

  handleClickSendInformationCard() {
    this.actions.sendInformationCard();
  }

  handleChangeClient(e, value, code) {
    this.actions.setSelectedClient(code);
  }

  handleChangeType(e, value, type) {
    this.actions.setSelectedType(type);
  }

  handleChangeTypeCard(e, value, typeCard) {
    this.actions.setSelectedTypeCard(typeCard);
  }

  handleChangeNameCard(e, value, nameCard) {
    this.actions.setSelectedNameCard(nameCard);
  }

  renderClients() {
    const menuItems = [];
    this.props.clients.map((client, key) => {
      if (client.type === 'client') {
        menuItems.push(<MenuItem key={key} value={client.code} primaryText={client.name} />);
      }
    });

    return menuItems;
  }

  render() {
    return (
      <div className="Executive">
        <Dialog
          title="REGISTRAR NUEVO CLIENTE"
          bodyClassName="Executive__register"
          bodyStyle={{ overflowY: 'auto' }}
          actions={[
            <FlatButton
              label="Cancelar"
              secondary={true}
              onClick={this.handleClickCancelRegister.bind(this)}
            />,
            <FlatButton
              label="Crear cliente"
              primary={true}
              onClick={this.handleClickAddInformationRegister.bind(this)}
            />
          ]}
          modal={true}
          open={this.props.showModalRegister}
        >
          <TextField
            ref="name"
            hintText="Nombre del cliente"
            floatingLabelText="Nombre del cliente"
          />
          <TextField
            ref="last_name"
            hintText="Apellido del cliente"
            floatingLabelText="Apellido del cliente"
          />
          <TextField
            ref="email"
            hintText="Email del cliente"
            floatingLabelText="Email del cliente"
          />
          <TextField
            ref="phone"
            hintText="Teléfono del cliente"
            floatingLabelText="Teléfono del cliente"
          />
          <TextField
            ref="address"
            hintText="Dirección del cliente"
            floatingLabelText="Dirección del cliente"
          />
          <SelectField
            value={this.props.selectedType}
            onChange={this.handleChangeType.bind(this)}
            hintText="Selecciona tipo de cliente"
          >
            <MenuItem value="executive" primaryText="Ejecutivo" />
            <MenuItem value="cashier" primaryText="Cajera" />
            <MenuItem value="client" primaryText="Cliente" />
          </SelectField>
        </Dialog>

        <Dialog
          title="ASIGNAR TARJETA A CLIENTE"
          bodyClassName="Executive__assign"
          actions={[
            <FlatButton
              label="Cancelar"
              secondary={true}
              onClick={this.handleClickCancelCard.bind(this)}
            />,
            <FlatButton
              label="Asignar"
              primary={true}
              onClick={this.handleClickSendInformationCard.bind(this)}
            />
          ]}
          modal={true}
          open={this.props.showModalCard}
        >
          <SelectField
            value={this.props.selectedClient}
            hintText="Selecciona cliente"
            onChange={this.handleChangeClient.bind(this)}
          >
            {this.renderClients()}
          </SelectField>
          <SelectField
            value={this.props.selectedTypeCard}
            hintText="Selecciona tipo de tarjeta"
            onChange={this.handleChangeTypeCard.bind(this)}
          >
            <MenuItem value="debit" primaryText="Debito" />
            <MenuItem value="credit" primaryText="Crédito" />
          </SelectField>
          <SelectField
            value={this.props.selectedNameCard}
            hintText="Selecciona nombre de tarjeta"
            onChange={this.handleChangeNameCard.bind(this)}
          >
            <MenuItem value="nomina" primaryText="Nómina" />
            <MenuItem value="ahorro" primaryText="Ahorro" />
            <MenuItem value="ejecutiva" primaryText="Ejecutiva" />
            <MenuItem value="light" primaryText="Light" />
            <MenuItem value="oro" primaryText="Oro" />
            <MenuItem value="black" primaryText="Black" />
          </SelectField>
        </Dialog>

        <Paper className="Executive__section">
          <p className="Executive__title">LISTA DE CLIENTES</p>
          <Clients
            clients={this.props.clients.filter((client) => client.type === 'client')}
            onClickClient={this.handleClickClient.bind(this)}
          />
          <div className="Executive__actions">
            <FlatButton
              label="Registrar cliente"
              secondary={true}
              onClick={this.handleClickShowModalRegister.bind(this)}
            />
            <FlatButton
              label="Asignar tarjeta"
              primary={true}
              onClick={this.handleClickShowModalCard.bind(this)}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default branch(Executive, {
  cursors: {
    user: ['main', 'user'],
    clients: ['main', 'clients'],
    showModalRegister: ['executive', 'showModalRegister'],
    showModalCard: ['executive', 'showModalCard'],
    selectedClient: ['executive', 'selectedClient'],
    selectedType: ['executive', 'selectedType'],
    selectedTypeCard: ['executive', 'selectedTypeCard'],
    selectedNameCard: ['executive', 'selectedNameCard']
  },
  actions: { ...ExecutiveActions }
});
