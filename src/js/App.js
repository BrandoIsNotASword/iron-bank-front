import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { root } from 'baobab-react/higher-order';
import tree from './tree';

import Main from './views/Main';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Client from './views/Client';
import Cashier from './views/Cashier';

/* eslint-disable */
import styles from '../styles/main.scss';
/* eslint-enable */

injectTapEventPlugin();

const { Component } = React;
const history = useRouterHistory(createHashHistory)({ queryKey: false });

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Main}>
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
          <Route path="dashboard" component={Dashboard}>
            <Route path="client" component={Client} />
            <Route path="cashier" component={Cashier} />
            <Route path="executive" />
          </Route>
        </Route>
      </Router>
    );
  }
}

const RooterApp = root(App, tree);

ReactDOM.render(<RooterApp />, document.getElementById('app'));
