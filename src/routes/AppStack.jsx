import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Weather from '../pages/Weather';




const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Home" component={Home} />
                <Screen name="Weather" component={Weather} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;