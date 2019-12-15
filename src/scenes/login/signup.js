import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, TouchableHighlight } from 'react-native';
import { Button } from '_atoms';
import { validate } from 'validate.js';

import constraints from './constraints';
import styles from './styles';

export default class SignUpScreen extends Component {
  constructor(props) {
    super();
    this.state = { emailAddress: '', password: '' };
  }

  validate = () => {
    const validationResult = validate(this.state, constraints);
    this.setState({ errors: validationResult });
    if (validationResult == null) {
      this.props.navigation.navigate('Login');
    }
  };

  getErrorMessages(separator = '\n') {
    const { errors } = this.state;
    if (!errors) {
      return [];
    }

    return Object.values(errors)
      .map(it => it.join(separator))
      .join(separator);
  }

  getErrorsInField(field) {
    const { errors } = this.state;
    return (errors && errors[field]) || [];
  }

  isFieldInError(field) {
    const { errors } = this.state;
    return errors && !!errors[field];
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.textbox}
          placeholder="Email"
          onChangeText={emailAddress => this.setState({ emailAddress })}
          value={this.state.emailAddress}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textbox}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        {this.isFieldInError('emailAddress') &&
          this.getErrorsInField('emailAddress').map(errorMessage => <Text>{errorMessage}</Text>)}
        {this.isFieldInError('password') &&
          this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>)}
        <Button title="Sign Up" onPress={() => this.validate()} style={styles.button} />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.subtext}>Return to login.</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
