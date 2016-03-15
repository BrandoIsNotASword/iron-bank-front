import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';
import ProfileHeader from '../components/ProfileHeader';

import * as ProfileActions from '../actions/ProfileActions';

const { Component } = React;
const { Paper } = mui;
const dummyCards = [
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' },
  { code: 'ASD86233FSDF7', money: 1, type: 'client' }
];

class Profile extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getClientById(this.props.params.id);
  }

  render() {
    return (
      <div className="Profile">
        <ProfileHeader user={this.props.client} />

        <Paper className="Profile__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={dummyCards} />
        </Paper>
      </div>
    );
  }
}

export default branch(Profile, {
  cursors: {
    client: ['profile', 'client']
  },
  actions: { ...ProfileActions }
});
