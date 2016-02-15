import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Page from '../components/Page';
import NotificationError from '../components/NotificationError';

import * as RegisterActions from '../actions/RegisterActions';

const {
  TextField,
  RaisedButton
} = mui;

const { Component } = React;

class Register extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };

    // FIX: don't trim password.
  }

  componentDidMount() {
    RegisterActions.setToken(this.props.location.query.token);
  }

  handleChange(name, e) {
    if (e.target.value.trim()) this.actions.setInformation(name, e.target.value);
  }

  handleClick() {
    const password = this.refs.password.getValue().trim();
    const repassword = this.refs.repassword.getValue().trim();

    if ((password && repassword) && (password === repassword)) {
      this.actions.sendInformation(password);
    } else {
      this.actions.setError(true);
    }
  }

  render() {
    return (
      <Page className="Register">
        <p>REGISTRO DE CUENTA</p>
        <p className="Register__subtitle">Ingresa tu contraseña para finalizar registro.</p>
        <NotificationError message="Contraseñas incompatibles" error={this.props.error} />
        <TextField
          ref="password"
          hintText="Contraseña"
          floatingLabelText="Contraseña"
          type="password"
          onChange={this.handleChange.bind(this, 'password')}
        />
        <TextField
          ref="repassword"
          hintText="Confirma contraseña"
          floatingLabelText="Confirma contraseña"
          type="password"
          onChange={this.handleChange.bind(this, 'repassword')}
        />
        <RaisedButton
          label="Entrar"
          style={{ marginTop: '0.5em' }}
          onClick={this.handleClick.bind(this)}
        />
      </Page>
    );
  }
}

export default branch(Register, {
  cursors: {
    password: ['register', 'password'],
    repassword: ['register', 'repassword'],
    error: ['register', 'error']
  },
  actions: {
    ...RegisterActions
  }
});
