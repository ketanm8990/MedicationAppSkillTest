
import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image,
    ActivityIndicator,
    Keyboard,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import Input from '../../component/InputWithIcon';
import styles from './style';
import DropDown from '../../component/DropDown';
import moment from "moment";
import Dates from 'react-native-dates';
import ParallaxScrollView from '../../component/ParallaxScrollView';
import Modal from 'react-native-modal';
import StickyHeader from '../../component/StickyHeader';
import { isIphoneX } from 'react-native-iphone-x-helper';

/*========================================================
* function Name: Home screen design
* function Purpose: using medication screen design and dummy api call.
* function Description: home screen using input box, datepicker, select drop down picker and other component and dummy api call.
*=====================================================*/

const Home = (props) => {

    // references
    const refMedicationName = useRef(null);
    const refAmount = useRef(null);
    const refNumber = useRef(null);
    const refAddress = useRef(null);

    // local state 
    const [medicationName, setMedicationName] = useState();
    const [amount, setAmount] = useState();
    const [number, setNumber] = useState("2");
    const [address, setAddress] = useState();
    const [loading, setLoading] = useState();
    const [selectDosage, setSelectDosage] = useState('Mg');
    const [selectDay, setSelectDay] = useState('Daily');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focus, setFocus] = useState('startDate');
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [checkBoxVisible, setCheckBoxVisible] = useState(false);

    // dummy api call
    const dummyApiCall = () => {
        setLoading(true)
        fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false)
                if (responseJson && responseJson.args) {
                    alert(JSON.stringify(responseJson.args));
                } else {
                    alert('Api calling failed');
                }
            })
            .catch((error) => {
                setLoading(false)
                alert(JSON.stringify(error));
            });
    }

    const onDatesChange = ({ startDate, endDate, focusedInput }) => {
        setFocus(focusedInput);
        setStartDate(startDate);
        setEndDate(endDate);
    }

    // validation selection date 
    const onConfirmDateBtn = () => {
        if (startDate != undefined && endDate != undefined) {
            setDatePickerVisible(false)
        } else if (startDate == undefined && endDate == null) {
            alert('Please select start date and end date.')
        } else if (startDate == undefined && startDate == null) {
            alert('Please select start date.')
        } else if (endDate == undefined && endDate == null) {
            alert('Please select end date.')
        }
    }

    const isDateBlocked = (date) =>
        date.isBefore(moment().subtract(10, 'years'), 'year');

    let selectedDate = '';
    if (startDate != undefined && endDate != undefined) {
        selectedDate = `${moment(startDate).format('DD MMM YYYY')} - ${moment(endDate).format('DD MMM YYYY')}`
    } else if (startDate != undefined) {
        selectedDate = moment(startDate).format('DD MMM YYYY');
    }

    return (
        <View style={styles.container}>
            <ParallaxScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} isForegroundTouchable={true}
                parallaxHeaderHeight={320}
                backgroundColor="white"
                isForegroundTouchable={true}
                contentBackgroundColor="rgb(231, 231, 235)"
                stickyHeaderHeight={Platform.OS === 'ios' ? isIphoneX() ? 90 : 75 : 50}
                renderStickyHeader={() => (
                    <StickyHeader title="Add Medication" onPress={() => props.navigation.goBack()} />
                )}
                renderForeground={() => (
                    <View>
                        <View style={styles.linerView}>
                            <Image style={styles.lineImgView} source={require('../../image/linePattern.png')} />
                        </View>
                        <SafeAreaView style={styles.backgroundColorView} />
                        <View style={styles.backgroundTopView}>
                            <TouchableOpacity style={styles.backIconView} onPress={() => props.navigation.goBack()}>
                                <Image style={styles.backIconStyle} source={require('../../image/back.png')} />
                            </TouchableOpacity>
                            <Text style={styles.medicineTxt}>Do you take any Medications?</Text>
                        </View>
                    </View>
                )}>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                >
                    <View style={styles.subContainer}>
                        <View style={styles.separateView} />
                        <TouchableOpacity style={styles.checkMedicineView} onPress={() => setCheckBoxVisible(!checkBoxVisible)} activeOpacity={1}>
                            <Image style={styles.checkBoxView} source={checkBoxVisible ? require('../../image/check.png') : require('../../image/uncheck.png')} />
                            <Text style={styles.checkMedicineTxt}>No, I don’t take any medications</Text>
                        </TouchableOpacity>
                        <View style={styles.scrollViewStyle}>
                            <View style={styles.medicineFormView}>
                                <Text style={styles.normalText}>Medication Name</Text>
                                <Input
                                    refField={refMedicationName}
                                    autoCapitalize={`none`}
                                    autoFocus={false}
                                    placeholder={'Type your Medication Here'}
                                    returnKeyType={`next`}
                                    onSubmitEditing={() => refAmount.current.focus()}
                                    blurOnSubmit={false}
                                    value={medicationName}
                                    containerStyle={styles.marginBottom20}
                                    onChangeHandler={(text) => setMedicationName(text)} />
                                <View style={styles.flexDirectionRow}>
                                    <View style={styles.flexOne}>
                                        <Text style={styles.normalText}>Amount</Text>
                                        <Input
                                            refField={refAmount}
                                            autoCapitalize={`none`}
                                            autoFocus={false}
                                            placeholder={'Type…'}
                                            keyboardType='numeric'
                                            returnKeyType={`next`}
                                            onSubmitEditing={() => refNumber.current.focus()}
                                            blurOnSubmit={false}
                                            value={amount}
                                            containerStyle={styles.marginBottom20}
                                            onChangeHandler={(text) => setAmount(text.replace(/[^0-9]/g, ""))} />
                                    </View>
                                    <View style={styles.dropDownView}>
                                        <Text style={[styles.marginBottom10]}></Text>
                                        <DropDown
                                            onChangeHandler={(value) => setSelectDosage(value)}
                                            icon={require('../../image/arrowDown.png')}
                                            value={selectDosage}
                                            items={[
                                                { label: 'Mg', value: 'Mg' },
                                                { label: 'ML', value: 'ML' },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View style={styles.flexDirectionRow}>
                                    <View style={styles.flexOne}>
                                        <Text style={styles.normalText}>Number</Text>
                                        <Input
                                            refField={refNumber}
                                            autoCapitalize={`none`}
                                            autoFocus={false}
                                            placeholder={'Number'}
                                            returnKeyType={`next`}
                                            keyboardType='numeric'
                                            onSubmitEditing={() => refAddress.current.focus()}
                                            blurOnSubmit={false}
                                            value={number}
                                            containerStyle={styles.marginBottom20}
                                            onChangeHandler={(text) => setNumber(text.replace(/[^0-9]/g, ""))} />
                                    </View>
                                    <View style={styles.numberViewSection}>
                                        <Text style={[styles.marginBottom10]}></Text>
                                        <DropDown
                                            onChangeHandler={(value) => setSelectDay(value)}
                                            icon={require('../../image/arrowDown.png')}
                                            value={selectDay}
                                            items={[
                                                { label: 'Daily', value: 'Daily' },
                                                { label: 'Weekly', value: 'Weekly' },
                                                { label: 'Monthly', value: 'Monthly' },
                                                { label: 'Yearly', value: 'Yearly' },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View style={styles.durationView}>
                                    <Text style={styles.addInfo}>Duration</Text>
                                    <Image style={styles.infoStyle} source={require('../../image/info.png')} />
                                </View>
                                <TouchableOpacity style={[styles.datePickerMainView, { marginBottom: datePickerVisible ? 0 : 20 }]} activeOpacity={1} pointerEvents='none'
                                    onPress={() => setDatePickerVisible(!datePickerVisible)}>
                                    <Input
                                        editable={false}
                                        pointerEvents='none'
                                        placeholder={'Select date'}
                                        value={selectedDate} />
                                    <Image style={styles.dateArrow} source={require('../../image/arrowDown.png')} />
                                </TouchableOpacity>
                                <View style={[styles.moreInfoView, { marginTop: datePickerVisible ? 10 : 0 }]}>
                                    <Text style={styles.addInfo}>Additional Information</Text>
                                    <Image style={styles.infoStyle} source={require('../../image/info.png')} />
                                </View>
                                <Input
                                    refField={refAddress}
                                    autoCapitalize={`none`}
                                    autoFocus={false}
                                    multiline={true}
                                    placeholder={'Write more information'}
                                    onSubmitEditing={Keyboard.dismiss}
                                    returnKeyType={`done`}
                                    value={address}
                                    containerStyle={styles.addressContainerStyle}
                                    inputTextStyle={styles.addressStyle}
                                    onChangeHandler={(text) => setAddress(text)} />
                            </View>
                            <View style={styles.addMedicine}>
                                <Image style={styles.plusIcon} source={require('../../image/add.png')} />
                                <Text style={styles.addBtnTxt}>Add Medication</Text>
                            </View>
                            <TouchableOpacity style={styles.nextBtnView} disabled={loading} onPress={() => dummyApiCall()}>
                                {loading ? <ActivityIndicator color="white" size="small" /> : <Text style={styles.nextTxt}>Next</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        datePickerVisible &&
                        <Modal
                            style={styles.modelContainer}
                            visible={datePickerVisible}
                        >
                            <View style={styles.modelSubContainer}>
                                <View style={styles.modelCloseView}>
                                    <TouchableOpacity onPress={() => setDatePickerVisible(!datePickerVisible)}>
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onConfirmDateBtn()}>
                                        <Text>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                <Dates
                                    onDatesChange={onDatesChange}
                                    isDateBlocked={isDateBlocked}
                                    startDate={startDate}
                                    endDate={endDate}
                                    focusedInput={focus}
                                    range
                                />
                            </View>
                        </Modal>
                    }
                </KeyboardAvoidingView>
            </ParallaxScrollView>
        </View>
    );
};

export default Home;