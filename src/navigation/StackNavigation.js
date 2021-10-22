import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import { useDispatch, useSelector } from "react-redux";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const { token, loading, success } = useSelector((state) => state.user)
    return (
        <NavigationContainer>
            {
                token ? (
                    <Stack.Navigator >

                        <Stack.Screen name="Home" component={HomeScreen} />

                        <Stack.Screen name="UpdatePro" component={UpdateProfileScreen} />

                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator >
                        <Stack.Screen name="Login" component={LoginScreen} />

                        <Stack.Screen name="Register" component={RegisterScreen} />


                    </Stack.Navigator>
                )
            }

        </NavigationContainer>
    )
}

export default StackNavigation;