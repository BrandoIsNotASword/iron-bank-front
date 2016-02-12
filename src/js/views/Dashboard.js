import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import * as DashboardActions from '../actions/DashboardActions';

const { Component } = React;
const { Paper } = mui;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getInformation();
  }

  render() {
    return (
      <div className="Dashboard">
        <Paper className="Dashboard__section" zDepth={1}>
          <p className="Dashboard__title">INFORMACIÓN</p>
          <div className="Dashboard__content">
            <p className="Dashboard__information">Nombre: Uriel</p>
            <p className="Dashboard__information">Email: aero@gmail.com</p>
            <p className="Dashboard__information">Código de cliente: ASD86233FSDF7</p>
          </div>
        </Paper>

        <Paper className="Dashboard__section" zDepth={1}>
          <p>TU SALDO</p>
        </Paper>
      </div>
    );
  }
}

export default branch(Dashboard, {
  cursors: {},
  actions: {
    ...DashboardActions
  }
});
