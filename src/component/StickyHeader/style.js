/**
 * Common styles for sticky header Component
 */

import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    backgroundColorView: {
        backgroundColor: 'rgb(29, 157, 158)'
    },
    stickySection: {
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? isIphoneX() ? 90 : 70 : 50,
        width: '100%',
        backgroundColor: "rgb(29, 157, 158)",
        alignItems: 'center'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
    stickyBack: {
        height: 21,
        marginTop: Platform.OS == 'ios' ? isIphoneX() ? 40 : 20 : 0,
        marginLeft: 20,
        width: 12
    },
    stickyTitle: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? isIphoneX() ? 40 : 20 : 0,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginRight: 30
    }
});