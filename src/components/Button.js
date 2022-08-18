import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export const Button = ({text, background, textColor, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: background}]}
      activeOpacity={0.6}
      {...rest}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
