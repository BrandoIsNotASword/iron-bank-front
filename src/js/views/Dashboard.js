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
    return <Paper zDepth={1}>Hola</Paper>;
  }
}

export default branch(Dashboard, {
  cursors: {},
  actions: {
    ...DashboardActions
  }
});
