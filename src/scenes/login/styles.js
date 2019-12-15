import { StyleSheet } from 'react-native';
import { Colors } from '_styles';

export default StyleSheet.create({
  container: {
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  textbox: {
    fontFamily: 'Roboto',
    color: Colors.WHITE,
    height: 50,
    width: 250,
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  button: {
    width: 150,
  },
  subtext: {
    color: Colors.SECONDARY,
    fontFamily: 'Roboto',
    fontSize: 12,
    padding: 5,
    textAlign: 'center',
  },
});
