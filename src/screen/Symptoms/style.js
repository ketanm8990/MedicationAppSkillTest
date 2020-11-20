import { StyleSheet, Platform } from 'react-native'

/*
* Symptoms screen style
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
        top: Platform.OS == 'ios' ? 20 : 25,
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
    symptomsTxt: {
        marginLeft: 38,
        marginRight: 37,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 24,
        fontSize: 18,
        fontFamily: 'HKGrotesk-Bold',
        top: 110,
        position: 'absolute',
        zIndex: 1,
    },
    symptomsSubTxt: {
        marginLeft: 38,
        marginRight: 37,
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'HKGrotesk-Medium',
        top: 140,
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
    scrollViewStyle: {
        flex: 1,
        marginTop: -33,
        zIndex: 1,
    },
    checkMedicineView: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 17,
        paddingBottom: 17,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        top: -43,
        zIndex: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBoxView: {
        marginRight: 15,
        height: 22,
        width: 22,
        tintColor: 'red'
    },
    infoStyle: {
        height: 16,
        width: 16,
        marginLeft: 10
    },
    checkMedicineTxt: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium'
    },
    symptomsFormView: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingTop: 17,
        paddingBottom: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10
    },
    normalText: {
        fontSize: 15,
        marginBottom: 10,
        fontFamily: 'HKGrotesk-Medium'
    },
    amountTxt: {
        fontSize: 15,
        marginBottom: 10
    },
    dropDownView: {
        flex: 1,
        marginLeft: 15
    },
    datePickerMainView: {
        flexDirection: 'row',
        height: 48,
        marginBottom: 20
    },
    dateArrow: {
        height: 7,
        width: 12,
        right: 30,
        top: 20
    },
    addSymptoms: {
        backgroundColor: '#fff',
        paddingTop: 19,
        marginBottom: 20,
        paddingBottom: 19,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusIcon: {
        height: 12,
        width: 12,
        marginRight: 10
    },
    addBtnTxt: {
        color: 'rgb(29, 157, 158)',
        fontSize: 15,
        fontFamily: 'HKGrotesk-SemiBold'
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
        alignItems: 'center'
    },
    nextTxt: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'HKGrotesk-Bold'
    },
    modelContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end'
    },
    modelSubContainer: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        padding: 10 
    },
    modelCloseView: {
        justifyContent: 'space-between',
        flexDirection:'row',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    removeIcon: {
        height: 18,
        width: 18
    }
});

export default styleSheet;