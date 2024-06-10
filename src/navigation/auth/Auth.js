import React from 'react';

// IMPORTS NAVIGATION
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//IMPORTS SCREEN
import LoginScreen from '../../screens/auth/Login/LoginScreen';
import WelcomeScreen from '../../screens/auth/Welcome/WelcomeScreen';

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
