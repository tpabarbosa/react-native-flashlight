import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import OptionsBar from '../OptionsBar';
import OptionsIcon from '../OptionsIcon';

export default StroboMode = ({
  onLeaveStroboMode,
  frequency,
  onChangeFrequency,
}) => {
  return (
    <OptionsBar extraStyles={{ opacity: 0.3 }}>
      <OptionsIcon
        name="arrow-left-bottom"
        onPress={onLeaveStroboMode}
      />
      <View style={styles.slider}>
        <Slider
          step={1}
          maximumValue={10}
          minimumValue={0}
          value={frequency}
          onValueChange={(value) => onChangeFrequency(parseInt(value))}
        ></Slider>
      </View>
    </OptionsBar>
  );
};

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
