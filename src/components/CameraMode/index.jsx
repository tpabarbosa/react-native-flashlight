import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { Camera } from 'react-native-vision-camera';
import OptionsIcon from '../OptionsIcon';
import useIsAppForeground from '../../hooks/useIsAppForeground';

import OptionsBar from '../OptionsBar';
import styles from './styles';

export default CameraMode = ({ onLeaveCameraMode }) => {
  const [isOn, setIsOn] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [myDevice, setMyDevice] = useState(null);
  // const devices = useCameraDevices();
  // let device = devices.back;

  const isForeground = useIsAppForeground();
  const cameraRef = useRef(null);
  const [isSnapshooting, setIsSnapshooting] = useState(false);
  const [snapshotPath, setSnapshotPath] = useState('');
  const [galleryPath, setGalleryPath] = useState('');

  const handleTakeSnapshot = async () => {
    setIsSnapshooting(true);
    try {
      const snapshot = await cameraRef.current.takeSnapshot({
        quality: 85,
        skipMetadata: true,
      });
      const path = await CameraRoll.save(snapshot.path);
      setGalleryPath(path);
      const photos = await CameraRoll.getPhotos({
        first: 1,
        assetType: 'Photos',
      });
      if (photos.edges[0]) {
        setSnapshotPath(photos.edges[0].node.image.uri);
      }
    } catch (err) {
      console.log(err);
    }
    const t = setTimeout(() => setIsSnapshooting(false), 100);
  };

  const handleOpenPhoto = async () => {
    const canOpen = await canOpenPhoto();
    if (!canOpen) return;
    Linking.openURL(galleryPath);
  };

  const handleLeaveCameraMode = () => {
    const getDevice = async () => {
      setIsLightOn(false);
      const devices = await Camera.getAvailableCameraDevices();
      const device = devices.find((d) => d.hasFlash === false);
      setMyDevice(device);
      return device;
    };

    getDevice();

    setTimeout(() => {
      setIsOn(false);
      onLeaveCameraMode();
    }, 600);
  };

  const canOpenPhoto = async () => {
    if (galleryPath === '') return false;
    const canOpen = await Linking.canOpenURL(galleryPath);
    if (!canOpen) {
      setGalleryPath('');
      setSnapshotPath('');
      return false;
    }
    return true;
  };

  // check for last images
  useEffect(() => {
    canOpenPhoto();

    const getDevice = async () => {
      const devices = await Camera.getAvailableCameraDevices();
      const device = devices.find((d) => d.position === 'back');
      setMyDevice(device);
      return device;
    };

    getDevice();
    setIsOn(true);
    setIsLightOn(true);

    return () => {
      // if (isLightOn) {
      //   handleLeaveCameraMode();
      // }
    };
  }, []);

  return (
    <View style={styles.cameraArea}>
      {myDevice && isOn && (
        <>
          <Camera
            ref={cameraRef}
            style={[styles.camera]}
            device={myDevice}
            isActive={isForeground && isOn}
            torch={isForeground && isLightOn ? 'on' : 'off'}
          />

          {isSnapshooting && <View style={styles.snapshootEffect} />}

          <OptionsBar extraStyles={{ backgroundColor: 'black', opacity: 0.2 }}>
            <OptionsIcon
              name="arrow-left-bottom"
              color="black"
              onPress={handleLeaveCameraMode}
            />
          </OptionsBar>

          <TouchableOpacity
            onPress={handleTakeSnapshot}
            style={[styles.snapshotButton]}
          >
            <View></View>
          </TouchableOpacity>

          {snapshotPath !== '' && (
            <TouchableOpacity
              onPress={handleOpenPhoto}
              style={[styles.openPhotoButton]}
            >
              <Image
                source={{ uri: snapshotPath }}
                style={[styles.photo]}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};
