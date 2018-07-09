import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loggedIn: false };

  onButtonPress() {
    Actions.transactions();
    }

  render() {
    return (
      <View>

      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='e.g.: user@email.com'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={pw => this.setState({ pw })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onClick={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
