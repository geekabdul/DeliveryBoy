import React, { useEffect, useState, useRef } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as APICalls from '../../api/APICalls';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../locales/Strings';
import Header from '../../components/common/Header/Header';
import OrderCard from '../../components/common/OrderCard/OrderCard';
import { AppColors } from '../../assets/colors/AppColors';
import { Fonts } from '../../assets/fonts';
import { Utility } from '../../util';
import Loading from '../../components/Loading/Loading';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const OrderTypesData = [
  Strings.ACCEPTED,
  Strings.STARTED,
  Strings.COMPLETED,
  Strings.CANCEL,
];
const OrdersScreen = props => {
  const type = props?.route?.params?.type;
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(Strings.ACCEPTED);
  const [orderList, setOrderList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const check = item => {
    if (item == 'Accepted') {
      return 'Accepted';
    } else if (item === 'Started') {
      return 'Started';
    } else if (item === 'Completed') {
      return 'Completed';
    } else if (item === 'Cancel') {
      return 'Rejected';
    }
  };
  const getOrderList = async () => {
    setIsLoading(true);
    const userId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    const params = {
      task_status: check(selectedTab),
    };
    // if (selectedTab == 'Started' || selectedTab == 'Accepted') {
    //   setOrderList([]);
    //   setIsLoading(false);
    // } else {
    APICalls.OrderList(
      onSuccessOrderList,
      onFailureOrderList,
      userId.id,
      params,
    );
    // }
  };
  const onSuccessOrderList = res => {
    setOrderList(res?.data?.rows);
    setIsLoading(false);
  };
  const onFailureOrderList = err => {
    setIsLoading(false);
  };
  const tabRefs = OrderTypesData.reduce((acc, _, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (selectedTab == Strings.ACCEPTED || selectedTab == Strings.STARTED) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
    if (selectedTab == Strings.COMPLETED || selectedTab == Strings.CANCEL) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [selectedTab, tabRefs]);

  useEffect(() => {
    if (type) {
      setSelectedTab(type);
    }
  }, [type]);

  useEffect(() => {
    getOrderList();
  }, [selectedTab]);

  const handleNavigation = id => {
    navigation.navigate('OrderDetailsScreen', {
      OrderId: id,
    });
  };

  return (
    <>
      <Header headerTitle={Strings.ORDERS} />
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginVertical: 20,
              backgroundColor: AppColors.WHITE,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {OrderTypesData.map((type, i) => (
              <TouchableOpacity
                key={i}
                ref={tabRefs[i]}
                onPress={() => setSelectedTab(type)}
                style={{
                  backgroundColor:
                    selectedTab === type ? AppColors.PRIMARY : AppColors.WHITE,
                  padding: 10,
                  borderRadius: 10,
                  marginRight: 25,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Fonts.SemiBold,
                    color:
                      selectedTab === type ? AppColors.WHITE : AppColors.BLACK,
                  }}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {isLoading ? (
          <Loading
            customStyle={{
              backgroundColor: 'transparent',
              height: screenHeight / 2,
              alignSelf: 'center',
            }}
          />
        ) : orderList?.length == 0 ? (
          <View
            style={{
              height: screenHeight / 1.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Data Found</Text>
          </View>
        ) : orderList?.length > 0 ? (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 190 }}>
              {orderList?.map((order, i) => {
                return (
                  <View key={i}>
                    <OrderCard
                      data={order}
                      handleNavigation={handleNavigation}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </>
        ) : null}
      </View>
    </>
  );
};

export default OrdersScreen;
