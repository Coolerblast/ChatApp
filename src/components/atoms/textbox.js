import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';

// FIX THIS CLASS LATER
export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <TextInput
        style={styles.container}
        placeholder={this.props.placeholder}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        keyboardType={this.props.keyboardType}
        secureTextEntry
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 250,
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
});
