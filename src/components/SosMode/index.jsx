import React from 'react';
import OptionsBar from '../OptionsBar';
import OptionsIcon from '../OptionsIcon';

export default SosMode = ({ onLeaveSosMode }) => {
  return (
    <OptionsBar>
      <OptionsIcon
        name="arrow-left-bottom"
        onPress={onLeaveSosMode}
      />
    </OptionsBar>
  );
};
