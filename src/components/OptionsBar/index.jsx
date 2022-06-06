import React from 'react';
import { View, StyleSheet } from 'react-native';

export default OptionsBar = ({ extraStyles = {}, children }) => {
  return <View style={[styles.optionsBar, extraStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  optionsBar: {
    backgroundColor: 'white',
    opacity: 0.6,
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
