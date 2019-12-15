import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.onPressIn = () => this.setState({ active: true });
    this.onPressOut = () => this.setState({ active: false });
  }
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onPress}>
        <Text style={[styles.button, this.props.style]}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: 15,
    padding: 15,
    textAlign: 'center',
  },
});
