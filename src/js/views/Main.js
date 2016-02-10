import React from 'react';
import { branch } from 'baobab-react/higher-order';

const { Component } = React;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Main">{this.props.children}</div>;
  }
}

export default branch(Main, {
  cursors: {}
});
