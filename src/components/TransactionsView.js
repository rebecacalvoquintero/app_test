import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TransactionList from './TransactionList';

class TransactionsView extends Component {
  render() {
    return (
      <View>
          <TransactionList />
      </View>
    );
  }
}

const styles = {
  balanceStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionStyle: {
    fontSize: 14,

  }
}

export default TransactionsView;
