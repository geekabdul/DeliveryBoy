import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as APICalls from '../../api/APICalls';

import { useNavigation } from '@react-navigation/native';

// IMPORTS ASSETS
import Strings from '../../locales/Strings';

// IMPORTS COMMON_COMPONENTS
import Header from '../../components/common/Header/Header';
import OrderCard from '../../components/common/OrderCard/OrderCard';

import { Utility } from '../../util';
import Loading from '../../components/Loading/Loading';

const PendingScreen = () => {
  const navigation = useNavigation();

  const [orderList, setOrderList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getOrderList = async () => {
    setIsLoading(true);
    const userId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    const params = {
      task_status: 'Created',
    };
    APICalls.OrderList(
      onSuccessOrderList,
      onFailureOrderList,
      userId.id,
      params,
    );
  };
  const onSuccessOrderList = res => {
    setOrderList(res?.data?.rows);
    setIsLoading(false);
  };
  const onFailureOrderList = err => {
    setIsLoading(false);
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const handleNavigation = id => {
    navigation.navigate('OrderDetailsScreen', {
      OrderId: id,
    });
  };

  return (
    <>
      <Header headerTitle={Strings.ALL_PENDING} />
      {isLoading ? (
        <Loading
          style={{
            alignSelf: 'center',
            backgroundColor: 'transparent',
          }}
        />
      ) : null}
      <View style={{ padding: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}>
          {orderList?.length == 0 ? (
            <View
              style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>NO Pending Orders</Text>
            </View>
          ) : orderList?.length > 0 ? (
            orderList?.map((order, i) => (
              <View key={i}>
                <OrderCard data={order} handleNavigation={handleNavigation} />
              </View>
            ))
          ) : null}
        </ScrollView>
      </View>
    </>
  );
};

export default PendingScreen;
