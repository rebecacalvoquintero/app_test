import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TransactionsView from './components/TransactionsView';
//import TransactionsView from './components/TransactionsView';

const RouterComponent = () => (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Log In" initial />
        <Scene key="transactions" component={TransactionsView} title="Transactions" />
      </Scene>
    </Router>
  );

export default RouterComponent;
