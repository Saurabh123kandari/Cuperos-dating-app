import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text} from 'react-native';

const ButtonGrad = props => {
  return (
    <LinearGradient
      colors={['#D72D79', '#9264F2']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.linearGradient}>

      <Text style={styles.buttonText}>{props.title}</Text>
      
    </LinearGradient>
  );
};

export default ButtonGrad;
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Poppins',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
