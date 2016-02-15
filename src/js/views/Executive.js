import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Clients from '../components/Clients';
import ProfileHeader from '../components/ProfileHeader';

import * as ExecutiveActions from '../actions/ExecutiveActions';

const { PropTypes, Component } = React;
const {
  Paper,
  Dialog,
  FlatButton,
  TextField,
  SelectField,
  MenuItem
} = mui;
const dummyClients = [
  { code: 'ASD86233FSDF7', name: 'Brando Pérez Pacheco1', type: 'client' },
  { code: 'ASD86233FSDF8', name: 'Brando Pérez Pacheco2', type: 'client' },
  { code: 'ASD86233FSDF9', name: 'Brando Pérez Pacheco3', type: 'client' },
  { code: 'ASD86233FSDF6', name: 'Brando Pérez Pacheco4', type: 'client' },
  { code: 'ASD86233FSDF5', name: 'Brando Pérez Pacheco5', type: 'client' }
];
const contextTypes = {
  router: PropTypes.object.isRequired
};

class Executive extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  handleClickShowModalRegister() {
    this.actions.setShowModalRegister(true);
  }

  handleClickShowModalCard() {
    this.actions.setShowModalCard(true);
  }

  handleClickClient(clientCode) {
    this.context.router.push(`profile/${clientCode}`);
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

  handleChange(e, value, code) {
    this.actions.setSelectedClient(code);
  }

  handleChangeType(e, value, type) {
    this.actions.setSelectedType(type);
  }

  renderClients() {
    return dummyClients.map((client, key) => {
      return <MenuItem key={key} value={client.code} primaryText={client.name} />;
    });
  }

  render() {
    return (
      <div className="Executive">
        <Dialog
          title="REGISTRAR NUEVO CLIENTE"
          bodyClassName="Executive__register"
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
          <p>Selecciona el cliente al que le asignarás una tarjeta:</p>
          <SelectField
            value={this.props.selectedClient}
            hintText="Seleccionar cliente"
            onChange={this.handleChange.bind(this)}
          >
            {this.renderClients()}
          </SelectField>
        </Dialog>

        <ProfileHeader user={this.props.user} />

        <Paper className="Executive__section">
          <p className="Executive__title">LISTA DE CLIENTES</p>
          <Clients clients={dummyClients} onClickClient={this.handleClickClient.bind(this)} />
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

Executive.contextTypes = contextTypes;

export default branch(Executive, {
  cursors: {
    user: ['main', 'user'],
    showModalRegister: ['executive', 'showModalRegister'],
    showModalCard: ['executive', 'showModalCard'],
    selectedClient: ['executive', 'selectedClient'],
    selectedType: ['executive', 'selectedType']
  },
  actions: { ...ExecutiveActions }
});
