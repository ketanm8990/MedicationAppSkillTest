
import React, { useState, useEffect } from 'react';
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
import moment from 'moment';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import { isIphoneX } from 'react-native-iphone-x-helper';

/*========================================================
* function Name: Symptoms screen design
* function Purpose: using medication screen design and dummy api call.
* function Description: homw screen using input box, datepicker, select drop down picker and other component and dummy api call.
*=====================================================*/

const Symptoms = (props) => {

    // local state 
    const [, setState] = useState();
    const [checkBoxVisible, setCheckBoxVisible] = useState(true);
    const [symptomsList, setSymptomsList] = useState([]);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState();
    const [medicationList, setMedicationList] = useState([]);

    useEffect(() => {
        const { params } = props.route;
        setMedicationList(params.medicationList);
    }, []);

    const onChangeSymptoms = (index, text) => {
        let tmpSymptomsList = symptomsList;
        tmpSymptomsList[index].symptomsName = text;
        setSymptomsList(tmpSymptomsList);
        setState({});
    }

    const onChangeSelectSevere = (index, value) => {
        let tmpMedicationList = symptomsList;
        tmpMedicationList[index].severeType = value;
        setSymptomsList(tmpMedicationList);
        setState({});
    }

    // dynamic add symptoms item
    const onPressAddMore = () => {
        setCheckBoxVisible(false);
        let tmpSymptomsList = symptomsList;
        tmpSymptomsList.push({
            symptomsName: '', selectDate: '', severeType: '', removeIcon: symptomsList && symptomsList.length > 0 ? true : false
        });
        setSymptomsList(tmpSymptomsList);
        setState({});
    }

    // remove symptoms item
    const onRemove = (index) => {
        let tmpSymptomsList = symptomsList;
        tmpSymptomsList.splice(index, 1);
        setSymptomsList(tmpSymptomsList);
        setState({});
    }

    // validation symptoms
    const onSubmitSymptoms = () => {
        let errorMsg = '';
        let valid = false
        symptomsList.forEach((item, index) => {
            if (!valid) {
                if (!item.symptomsName) {
                    errorMsg = `Please enter symptoms name for item ${index + 1}`
                    valid = true
                } else if (!item.selectDate) {
                    errorMsg = `Please enter select date for item ${index + 1}`
                    valid = true
                } else if (!item.severeType) {
                    errorMsg = `Please enter severe type for item ${index + 1}`
                    valid = true
                }
            }
        })
        if (valid) {
            alert(errorMsg);
        } else {
            props.navigation.navigate('FollowingList', { medicationList, symptomsList });
        }
    }

    const onchangeCheckBox = () => {
        if (checkBoxVisible) {
            let tmpSymptomsList = [];
            tmpSymptomsList.push({
                symptomsName: '', selectDate: '', severeType: '', removeIcon: false
            });
            setSymptomsList(tmpSymptomsList);
        } else {
            setSymptomsList([])
        }
        setCheckBoxVisible(!checkBoxVisible)
    }

    const onDateChange = (date) => {
        let tmpMedicationList = symptomsList;
        tmpMedicationList[currentIndex].selectDate = date;
        setSymptomsList(tmpMedicationList);
        setDatePickerVisible(false);
        setState({});
    }

    const onDatePickerOpen = (index) => {
        setCurrentIndex(index);
        setDatePickerVisible(!datePickerVisible)
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
                    <StickyHeader title="Add Symptoms" onPress={() => props.navigation.goBack()} />
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
                            <Text style={styles.symptomsTxt}>What are your symptoms?</Text>
                            <Text style={styles.symptomsSubTxt}>This will help to calculate the right protocol for you</Text>
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
                            <Text style={styles.checkMedicineTxt}>No, I don’t have any symptoms</Text>
                        </TouchableOpacity>
                        <View style={styles.scrollViewStyle}>
                            <FlatList
                                data={symptomsList}
                                extraData={symptomsList}
                                keyExtractor={(item, index) => item.toString() + index}
                                bounces={false}
                                renderItem={({ item, index }) =>
                                    <View style={styles.symptomsFormView}>
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
                                        <Text style={styles.normalText}>Symptoms</Text>
                                        <Input
                                            autoCapitalize={`none`}
                                            autoFocus={false}
                                            placeholder={'Type'}
                                            returnKeyType={`done`}
                                            value={item.symptomsName}
                                            containerStyle={styles.marginBottom20}
                                            onChangeHandler={(text) => onChangeSymptoms(index, text)} />
                                        <Text style={styles.normalText}>When did it start?</Text>
                                        <TouchableOpacity style={styles.datePickerMainView} activeOpacity={1} pointerEvents='none'
                                            onPress={() => onDatePickerOpen(index)}>
                                            <Input
                                                editable={false}
                                                pointerEvents='none'
                                                placeholder={'Select date'}
                                                value={item.selectDate != '' ? moment(item.selectDate).format('DD MMM YYYY') : ''} />
                                            <Image style={styles.dateArrow} source={require('../../image/arrowDown.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.normalText}>How severe is it?</Text>
                                        <DropDown
                                            onChangeHandler={(value) => onChangeSelectSevere(index, value)}
                                            icon={require('../../image/arrowDown.png')}
                                            value={item.severeType}
                                            items={[
                                                { label: 'Mild', value: 'Mild' },
                                                { label: 'Moderate', value: 'Moderate' },
                                                { label: 'High', value: 'High' },
                                                { label: 'Hyperpyrexia', value: 'Hyperpyrexia' },
                                            ]}
                                        />
                                    </View>
                                }
                            />
                            <TouchableOpacity style={styles.addSymptoms} onPress={() => onPressAddMore()}>
                                <Image style={styles.plusIcon} source={require('../../image/add.png')} />
                                <Text style={styles.addBtnTxt}>Symptoms</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.nextBtnView, { marginTop: symptomsList && symptomsList.length > 0 ? 0 : 300 }]}
                                onPress={() => onSubmitSymptoms()}>
                                <Text style={styles.nextTxt}>Next</Text>
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
                                </View>
                                <CalendarPicker
                                    onDateChange={(date) => onDateChange(date)}
                                />
                            </View>
                        </Modal>
                    }
                </KeyboardAvoidingView>
            </ParallaxScrollView>
        </View>
    );
};

export default Symptoms;