import React from 'react';
import mui from 'material-ui';
import { branch } from 'baobab-react/higher-order';

import Cards from '../components/Cards';

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
        <Paper className="Client__section" zDepth={1}>
          <p className="Client__title">INFORMACIÓN</p>
          <div className="Client__content">
            <p className="Client__information">Nombre: Uriel</p>
            <p className="Client__information">Email: aero@gmail.com</p>
            <p className="Client__information">Código de cliente: ASD86233FSDF7</p>
          </div>
        </Paper>

        <Paper className="Client__section" zDepth={1}>
          <p>TU SALDO</p>
          <Cards cards={dummyCards} />
        </Paper>
      </div>
    );
  }
}

export default branch(Client, {
  cursors: {},
  actions: {}
});
