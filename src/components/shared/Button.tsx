import React from 'react';
import { Text, ButtonProps, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../colors/colors';

const Button = (props: ButtonProps) => {
  return (
      <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: colors.main,
    elevation: 8,
    borderRadius: 8,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  appButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 1
  }
});

export default Button;
