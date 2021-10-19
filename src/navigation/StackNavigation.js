import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = ()=>{
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="UpdatePro" component={UpdateProfileScreen} />
         
        </Stack.Navigator>
    </NavigationContainer>
)
}

export default StackNavigation;