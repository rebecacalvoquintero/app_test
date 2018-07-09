import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import axios from 'axios';
import summaryData from './summary_data';
import TransactionDetail from './TransactionDetail';

class TransactionList extends Component {

  componentWillMount() {
    // axios.get('') // Get JSON for /summary/(user_ID)
    //           .then(response => this.setState({ transactions: response.data }));
  }

  renderTransactions() {
    return summaryData.Summary.transactions.map(transaction =>
      <TransactionDetail key={transaction.transaction_id} transaction={transaction} />
    );
  }

  render() {
    return (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            Balance: {summaryData.Summary.balance.balance}
          </Text>
          {this.renderTransactions()}
        </View>
    );
  }

}

export default TransactionList;
