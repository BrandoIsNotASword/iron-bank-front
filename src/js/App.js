import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { root } from 'baobab-react/higher-order';
import tree from './tree';

import Main from './views/Main';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

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
          <IndexRoute component={Login} />
          <Route path="dashboard" component={Dashboard} />
        </Route>
      </Router>
    );
  }
}

const RooterApp = root(App, tree);

ReactDOM.render(<RooterApp />, document.getElementById('app'));
