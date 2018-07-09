import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

// Component imports
// import { Header } from './src/components/common';
//import LoginForm from './src/components/LoginForm';
import TransactionsView from './src/components/TransactionsView';
import Router from './src/Router';


class App extends Component {

  componentWillMount() {

  }

  render() {
    return (
        <Router />
      // <View>
      //   <Header headerText='Authentication' />
      //   <LoginForm />
      // </View>

      // <View>
      //   <Header headerText='Transactions' />
      //   <TransactionsView />
      // </View>
    );
  }
}

AppRegistry.registerComponent('auth', () => App);
