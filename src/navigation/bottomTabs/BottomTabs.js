import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// IMPORTS NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//VECTOR_ICONS IMPORT
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// IMPORTS ASSETS
import { AppColors } from '../../assets/colors/AppColors';

//SCREENS IMPORT
import DashboardScreen from '../../screens/Dashboard/DashboardScreen';
import AllDeliveredScreen from '../../screens/Orders/OrdersScreen';
import NotificationScreen from '../../screens/Notification/NotificationScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import { AppIcons } from '../../assets/Icons/Index';
import OrdersScreen from '../../screens/Orders/OrdersScreen';
import ReportScreen from '../../screens/Report/ReportScreen';

const DotView = () => {
  return <View style={styles.dotView} />;
};

const DashboardIcon = (color, focused) => {
  return (
    <>
      {focused ? (
        <Image
          source={AppIcons.dashboardTabIcon_color}
          style={styles.tabBarIconImage}
        />
      ) : (
        <Image
          source={AppIcons.dashboardTabIcon}
          style={styles.tabBarIconImage}
        />
      )}
      {/* {focused ? <DotView /> : null} */}
    </>
  );
};
const DeliveryIcon = (color, focused) => {
  return (
    <>
      {focused ? (
        <Image
          source={AppIcons.truckTabIcon_color}
          style={[[styles.tabBarIconImage, { width: 35, height: 35, }]]}
        />
      ) : (
        <Image source={AppIcons.truckTabIcon} style={[[styles.tabBarIconImage, { width: 35, height: 35, }]]} />
      )}
      {/* {focused ? <DotView /> : null} */}
    </>
  );
};
const NotificationIcon = (color, focused) => {
  return (
    <>
      {focused ? (
        <Image
          source={AppIcons.analysisTabIcon_color}
          style={styles.tabBarIconImage}
        />
      ) : (
        <Image
          source={AppIcons.analysisTabIcon}
          style={styles.tabBarIconImage}
        />
      )}
      {/* {focused ? <DotView /> : null} */}
    </>
  );
};
const ProfileIcon = (color, focused) => {
  return (
    <>
      {focused ? (
        <Image
          source={AppIcons.profileTabIcon_color}
          style={styles.tabBarIconImage}
        />
      ) : (
        <Image
          source={AppIcons.profileTabIcon}
          style={styles.tabBarIconImage}
        />
      )}
      {/* {focused ? <DotView /> : null} */}
    </>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
        tabBarActiveTintColor: AppColors.PRIMARY,
      }}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, focused }) => DashboardIcon(color, focused),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => DeliveryIcon(color, focused),
        }}
      />
      <Tab.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ color, focused }) => NotificationIcon(color, focused),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => ProfileIcon(color, focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  dotView: {
    width: 7,
    height: 7,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 999,
    marginVertical: 10,
  },
  tabBarIconImage: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});
