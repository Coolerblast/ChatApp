import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, TouchableHighlight } from 'react-native';
import { Button } from '_atoms';

import styles from './styles';

export default class LoginScreen extends Component {
  constructor(props) {
    super();
    this.state = { user: '', password: '' };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.textbox}
          placeholder="Email"
          onChangeText={user => this.setState({ user })}
          value={this.state.user}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textbox}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.button}
        />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.subtext}>New? Sign up here.</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
