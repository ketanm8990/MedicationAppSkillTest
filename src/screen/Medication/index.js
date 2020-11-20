
import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image,
    Platform,
    KeyboardAvoidingView,
    FlatList,
} from 'react-native';
import Input from '../../component/InputWithIcon';
import styles from './style';
import DropDown from '../../component/DropDown';
import StickyHeader from '../../component/StickyHeader';
import ParallaxScrollView from '../../component/ParallaxScrollView';
import { isIphoneX } from 'react-native-iphone-x-helper';

/*========================================================
* function Name: Medication screen design
* function Purpose: using medication screen design and validation.
* function Description: Medication screen using dynamic form and other component and validation.
*=====================================================*/

const Medication = (props) => {

    // references
    const refProductName = useRef(null);
    const refDose = useRef(null);
    const refFrequency = useRef(null);

    // local state 
    const [, setState] = useState();
    const [checkBoxVisible, setCheckBoxVisible] = useState(true);
    const [medicationList, setMedicationList] = useState([]);

    const onChangeProduct = (index, text) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList[index].productName = text;
        setMedicationList(tmpMedicationList);
        setState({});
    }

    const onChangeDose = (index, text) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList[index].dose = text.replace(/[^0-9]/g, "");
        setMedicationList(tmpMedicationList);
        setState({});
    }

    const onChangeSelectDosage = (index, value) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList[index].selectDosage = value;
        setMedicationList(tmpMedicationList);
        setState({});
    }

    const onChangeFrequency = (index, text) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList[index].frequencyNum = text.replace(/[^0-9]/g, "");
        setMedicationList(tmpMedicationList);
        setState({});
    }

    const onChangeSelectDay = (index, value) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList[index].selectDay = value;
        setMedicationList(tmpMedicationList);
        setState({});
    }

    // dynamic add medication item
    const onPressAddMore = () => {
        setCheckBoxVisible(false);
        let tmpMedicationList = medicationList;
        tmpMedicationList.push({
            productName: '', dose: '', selectDosage: 'Mg', frequencyNum: "2", selectDay: 'Daily', removeIcon: medicationList && medicationList.length > 0 ? true : false
        });
        setMedicationList(tmpMedicationList);
        setState({});
    }

    // remove medication item
    const onRemove = (index) => {
        let tmpMedicationList = medicationList;
        tmpMedicationList.splice(index, 1);
        setMedicationList(tmpMedicationList);
        setState({});
    }

    // validation medication
    const onSubmitMedication = () => {
        let errorMsg = '';
        let valid = false
        medicationList.forEach((item, index) => {
            if (!valid) {
                if (!item.productName) {
                    errorMsg = `Please enter product name for item ${index + 1}`
                    valid = true
                } else if (!item.dose) {
                    errorMsg = `Please enter dose for item ${index + 1}`
                    valid = true
                } else if (!item.selectDosage) {
                    errorMsg = `Please enter select dose type for item ${index + 1}`
                    valid = true
                } else if (!item.frequencyNum) {
                    errorMsg = `Please enter frequency times for item ${index + 1}`
                    valid = true
                } else if (!item.selectDay) {
                    errorMsg = `Please enter select day for item ${index + 1}`
                    valid = true
                }
            }
        })
        if (valid) {
            alert(errorMsg);
        } else {
            props.navigation.navigate('Symptoms', { medicationList });
        }
    }

    const onchangeCheckBox = () => {
        if (checkBoxVisible) {
            let tmpMedicationList = [];
            tmpMedicationList.push({
                productName: '', dose: '', selectDosage: 'Mg', frequencyNum: "2", selectDay: 'Daily', removeIcon: false
            });
            setMedicationList(tmpMedicationList);
        } else {
            setMedicationList([])
        }
        setCheckBoxVisible(!checkBoxVisible)
    }

    return (
        <View style={styles.container}>
            <ParallaxScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
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
                            <Text style={styles.medicineTxt}>Do you take any Medications or Supplements?</Text>
                        </View>
                    </View>
                )}>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                >
                    <View style={styles.subContainer}>
                        <View style={styles.separateView} />
                        <TouchableOpacity style={styles.checkMedicineView} onPress={() => onchangeCheckBox()} activeOpacity={1}>
                            <Image style={styles.checkBoxView} source={checkBoxVisible ? require('../../image/checkmark.png') : require('../../image/uncheck.png')} />
                            <Text style={styles.checkMedicineTxt}>No, I don’t take any medications</Text>
                        </TouchableOpacity>
                        <View style={styles.scrollViewStyle}>
                            <FlatList
                                data={medicationList}
                                extraData={medicationList}
                                keyExtractor={(item, index) => item.toString() + index}
                                bounces={false}
                                renderItem={({ item, index }) =>
                                    <View style={styles.medicineFormView}>
                                        {
                                            item.removeIcon &&
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }} />
                                                <TouchableOpacity hitSlop={{ right: 10, left: 10 }}
                                                    onPress={() => onRemove(index)}
                                                >
                                                    <Image style={styles.removeIcon} source={require('../../image/minus.png')} />
                                                </TouchableOpacity>
                                            </View>
                                        }
                                        <Text style={styles.normalText}>Product</Text>
                                        <Input
                                            refField={refProductName}
                                            autoCapitalize={`none`}
                                            autoFocus={false}
                                            placeholder={'Type…'}
                                            returnKeyType={`next`}
                                            onSubmitEditing={() => refDose.current.focus()}
                                            blurOnSubmit={false}
                                            value={item.productName}
                                            containerStyle={styles.marginBottom20}
                                            onChangeHandler={(text) => onChangeProduct(index, text)} />
                                        <View style={styles.flexDirectionRow}>
                                            <View style={styles.flexOne}>
                                                <Text style={styles.normalText}>Dose</Text>
                                                <Input
                                                    refField={refDose}
                                                    autoCapitalize={`none`}
                                                    autoFocus={false}
                                                    placeholder={'Type…'}
                                                    keyboardType='numeric'
                                                    returnKeyType={`next`}
                                                    onSubmitEditing={() => refFrequency.current.focus()}
                                                    blurOnSubmit={false}
                                                    value={item.dose}
                                                    containerStyle={styles.marginBottom20}
                                                    onChangeHandler={(text) => onChangeDose(index, text)} />
                                            </View>
                                            <View style={styles.dropDownView}>
                                                <Text style={[styles.marginBottom10]}></Text>
                                                <DropDown
                                                    onChangeHandler={(value) => onChangeSelectDosage(index, value)}
                                                    icon={require('../../image/arrowDown.png')}
                                                    value={item.selectDosage}
                                                    items={[
                                                        { label: 'Mg', value: 'Mg' },
                                                        { label: 'ML', value: 'ML' },
                                                    ]}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.flexDirectionRow}>
                                            <View style={styles.flexOne}>
                                                <Text style={styles.normalText}>Frequency (Times)</Text>
                                                <Input
                                                    refField={refFrequency}
                                                    autoCapitalize={`none`}
                                                    autoFocus={false}
                                                    placeholder={'Number'}
                                                    returnKeyType={`next`}
                                                    keyboardType='numeric'
                                                    onSubmitEditing={() => refAddress.current.focus()}
                                                    blurOnSubmit={false}
                                                    value={item.frequencyNum}
                                                    onChangeHandler={(text) => onChangeFrequency(index, text)} />
                                            </View>
                                            <View style={styles.numberViewSection}>
                                                <Text style={[styles.marginBottom10]}></Text>
                                                <DropDown
                                                    onChangeHandler={(value) => onChangeSelectDay(index, value)}
                                                    icon={require('../../image/arrowDown.png')}
                                                    value={item.selectDay}
                                                    items={[
                                                        { label: 'Daily', value: 'Daily' },
                                                        { label: 'Weekly', value: 'Weekly' },
                                                        { label: 'Monthly', value: 'Monthly' },
                                                        { label: 'Yearly', value: 'Yearly' },
                                                    ]}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                }
                            />
                            <TouchableOpacity style={styles.addMedicine} onPress={() => onPressAddMore()}>
                                <Image style={styles.plusIcon} source={require('../../image/add.png')} />
                                <Text style={styles.addBtnTxt}>Medications</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.nextBtnView, { marginTop: medicationList && medicationList.length > 0 ? 0 : 300 }]}
                                onPress={() => onSubmitMedication()}>
                                <Text style={styles.nextTxt}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ParallaxScrollView>
        </View>
    );
};

export default Medication;