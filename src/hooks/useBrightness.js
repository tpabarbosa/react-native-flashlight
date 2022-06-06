import React, { useState, useEffect } from 'react'
import ScreenBrightness from 'react-native-screen-brightness';

export default useBrightness = () => {
    const [appBrightness, setAppBrightness] = useState(1)
    const [deviceBrightness, setDeviceBrightness] = useState(null);
    const [hasPermission, setHasPermission] = useState(false);
    const setBrightness = (value) => {
        try {
            ScreenBrightness.setBrightness(value);
        } catch (err) {
            console.log(err);
        }
    }

    const changeTo = (type) => {
        if (type === 'camera') {
            setBrightness(1)
        } else if (type === 'screen-only') {
            setBrightness(appBrightness)
        } else if (type === 'device') {
            const value = deviceBrightness >= 255 ? 1 : deviceBrightness / 256
            setBrightness(value)
        }
    }

    useEffect(() => {
        const BrightnessPermission = async() => {
            const hasPermission = await ScreenBrightness.hasPermission();

            if (hasPermission) {
                return true;
            }
            const status = await ScreenBrightness.requestPermission();
            console.log('brightPerm', status);
            return status === 'granted';
        };

        const hasPermission = BrightnessPermission()
        setHasPermission(hasPermission)

        const getDeviceBrightness = async() => {
            const defaultBrightness = await ScreenBrightness.getBrightness();
            setDeviceBrightness(defaultBrightness);
        };

        getDeviceBrightness();
    }, [])
    return { appBrightness, deviceBrightness, changeTo, hasPermission }
}