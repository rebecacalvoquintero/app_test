import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import transactionDetailData from './transactionDetailData';


class TransactionDetail extends Component {
  constructor(props) {
      super(props);

      this.state = {
          showTransactionDetails: false
      };
  }

  componentWillMount() {
    // axios.get('') // Get JSON for /summary/(user_ID)
    //           .then(response => this.setState({ transactions: response.data }));
  }

  toggleTransactionMenu = () => {
    this.setState({
      showTransactionDetails: !this.state.showTransactionDetails
    });
  }

  renderTransactionDetail = (transaction) => {
      return (
        <View>
          <Text>{transaction.transaction_id}</Text>
          <Text>{transaction.transaction_amount}</Text>
          <Text>£ {transaction.transaction_merchant}</Text>
          <Text>{transaction.transaction_type}</Text>
          <Text>£ {transaction.transaction_date}</Text>
        </View>
      );
  }

  render() {
    const { transaction } = this.props;
    console.log(transaction);
    return (
        <View style={styles.containerStyles} >

          <Text>{transaction.transaction_date}</Text>
          <Text>{transaction.merchant}</Text>
          <Text>£ {transaction.transaction_amount}</Text>
          <Button
          onPress={this.toggleTransactionMenu}
          title={
            this.state.showTransactionDetails
            ? 'Hide Details'
            : 'View Details'}
          />
          { this.state.showTransactionDetails
            ? this.renderTransactionDetail(transaction)
            : null
          }
        </View>
    );
  }

}


const styles = {
  containerStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,

  }
};

export default TransactionDetail;
