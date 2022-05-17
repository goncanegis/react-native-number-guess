import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    maxWidth: '80%',
    width: 300,
  },
});
