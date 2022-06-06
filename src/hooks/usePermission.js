import { PermissionsAndroid } from 'react-native';

export default usePermission = () => {
    const hasPermission = async(permission) => {
        try {
            const hasPermission = await PermissionsAndroid.check(permission);
            if (hasPermission) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    };
    const requestPermission = async(permission) => {
        try {
            const granted = await PermissionsAndroid.request(permission);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    const handlePermission = async(permission) => {
        const hasPerm = await hasPermission(permission);
        if (hasPerm) {
            return true;
        } else {
            const isGranted = await requestPermission(permission);
            if (isGranted) {
                return true;
            } else {
                return false;
            }
        }
    };

    return { handlePermission, hasPermission, requestPermission };
};