import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import styles from './styles';

import imageOn from './assets/eco-light.png';
import imageOff from './assets/eco-light-off.png';
import logoOn from './assets/logo-dio.png';
import logoOff from './assets/logo-dio-white.png';

const App = () => {
  const [isOn, toggle] = useState(false);

  const handleToggle = () => {
    toggle((value) => !value);
  };

  useEffect(() => {
    try {
      Torch.switchState(isOn);
    } catch (err) {
      console.log(err);
    }
  }, [isOn]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleToggle();
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={isOn ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleToggle}>
        <View>
          <Image
            source={isOn ? imageOn : imageOff}
            style={isOn ? styles.lightOn : styles.lightOff}
          />
          <Image
            source={isOn ? logoOn : logoOff}
            style={styles.logo}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;
