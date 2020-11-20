/**
 * Common styles for drop down Component
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputAndroid: {
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium',
        backgroundColor: 'rgb(245, 245, 247)',
        height: 48,
        borderWidth: 0,
        borderRadius: 10,
        padding: 15,
        paddingLeft: 18,
        color: 'black',
        overflow: 'hidden',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    inputIOS: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'HKGrotesk-Medium',
        backgroundColor: 'rgb(245, 245, 247)',
        height: 48,
        borderWidth: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        borderRadius: 10,
    },
    mgDropDown: {
        height: 7,
        width: 12,
        right: 18,
        top: 20
    },
});