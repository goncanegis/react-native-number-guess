import React from 'react';
import { Image, Text, View, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constants/Colors';

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.textDark,
    textAlign: 'center',
    backgroundColor: Colors.primary600Transparent,
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    maxWidth: '80%',
    width: 300,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
  },
});
