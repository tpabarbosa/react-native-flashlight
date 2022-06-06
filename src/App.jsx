import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import usePermission from './hooks/usePermission';
import useTorch from './hooks/useTorch';
import useBrightness from './hooks/useBrightness';

import CameraMode from './components/CameraMode';
import ScreenOnlyMode from './components/ScreenOnlyMode';
import CommonMode from './components/CommonMode';
import StroboMode from './components/StroboMode';
import SosMode from './components/SosMode';

import styles from './styles';

import imageOn from './assets/eco-light.png';
import imageOff from './assets/eco-light-off.png';
import logoOn from './assets/logo-dio.png';
import logoOff from './assets/logo-dio-white.png';

const App = () => {
  const permissions = usePermission();
  const [screenOnlyColor, setScreenOnlyColor] = useState('white');
  const [hasPermission, setHasPermission] = useState(false);
  const torch = useTorch();
  const brightness = useBrightness();

  const initCameraMode = () => {
    brightness.changeTo('camera');
    torch.changeMode('camera');
  };

  const initScreenOnlyMode = () => {
    torch.changeMode('screen-only');
    brightness.changeTo('screen-only');
  };

  const leaveCameraMode = () => {
    brightness.changeTo('device');
    torch.changeMode('common');
  };

  const leaveScreenOnlyMode = () => {
    torch.changeMode('common');
    brightness.changeTo('device');
  };

  useEffect(() => {
    const CameraPermission = async () => {
      const CAMERA_PERMISSION = PermissionsAndroid.PERMISSIONS.CAMERA;
      const hasPermission = await permissions.handlePermission(
        CAMERA_PERMISSION
      );
      return hasPermission;
    };

    const FilePermission = async () => {
      const WRITE_PERMISSION =
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      const READ_PERMISSION =
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasWritePermission = await permissions.handlePermission(
        WRITE_PERMISSION
      );
      const hasReadPermission = await permissions.handlePermission(
        READ_PERMISSION
      );
      return hasWritePermission && hasReadPermission;
    };

    const BrightnessPermission = async () => {
      const hasPermission = await brightness.hasPermission;
      if (hasPermission) {
        return true;
      }
      return false;
    };

    const hasCameraPermission = CameraPermission();

    const hasFilePermission = FilePermission();
    const hasBrightnessPermission = BrightnessPermission();
    setHasPermission(
      hasCameraPermission && hasFilePermission && hasBrightnessPermission
    );
  }, []);

  if (!hasPermission) {
    return (
      <View>
        <Text>O aplicativo não possui as permissões necessárias</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        torch.isOn ? styles.containerOn : styles.containerOff,
        torch.mode === 'screen-only'
          ? { backgroundColor: screenOnlyColor }
          : {},
      ]}
    >
      {torch.mode !== 'screen-only' && (
        <TouchableOpacity onPress={() => torch.toggle()}>
          <View>
            <Image
              source={torch.isOn ? imageOn : imageOff}
              style={torch.isOn ? styles.lightOn : styles.lightOff}
            />
            {torch.mode !== 'sos' && (
              <Image
                source={torch.isOn ? logoOn : logoOff}
                style={styles.logo}
              />
            )}
            {torch.mode === 'sos' && <Text style={styles.sosText}>SOS</Text>}
          </View>
        </TouchableOpacity>
      )}

      {torch.isOn && torch.mode === 'common' && (
        <CommonMode
          onInitCameraMode={initCameraMode}
          onInitSosMode={() => torch.changeMode('sos')}
          onInitStroboMode={() => torch.changeMode('strobo')}
          onInitScreenOnlyMode={initScreenOnlyMode}
        />
      )}

      {torch.isOn && torch.mode === 'camera' && (
        <CameraMode
          onLeaveCameraMode={leaveCameraMode}
          test={torch}
        />
      )}

      {torch.mode === 'sos' && (
        <SosMode onLeaveSosMode={() => torch.changeMode('common')} />
      )}

      {torch.mode === 'screen-only' && (
        <ScreenOnlyMode
          onLeaveScreenOnlyMode={leaveScreenOnlyMode}
          onChangeColor={setScreenOnlyColor}
        />
      )}

      {torch.mode === 'strobo' && (
        <StroboMode
          onLeaveStroboMode={() => torch.changeMode('common')}
          frequency={torch.stroboFrequency}
          onChangeFrequency={torch.changeStroboFrequency}
        />
      )}
    </View>
  );
};

export default App;
