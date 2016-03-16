import React from 'react';
import { Paper, CircularProgress } from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';
import ProfileHeader from '../components/ProfileHeader';

import * as ProfileActions from '../actions/ProfileActions';

const { Component } = React;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getClientById(this.props.params.id);
  }

  render() {
    if (this.props.loader) return <CircularProgress />;

    return (
      <div className="Profile">
        <ProfileHeader user={this.props.client} />

        <Paper className="Profile__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={this.props.client.cards} />
        </Paper>
      </div>
    );
  }
}

export default branch(Profile, {
  cursors: {
    client: ['profile', 'client'],
    loader: ['profile', 'loader']
  },
  actions: { ...ProfileActions }
});
