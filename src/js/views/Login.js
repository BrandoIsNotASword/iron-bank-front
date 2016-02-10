import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import * as LoginActions from '../actions/LoginActions';

const {
  Paper,
  TextField,
  RaisedButton
} = mui;

const { Component } = React;

class Login extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  handleChange(name, e) {
    if (e.target.value.trim()) this.actions.setInformation(name, e.target.value);
  }

  handleClick() {
    this.actions.sendInformation();
  }

  render() {
    return (
      <Paper zDepth={1} className="Login">
        <p>INICIA SESIÓN</p>
        <TextField
          hintText="Código de usuario"
          floatingLabelText="Código de usuario"
          onChange={this.handleChange.bind(this, 'code')}
        />
        <TextField
          hintText="Contraseña"
          floatingLabelText="Contraseña"
          type="password"
          onChange={this.handleChange.bind(this, 'password')}
        />
        <RaisedButton
          label="Entrar"
          style={{ marginTop: '0.5em' }}
          onClick={this.handleClick.bind(this)}
        />
      </Paper>
    );
  }
}

export default branch(Login, {
  cursors: {
    code: ['login', 'code'],
    password: ['login', 'password']
  },
  actions: {
    ...LoginActions
  }
});
