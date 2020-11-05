import { StyleSheet } from 'react-native'

/*
* home screen style
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
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 50,
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
        height: 21,
        width: 12,
        top: 20,
        left: 20,
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginBottom10: {
        marginBottom: 12
    },
    flexDirectionRow:{
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
    medicineTxt: {
        marginLeft: 38,
        marginRight: 37,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 24,
        fontSize: 22,
        // marginTop: -30,
        fontFamily: 'HKGrotesk-SemiBold'
    },
    subContainer: {
        flex: 1
    },
    sperateView: {
        top: -60,
        position: 'absolute',
        zIndex: 1,
        height: 60,
        width: '100%',
        backgroundColor: 'rgb(231, 231, 235)',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    scrollViewStyle: {
        flex: 1, marginTop: -80, zIndex: 1,
    },
    checkMedicineView: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 17,
        paddingBottom: 17,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        top: -88,
        zIndex: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center'
    },
    checkBoxView: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 15,
        height: 22,
        width: 22
    },
    infoStyle: {
        height: 16, width: 16, marginLeft: 10 
    },
    checkMedicineTxt: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium'
    },
    medicineFormView: {
        backgroundColor: '#fff',
        elevation: 5,
        paddingLeft: 20,
        paddingTop: 17,
        // top: -15,
        paddingBottom: 17,
        paddingRight: 20,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20
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
    dayDropDownIcon: {
        height: 7,
        width: 12,
        right: 10,
        top: 20    
    },
    durationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14
    },
    durationTxt: {
        fontSize: 15,
        marginBottom: 10
    },
    datePickerContainer: {
        width: '100%',
        height: 48,
    },
    selectDatePickerCommonStyle: {
        color: '#000',
        fontFamily: 'HKGrotesk-Medium',
        fontSize: 15
    },
    datePickerCommonStyle: {
        color: 'rgba(34, 34, 34, 0.3)',
        fontFamily: 'HKGrotesk-Medium',
        fontSize: 15
    },
    moreInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    mgDropDown: {
        height: 7,
        width: 12,
        right: 10,
        top: 20
    },
    numberViewSection: {
        flex: 1,
        marginLeft: 15 
    },
    datePickerMainView: {
        flexDirection: 'row',
        height: 48,
        marginBottom: 20
    },
    datePickerView: {
        fontSize: 15,
        alignItems: "flex-start",
        color: '#000',
        fontFamily: 'HKGrotesk-Medium',
        backgroundColor: 'rgb(245, 245, 247)',
        width: '100%',
        height: 48,
        borderWidth: 0,
        borderRadius: 10,
        paddingRight: 15,
        paddingLeft: 15,
    },
    dateArrow: {
        height: 7,
        width: 12,
        right: 25,
        top: 17
    },
    addInfo: {
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium'
    },
    addressStyle: {
        height: 96,
        paddingTop: 10,
        textAlignVertical: 'top' 
    },
    addMedicine: {
        backgroundColor: '#fff',
        elevation: 5,
        paddingTop: 19,
        marginBottom: 20,
        marginTop: 10,
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
        elevation: 5,
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
    nextTxt: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'HKGrotesk-Bold'
    },
    inputAndroid: {
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium',
        backgroundColor: 'rgb(245, 245, 247)',
        height: 48,
        borderWidth: 0,
        borderRadius: 10,
        padding: 15,
        color: 'black',
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
    }
});

export default styleSheet;