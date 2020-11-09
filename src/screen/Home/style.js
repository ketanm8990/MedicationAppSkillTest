import { StyleSheet, Platform } from 'react-native'

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
        height: 21,
        width: 12,
        top: 20,
        left: 20,
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
    medicineTxt: {
        marginLeft: 38,
        marginRight: 37,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 24,
        fontSize: 22,
        fontFamily: 'HKGrotesk-SemiBold',
        top: 120,
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
        tintColor: 'rgb(82, 82, 82)'
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
    medicineFormView: {
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
    dayDropDownIcon: {
        height: 7,
        width: 12,
        right: 10,
        top: 20
    },
    durationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    durationTxt: {
        fontSize: 15,
        marginBottom: 10
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
    numberViewSection: {
        flex: 1,
        marginLeft: 15
    },
    datePickerContainer: {
        width: '100%',
        height: 44,
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
        top: 20
    },
    addInfo: {
        fontSize: 15,
        fontFamily: 'HKGrotesk-Medium'
    },
    addressContainerStyle: {
        height: 96,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 15,
    },
    addressStyle: {
        height: 65,
        paddingTop: 0,
        textAlignVertical: 'top'
    },
    addMedicine: {
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
    stickySection: {
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? 85 : 45,
        width: '100%',
        backgroundColor: "rgb(29, 157, 158)",
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
    stickyBack: {
        height: 21,
        marginTop: Platform.OS == 'ios' ? 50 : 10,
        marginLeft: 20,
        width: 12
    },
    stickyTitle: {
        flex:1,
        marginTop: Platform.OS == 'ios' ? 50 : 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginRight: 30
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
        marginRight: 5 
    },
});

export default styleSheet;