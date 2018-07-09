import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';
import TransactionList from './TransactionList';

class TransactionsView extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Text style={styles.balanceStyle}>Balance: £12,345</Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text style={styles.transactionStyle}>ThoughtWorks: £12.62</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.transactionStyle}>Tesco: £5.12</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.transactionStyle}>Ann Summers: £7.41</Text>
          </CardSection>
        </Card>
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
