import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTS NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//IMPORTS SCREEN
import Auth from '../auth/Auth';
import BottomTabs from '../bottomTabs/BottomTabs';
import AllRejectedScreen from '../../screens/AllRejected/AllRejectedScreen';
import TotalEarningScreen from '../../screens/TotalEarning/TotalEarningScreen';
import OrderDetailsScreen from '../../screens/OrderDetails/OrderDetailsScreen';
import WriteAReasonScreen from '../../screens/WriteAReason/WriteAReasonScreen';
import VerificationScreen from '../../screens/Verification/VerificationScreen';
import MapScreen from '../../screens/Map/MapScreen';
import AllPendingScreen from '../../screens/AllPending/AllPendingScreen';
import NotificationScreen from '../../screens/Notification/NotificationScreen';
import Loading from '../../components/Loading/Loading';
import WelcomeScreen from '../../screens/auth/Welcome/WelcomeScreen';
import LoginScreen from '../../screens/auth/Login/LoginScreen';
import {
  notificationListener,
  requestUserPermission,
} from '../../util/notificationHelper';
import PendingScreen from '../../screens/Pending/PendingScreen';

const Stack = createNativeStackNavigator();
const Route = () => {
  const [token, setToken] = useState('Loading');

  const getData = async () => {
    const getToken = await AsyncStorage.getItem('token');
    setToken(getToken);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  // PushNotification.configure({
  //   onNotification: function (notification) {
  //     console.log('APP is open', notification);
  //   },
  //   requestPermissions: Platform.OS === 'ios',
  // });
  return (
    <>
      {token !== 'Loading' ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={token ? 'BottomTabs' : 'WelcomeScreen'}>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NotificationScreen"
              component={NotificationScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AllPendingScreen"
              component={AllPendingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AllRejectedScreen"
              component={AllRejectedScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TotalEarningScreen"
              component={TotalEarningScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderDetailsScreen"
              component={OrderDetailsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PendingScreen"
              component={PendingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="WriteAReasonScreen"
              component={WriteAReasonScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="VerificationScreen"
              component={VerificationScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Route;
