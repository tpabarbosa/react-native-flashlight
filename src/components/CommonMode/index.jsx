import React from 'react';
import OptionsBar from '../OptionsBar';
import OptionsIcon from '../OptionsIcon';

export default CommonMode = ({
  onInitCameraMode,
  onInitScreenOnlyMode,
  onInitSosMode,
  onInitStroboMode,
}) => {
  return (
    <>
      <OptionsBar>
        <OptionsIcon
          name="camera-iris"
          onPress={onInitCameraMode}
        />

        <OptionsIcon
          name="flash-alert"
          onPress={onInitSosMode}
        />
        <OptionsIcon
          name="speedometer"
          onPress={onInitStroboMode}
        />
        <OptionsIcon
          name="lightbulb-off-outline"
          onPress={onInitScreenOnlyMode}
        />
      </OptionsBar>
    </>
  );
};
