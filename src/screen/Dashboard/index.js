
import React, { Component } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import styles from './style';

/*========================================================
* function Name: Dashboard screen design
* function Purpose: display test 1 and test 2 button.
* function Description: Dashboard screen using TouchableOpacity button.
*=====================================================*/

const Dashboard = (props) => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.backgroundColorView} />
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.btnView} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.normalText}>Test 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView} onPress={() => props.navigation.navigate('Medication')}>
                    <Text style={styles.normalText}>Test 2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard;