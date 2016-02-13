import React from 'react';
import { branch } from 'baobab-react/higher-order';

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
    return this.props.children;
  }
}

export default branch(Dashboard, {
  cursors: {},
  actions: {
    ...DashboardActions
  }
});
