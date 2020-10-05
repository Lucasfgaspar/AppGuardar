import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../telas/Preload/index';
import Login from '../telas/Login/index';
import Cadastro from '../telas/Cadastro/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions = {{
            headerShown: false
        }}
    >
        <Stack.Screen name='Preload' component={Preload} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>
);