import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';
import ProfileHeader from '../components/ProfileHeader';

import * as ClientActions from '../actions/ClientActions';

const { Component } = React;
const { Paper } = mui;

class Client extends Component {
  constructor(props) {
    super(props);

    this.actions = { ...this.props.actions };
  }

  componentDidMount() {
    this.actions.getCardsByClient();
  }

  render() {
    return (
      <div className="Client">
        <ProfileHeader user={this.props.user} />

        <Paper className="Client__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={this.props.cards} />
        </Paper>
      </div>
    );
  }
}

export default branch(Client, {
  cursors: {
    user: ['main', 'user'],
    cards: ['client', 'cards']
  },
  actions: { ...ClientActions }
});
