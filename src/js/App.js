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
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Client from './views/Client';
import Cashier from './views/Cashier';
import Executive from './views/Executive';

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
            <Route path="executive" component={Executive} />
          </Route>
          <Route path="profile/:id" component={Profile} />
        </Route>
      </Router>
    );
  }
}

const RootedApp = root(App, tree);

ReactDOM.render(<RootedApp />, document.getElementById('app'));
