import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
//import axios from 'axios';
import TransactionsSummary from './TransactionsSummary';
import summaryData from './summary_data';

class TransactionList extends Component {

  state = { transactions: [] };

  componentWillMount() {
    // axios.get('') // Get JSON for /summary/(user_ID)
    //           .then(response => this.setState({ transactions: response.data }));
  }

  renderTransactions() {
    // return this.state.summaryData.transactions.map(transaction =>
    //   <TransactionDetail key={transaction.title} transaction={transaction} />
    // );
  }

  render() {
    return (
        <View>
          <Text>{summaryData.Summary.balance.account_type}</Text>
        </View>
    );
  }

}

export default TransactionList;
