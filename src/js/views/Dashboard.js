import React from 'react';
import { branch } from 'baobab-react/higher-order';

import Client from './Client';
import Cashier from './Cashier';
import Executive from './Executive';

import * as DashboardActions from '../actions/DashboardActions';

const { Component } = React;

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getInformation();
  }

  render() {
    switch (this.props.user.type) {
    case 'executive': return <Executive />;
    case 'admin': return <Executive />;
    case 'cashier': return <Cashier />;
    case 'client': return <Client />;
    default: break;
    }
  }
}

export default branch(Dashboard, {
  cursors: {
    user: ['main', 'user']
  },
  actions: {
    ...DashboardActions
  }
});
