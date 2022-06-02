import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    containerOff: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerOn: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textOff: {
        color: 'white',
    },
    textOn: {
        color: 'black',
    },
    lightOn: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    lightOff: {
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
        width: 150,
        height: 150
    },
    logo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 250,
        height: 250
    },
    test: {
        backgroundColor: 'red',
    }
})