import React from 'react';
import { branch } from 'baobab-react/higher-order';

import * as MainActions from '../actions/MainActions';

const { Component } = React;

class Main extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getClients();
  }

  render() {
    return <div className="Main">{this.props.children}</div>;
  }
}

export default branch(Main, {
  cursors: {},
  actions: { ...MainActions }
});
