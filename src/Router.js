import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './screen/Dashboard';
import Home from './screen/Home';
import Medication from './screen/Medication';
import Symptoms from './screen/Symptoms';
import FollowingList from './screen/FollowingList';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="Dashboard" headerMode="none">
            <HomeStack.Screen name="Dashboard" component={Dashboard} />
            <HomeStack.Screen name="Home" component={Home} />    
            <HomeStack.Screen name="Medication" component={Medication} />
            <HomeStack.Screen name="Symptoms" component={Symptoms} /> 
            <HomeStack.Screen name="FollowingList" component={FollowingList} />            
        </HomeStack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;