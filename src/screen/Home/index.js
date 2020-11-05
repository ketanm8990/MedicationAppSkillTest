
import React, { useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Input from '../../component/InputBox';
import styles from './style';
import DatePicker from 'react-native-datepicker'

/*
* Home screen design
*/

const Home = () => {

    // local state 
    const [selectDate, setSelectDate] = useState();
    const [loading, setLoading] = useState();
    const [selectDosage, setSelectDosage] = useState('Mg');
    const [address, setAddress] = useState();
    const [selectDay, setSelectDay] = useState('Daily');

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

    return (
        <View style={styles.container}>
            <View style={styles.linerView}>
                <Image style={styles.lineImgView} source={require('../../image/linePattern.png')} />
            </View>
            <SafeAreaView style={styles.backgroundColorView} />
            <View style={styles.backgroundTopView}>
                <Image style={styles.backIconView} source={require('../../image/back.png')} />
                <Text style={styles.medicineTxt}>Do you take any Medications?</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.sperateView} />
                <View style={styles.checkMedicineView}>
                    <View style={styles.checkBoxView}></View>
                    <Text style={styles.checkMedicineTxt}>No, I don’t take any medications</Text>
                </View>
                <ScrollView bounces={false} style={styles.scrollViewStyle}>
                    <View style={styles.medicineFormView}>
                        <Text style={styles.normalText}>Medication Name</Text>
                        <Input label="Type your Medication Here" customStyle={styles.marginBottom20} />
                        <View style={styles.flexDirectionRow}>
                            <View style={styles.flexOne}>
                                <Text style={styles.normalText}>Amount</Text>
                                <Input label="Type…" customStyle={styles.marginBottom20} />
                            </View>
                            <View style={styles.dropDownView}>
                                <Text style={styles.marginBottom10}></Text>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectDosage(value)}
                                    // useNativeAndroidPickerStyle={true}
                                    style={{
                                        inputAndroid: styles.inputAndroid,
                                        inputIOS: styles.inputIOS,
                                    }}
                                    Icon={() => {
                                        return (
                                            <Image style={styles.mgDropDown} source={require('../../image/arrowDown.png')} />
                                        )
                                    }}
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
                                <Input value="2" customStyle={styles.marginBottom20} />
                            </View>
                            <View style={styles.numberViewSection}>
                                <Text style={styles.marginBottom10}></Text>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectDay(value)}
                                    useNativeAndroidPickerStyle={true}
                                    style={{
                                        inputAndroid: styles.inputAndroid,
                                        inputIOS: styles.inputIOS,
                                    }}
                                    Icon={() => {
                                        return (
                                            <Image style={styles.dayDropDownIcon} source={require('../../image/arrowDown.png')} />
                                        )
                                    }}
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
                        <View style={styles.datePickerMainView}>
                            <DatePicker
                                style={styles.datePickerContainer}
                                date={selectDate}
                                mode="date"
                                placeholder="Select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    dateInput: styles.datePickerView,
                                    dateText: styles.selectDatePickerCommonStyle,
                                    placeholderText: styles.datePickerCommonStyle
                                }}
                                onDateChange={(date) => { setSelectDate(date) }}
                            />
                            <Image style={styles.dateArrow} source={require('../../image/arrowDown.png')} />
                        </View>
                        <View style={styles.moreInfoView}>
                            <Text style={styles.addInfo}>Additional Information</Text>
                            <Image style={styles.infoStyle} source={require('../../image/info.png')} />
                        </View>
                        <Input multiline={true} label="Write more information" customStyle={styles.addressStyle}
                            value={address} onChange={text => setAddress(text)} />
                    </View>
                    <View style={styles.addMedicine}>
                        <Image style={styles.plusIcon} source={require('../../image/add.png')} />
                        <Text style={styles.addBtnTxt}>Add Medication</Text>
                    </View>
                    <TouchableOpacity style={styles.nextBtnView} disabled={loading} onPress={() => dummyApiCall()}>
                        {loading ? <ActivityIndicator color="white" size="small" /> : <Text style={styles.nextTxt}>Next</Text>}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default Home;