import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default OptionsColorButton = ({ color, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(color)}>
      <View style={[styles.color, { backgroundColor: color }]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  color: {
    padding: 0,
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
});
