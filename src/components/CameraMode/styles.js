import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    snapshotButton: {
        position: 'absolute',
        backgroundColor: 'darkred',
        opacity: 0.8,
        borderWidth: 2,
        borderRadius: 100,
        width: 80,
        height: 80,
        bottom: 10,
        left: (Dimensions.get('window').width - 80) / 2
    },
    leaveCameraModeButton: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: 80,
        height: 80,
        bottom: 80 / 2,
        left: 80 / 2
    },
    cameraArea: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
        top: 0,
        left: 0,
    },
    camera: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    optionsBar: {
        backgroundColor: 'white',
        opacity: 0.6,
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    icon: {
        padding: 0,
        width: 50,
        marginHorizontal: 0,
    },

    snapshootEffect: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.6,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    openPhotoButton: {
        position: 'absolute',
        borderWidth: 2,
        borderRadius: 100,
        width: 80,
        height: 80,
        bottom: 10,
        right: 20,
    },
    photo: {
        borderWidth: 2,
        borderRadius: 100,
        width: 76,
        height: 76,
    }
})