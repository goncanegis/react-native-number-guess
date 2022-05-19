import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500Transparent,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: deviceWidth < 380 ? 12 : 24,
    backgroundColor: Colors.primary600Transparent,
  },
  numberText: {
    color: Colors.textDark,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: 'open-sans-bold',
  },
});
