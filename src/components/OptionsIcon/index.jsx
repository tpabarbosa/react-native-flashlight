import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default OptionsIcon = ({
  name,
  onPress,
  color = 'black',
  size = 40,
}) => {
  return (
    <Icon
      name={name}
      style={[styles.icon]}
      color={color}
      size={size}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 0,
    width: 50,
    marginHorizontal: 0,
  },
});
