import { StyleSheet, Platform } from 'react-native'

/*
* Dashboard screen style
*/

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(231, 231, 235)',
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'rgb(231, 231, 235)',
        justifyContent: 'center',
        alignContent: 'center'
    },
    backgroundColorView: {
        backgroundColor: 'rgb(29, 157, 158)'
    },
    btnView: {
        backgroundColor: 'rgb(29, 157, 158)',
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    normalText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
});

export default styleSheet;