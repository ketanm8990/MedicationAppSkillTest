import { StyleSheet, Platform } from 'react-native'

/*
* Following screen style
*/

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(231, 231, 235)',
    },
    backgroundTopView: {
        backgroundColor: 'rgb(29, 157, 158)',
        height: 320,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundColorView: {
        backgroundColor: 'rgb(29, 157, 158)'
    },
    linerView: {
        position: 'absolute',
        top: 0,
        right: 0,
        flex: 1,
        zIndex: 1
    },
    backIconView: {
        position: 'absolute',
        zIndex: 1,
        paddingRight: 5,
        paddingLeft: 5,
        top: 20,
        left: 20,
    },
    backIconStyle: {
        height: 21,
        width: 12,
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginBottom10: {
        marginBottom: 10
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    flexOne: {
        flex: 1
    },
    lineImgView: {
        height: 180,
        width: 210,
    },
    medicineTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    follwingTxt: {
        marginLeft: 38,
        marginRight: 37,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 24,
        fontSize: 18,
        fontFamily: 'HKGrotesk-Bold',
        top: 100,
        position: 'absolute',
        zIndex: 1,
    },
    subContainer: {
        flex: 1
    },
    separateView: {
        top: -15,
        position: 'absolute',
        zIndex: 1,
        height: 15,
        width: '100%',
        backgroundColor: 'rgb(231, 231, 235)',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    flatListView: {
        top: -43,
        zIndex: 2,
    },
    checkMoreListView: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 19,
        paddingBottom: 19,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    checkBoxView: {
        marginRight: 15,
        height: 22,
        width: 22,
        tintColor: 'red'
    },
    checkFollwingTxt: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium'
    },
    normalText: {
        fontSize: 15,
        marginBottom: 10,
        fontFamily: 'HKGrotesk-Medium'
    },
    nextBtnView: {
        backgroundColor: 'rgb(235, 32, 37)',
        paddingTop: 15,
        marginBottom: 20,
        paddingBottom: 14,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: -33
    },
    nextTxt: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'HKGrotesk-Bold'
    },
});

export default styleSheet;