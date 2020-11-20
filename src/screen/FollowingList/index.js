
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
    ActivityIndicator,
    Alert
} from 'react-native';
import styles from './style';
import StickyHeader from '../../component/StickyHeader';
import ParallaxScrollView from '../../component/ParallaxScrollView';
import { isIphoneX } from 'react-native-iphone-x-helper';

/*========================================================
* function Name: Following screen design
* function Purpose: using following screen design and dummy post api call.
* function Description: Following screen using flatlist and other component and dummy post api call.
*=====================================================*/

const FollowingList = (props) => {

    // local state 
    const [, setState] = useState();
    const [loading, setLoading] = useState();
    const [followingList, setFollowingList] = useState([
        { follwingName: 'Swelling of the Neck', check: false },
        { follwingName: 'Frequent Laryngitis', check: false },
        { follwingName: 'Epilepsy', check: false },
        { follwingName: 'A brain and central nervous system disease', check: false },
        { follwingName: 'Prostatitis', check: false },
        { follwingName: 'None of the Above', check: false },
    ]);
    const [medicationList, setMedicationList] = useState([]);
    const [symptomsList, setSymptomsList] = useState([]);

    useEffect(() => {
        const { params } = props.route;
        setMedicationList(params.medicationList);
        setSymptomsList(params.symptomsList);
    }, []);

    // dummy api call
    const dummyApiCall = (tmpFollowingList) => {
        setLoading(true)
        fetch('https://postman-echo.com/post', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ medicationList, symptomsList, tmpFollowingList })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false)
                if (responseJson && responseJson.data) {
                    Alert.alert(
                        'App',
                        JSON.stringify(responseJson.data),
                        [
                          { text: 'OK', onPress: () => props.navigation.navigate('Dashboard') }
                        ],
                        { cancelable: false }
                      );
                } else {
                    alert('Api calling failed');
                }
            })
            .catch((error) => {
                setLoading(false)
                alert(JSON.stringify(error));
            });
    }

    // validation following list
    const onSubmitFollowing = () => {
        let tmpArray = followingList.filter(s => s.check == true);
        if (tmpArray && tmpArray.length > 0) {
            dummyApiCall(tmpArray);
        } else {
            alert('Please select one following item')
        }
    }

    const onchangeCheckBox = (index) => {
        followingList
        let tmpfollowingList = followingList;
        tmpfollowingList[index].check = !tmpfollowingList[index].check;
        setFollowingList(tmpfollowingList);
        setState({});
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
                    <StickyHeader title="Following" onPress={() => props.navigation.goBack()} />
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
                            <Text style={styles.follwingTxt}>Do you have, or have you ever had, any of the following?</Text>
                        </View>
                    </View>
                )}>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                >
                    <View style={styles.subContainer}>
                        <View style={styles.separateView} />
                        <FlatList
                            data={followingList}
                            style={styles.flatListView}
                            extraData={followingList}
                            keyExtractor={(item, index) => item.toString() + index}
                            bounces={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={styles.checkMoreListView} onPress={() => onchangeCheckBox(index)} activeOpacity={1}>
                                    <Image style={styles.checkBoxView} source={item.check ? require('../../image/checkmark.png') : require('../../image/uncheck.png')} />
                                    <Text style={styles.checkFollwingTxt}>{item.follwingName}</Text>
                                </TouchableOpacity>
                            }
                        />
                        <TouchableOpacity
                            style={styles.nextBtnView}
                            disabled={loading}
                            onPress={() => onSubmitFollowing()}>
                            {loading ? <ActivityIndicator color="white" size="small" /> : <Text style={styles.nextTxt}>Next</Text>}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ParallaxScrollView>
        </View>
    );
};

export default FollowingList;