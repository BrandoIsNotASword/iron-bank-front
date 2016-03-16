import React from 'react';
import { branch } from 'baobab-react/higher-order';

import Cashier from './Cashier';
import Executive from './Executive';

const { Component } = React;

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Admin">
        <Executive />
        <Cashier />
      </div>
    );
  }
}

export default branch(Admin, {
  cursors: {
    user: ['main', 'user']
  },
  actions: {}
});
