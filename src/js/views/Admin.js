import React from 'react';
import { Paper, Dialog, FlatButton } from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Clients from '../components/Clients';

import Cashier from './Cashier';
import Executive from './Executive';

import * as AdminActions from '../actions/AdminActions';

const { Component } = React;

class Admin extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  handleClickClient(userCode) {
    this.actions.setSelectedUser(userCode);
    this.actions.setShowModal(true);
  }

  handleClickCancel() {
    this.actions.setShowModal(false);
  }

  handleClickDeleteUser() {
    this.actions.deleteSelectedUser();
  }

  render() {
    return (
      <div className="Admin">
        <Dialog
          title="ELIMINAR USUARIO"
          actions={[
            <FlatButton
              label="Cancelar"
              secondary={true}
              onClick={this.handleClickCancel.bind(this)}
            />,
            <FlatButton
              label="Eliminar usuario"
              primary={true}
              onClick={this.handleClickDeleteUser.bind(this)}
            />
          ]}
          modal={true}
          open={this.props.showModal}
        >
          <div />
        </Dialog>
        <div className="Admin__section">
          <p className="Admin__sectionTitle">ACCIONES COMO ADMIN</p>
          <Paper className="Admin__users" zDepth={2}>
            <p>LISTA DE USUARIOS</p>
            <Clients
              clients={this.props.clients}
              onClickClient={this.handleClickClient.bind(this)}
            />
          </Paper>
        </div>

        <div className="Admin__section">
          <p className="Admin__sectionTitle">ACCIONES COMO EJECUTIVO</p>
          <Executive />
        </div>

        <div className="Admin__section">
          <p className="Admin__sectionTitle">ACCIONES COMO CAJERO</p>
          <Cashier />
        </div>
      </div>
    );
  }
}

export default branch(Admin, {
  cursors: {
    user: ['main', 'user'],
    clients: ['main', 'clients'],
    showModal: ['admin', 'showModal']
  },
  actions: { ...AdminActions }
});
