import React from 'react';
import { branch } from 'baobab-react/higher-order';

import Client from './Client';
import Cashier from './Cashier';
import Executive from './Executive';
import Admin from './Admin';

import ProfileHeader from '../components/ProfileHeader';

import * as DashboardActions from '../actions/DashboardActions';

const { Component } = React;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getInformation();
  }

  render() {
    let view;

    switch (this.props.user.type) {
    case 'admin': view = <Admin />; break;
    case 'executive': view = <Executive />; break;
    case 'cashier': view = <Cashier />; break;
    case 'client': view = <Client />; break;
    default: break;
    }

    return (
      <div className="Dashboard">
        <ProfileHeader user={this.props.user} />
        {view}
      </div>
    );
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
