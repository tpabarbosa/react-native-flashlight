import React from 'react';
import OptionsBar from '../OptionsBar';
import OptionsIcon from '../OptionsIcon';
import OptionsColorButton from '../OptionsColorButton';

export default ScreenOnlyMode = ({ onLeaveScreenOnlyMode, onChangeColor }) => {
  return (
    <OptionsBar extraStyles={{ opacity: 1, backgroundColor: 'black' }}>
      <OptionsIcon
        name="arrow-left-bottom"
        color="white"
        onPress={onLeaveScreenOnlyMode}
      />

      <OptionsColorButton
        color={'chartreuse'}
        onPress={onChangeColor}
      />
      <OptionsColorButton
        color={'fuchsia'}
        onPress={onChangeColor}
      />
      <OptionsColorButton
        color={'deepskyblue'}
        onPress={onChangeColor}
      />
      <OptionsColorButton
        color={'yellow'}
        onPress={onChangeColor}
      />
      <OptionsColorButton
        color={'red'}
        onPress={onChangeColor}
      />
      <OptionsColorButton
        color={'white'}
        onPress={onChangeColor}
      />
    </OptionsBar>
  );
};
