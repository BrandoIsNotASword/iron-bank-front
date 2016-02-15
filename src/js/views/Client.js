import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';
import ProfileHeader from '../components/ProfileHeader';

const { Component } = React;
const { Paper } = mui;
const dummyCards = [
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' }
];

class Client extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  render() {
    return (
      <div className="Client">
        <ProfileHeader user={this.props.user} />

        <Paper className="Client__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={dummyCards} />
        </Paper>
      </div>
    );
  }
}

export default branch(Client, {
  cursors: {
    user: ['main', 'user']
  },
  actions: {}
});
