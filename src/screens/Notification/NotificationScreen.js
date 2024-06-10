import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

// IMPORTS ASSETS
import Strings from '../../locales/Strings';

// IMPORTS COMMON_COMPONENTS
import MainContainer from '../../components/common/Container/MainContainer';
import Header from '../../components/common/Header/Header';

// IMPORTS COMPONENTS
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import BackHeader from '../../components/common/BackHeader/BackHeader';
import { AppColors } from '../../assets/colors/AppColors';
import { Fonts } from '../../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as APICalls from '../../api/APICalls';
import Loading from '../../components/Loading/Loading';

const notification_Data = [
  {
    day: 'Earlier Today',
    data: [
      {
        message: 'You have an order assigned to you.',
        date: '07-15-2022',
        time: '12:38:08',
      },
      {
        message: 'You deliver an order.',
        date: '07-15-2022',
        time: '12:38:08',
      },
    ],
  },
  {
    day: 'Yesterday',
    data: [
      {
        message: 'You cancel an order.',
        date: '07-15-2022',
        time: '12:38:08',
      },
      {
        message: 'You have an order assigned to you.',
        date: '07-15-2022',
        time: '12:38:08',
      },
      {
        message: 'You deliver an order.',
        date: '07-15-2022',
        time: '12:38:08',
      },
    ],
  },
];

const NotificationScreen = props => {
  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    getNotification();
  }, []);
  const getNotification = async () => {
    const parseId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    APICalls.getNotificationList(
      onSuccessNotificationList,
      onFailureNotificationList,
      parseId?.id,
      props,
    );
  };
  const onSuccessNotificationList = res => {
    setNotificationData(res?.data?.rows);
  };
  const onFailureNotificationList = err => {
    setNotificationData([]);
  };
  return (
    <>
      <BackHeader headerTitle={Strings.NOTIFICATION} />
      {notificationData == null ?
        <Loading />
        : notificationData?.length > 0 ?
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: AppColors.WHITE,
              marginTop: 40,
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingTop: 15,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
                flexDirection: 'column-reverse'
              }}>
              {/* {notificationData?.map((notification, i) => (
            <View key={i}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.SemiBold,
                  color: AppColors.BLACK,
                  marginTop: i > 0 ? 20 : 10,
                  marginBottom: i > 0 ? 10 : 0,
                }}>
                {notification.day}
              </Text> */}
              {notificationData?.map((notifiData, index) => (
                <NotificationCard data={notifiData} />
              ))}
              {/* </View>
          ))} */}
            </ScrollView>
          </View> :
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}>
            <Text>No Data Found</Text>
          </View>
      }
    </>
  );
};

export default NotificationScreen;
