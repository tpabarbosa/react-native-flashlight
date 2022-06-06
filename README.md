# React-Native Flashlight

This project is an **Android app** that was made as a challenge from the bootcamp **Decola Tech 3ª Edição - DIO - Avanade Brasil**. It is a **flashlight** with some extra functions:

- **Torch mode**, where light is on

- **Camera mode**, where light is on and users can take photos and also access than from smartphone gallery

- **SOS mode**, where light blinks an SOS morse code (. . .,- - -,. . .)

- **Stroboscope mode**, where light blinks in an adjustable frequency, between 0Hz and 10Hz

- **Screen Only mode**, where light is off, screen brigthness is set to maximum and users can choose screen color

- **Shake to turn on and off**, when app is in Torch, SOS or Stroboscope mode

![image1](/docs/imagem1.png?raw=true)
![image2](/docs/imagem2.png?raw=true)

## Dependencies

- **React Native Slider**: [@miblanchard/react-native-slider": "^2.1.0](https://github.com/miblanchard/react-native-slider)

- **React Native Camera Roll**: ["@react-native-community/cameraroll": "^4.1.2"](https://github.com/react-native-cameraroll/react-native-cameraroll)

- **React Native Screen Brightness**: ["react-native-screen-brightness": "^2.0.0-alpha"](https://github.com/robinpowered/react-native-screen-brightness)

- **React Native Shake**: ["react-native-shake": "^5.1.1"](https://github.com/Doko-Demo-Doa/react-native-shake)

- **React Native Torch**:["react-native-torch": "^1.2.0"](https://github.com/ludo/react-native-torch)

- **React Native Vector Icons**:["react-native-vector-icons": "^9.1.0"](https://github.com/oblador/react-native-vector-icons)

- **React Native Vision Camera**: ["react-native-vision-camera": "^2.13.3"](https://github.com/mrousavy/react-native-vision-camera)

## Drawbacks

This app was not tested in IOS, some adjusts will be necessary if you want to run it in that platform.

SOS and Stroboscope mode change to Torch mode when application is running in background. This happens because they were coded using setInterval and setTimeout that stop running when app is not in foreground.

Camera mode lights off when application is running in background. This happens because light is attached to camera, and, to save battery, camera gets in standy by when it is not in foreground.

Permissions requests may not work properly, I did not put big efforts in it yet.

## Todo

- add slider to adjust brightness when app is in Screen Only mode

- add custom colors to Screen Only mode

- add Screen Only With Stroboscope mode

- improve how Camera mode handles photos that were taken

- improve Camera mode life cicle to change to Torch mode before app goes into background

- add new dependency [React Native Background Timer](https://github.com/ocetnik/react-native-background-timer) to prevent SOS and Stroboscope mode to stop when app is in background

- improve permissions verifications and requests