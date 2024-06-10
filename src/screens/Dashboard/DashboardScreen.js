import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import * as APICalls from '../../api/APICalls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {AppColors} from '../../assets/colors/AppColors';
import Strings from '../../locales/Strings';
import OrderCard from '../../components/common/OrderCard/OrderCard';
import DashBoardBox from '../../components/DashBoardBox/DashBoardBox';
import {Utility} from '../../util';
import Loading from '../../components/Loading/Loading';
import {AppImage} from '../../assets/images/Index';
import {Fonts} from '../../assets/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {capitalizeFirstLetter} from '../OrderDetails/OrderDetailsScreen';

const DashboardScreen = props => {
  const navigation = useNavigation();
  const date = new Date();
  const focus = useIsFocused();
  const [orderList, setOrderList] = useState(null);
  const [userData, setUserData] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [allOrderCounts, setAllOrderCounts] = useState({
    Accepted: 0,
    Started: 0,
    Completed: 0,
    Cancel: 0,
  });

  const handleSeeAll = () => {
    navigation.navigate('PendingScreen');
  };
  const getOrderList = async () => {
    const UserId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    const params = {
      task_status: 'Created',
    };
    APICalls.OrderList(
      onSuccessOrderList,
      onFailureOrderList,
      UserId.id,
      params,
      props,
    );
  };
  const onSuccessOrderList = res => {
    // Utility.log(res?.data?.rows, 'getOrderList success');
    setOrderList(res?.data?.rows);
  };
  const onFailureOrderList = err => {
    console.log(err, 'orderlist error');
  };

  useEffect(() => {
    if (focus) {
      getOrderList();
      getAllCatCount();
      getUserDetails();
    }
  }, [focus]);

  const getAllCatCount = async () => {
    const UserId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    const params = {};
    APICalls.OrderList(onSuccessList, onFailureList, UserId.id, params, props);
  };
  const onSuccessList = res => {
    const acceptedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Accepted',
    );
    const startedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Started',
    );
    const completedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Completed',
    );
    const rejectedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Rejected',
    );

    const acceptedTasksCount = acceptedTasks.length;
    const startedTasksCount = startedTasks.length;
    const completedTasksCount = completedTasks.length;
    const rejectedTasksCount = rejectedTasks.length;

    setAllOrderCounts({
      Accepted: acceptedTasksCount,
      Started: startedTasksCount,
      Completed: completedTasksCount,
      Cancel: rejectedTasksCount,
    });
  };
  const onFailureList = err => {
    console.log(err, 'onFailureList error');
    setAllOrderCounts({
      Accepted: 0,
      Started: 0,
      Completed: 0,
      Cancel: 0,
    });
  };

  const handleNavigation = id => {
    navigation.navigate('OrderDetailsScreen', {
      OrderId: id,
    });
  };
  const getUserDetails = async () => {
    const UserId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    APICalls.userDetails(onGetUserData, onFailUserData, UserId?.id, props);
  };
  const onGetUserData = response => {
    setUserData(response?.data);
  };

  const onFailUserData = error => {
    console.log(error, 'error');
    // setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getOrderList();
    await getAllCatCount();
    await getUserDetails();
    setRefreshing(false);
  };

  if (!userData) {
    return <Loading />;
  }

  return (
    <View>
      <View style={styles.Header__container}>
        {/* <View style={styles.rowCenterSpacebetween}>
          <Text style={styles.dateText}>
            {moment(date).format('MMM DD, YYYY')}
          </Text>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={18}
            color={AppColors.BLACK}
            style={{marginBottom: 5}}
          />
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          {userData == null ? null : (
            <>
              <Image
                source={
                  userData?.image
                    ? {uri: userData?.image}
                    : AppImage.defaultProfileImage
                }
                style={{
                  height: 43,
                  width: 43,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: AppColors.LIGHT_GREY,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Bold,
                  paddingLeft: 12,
                  color: AppColors.BLACK,
                  lineHeight: 24,
                }}>
                {userData?.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Fonts.ExtraBold,
                  paddingLeft: 5,
                  color: userData?.is_active == 1 ? 'green' : 'grey',
                }}>
                {'\u2B24'}
              </Text>
            </>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Feather name="bell" size={20} color={AppColors.BLACK} />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={styles.scrollView__container}>
        <View style={styles.top__container}>
          {/* <Text style={styles.day_Text}>{Strings.TODAY}</Text> */}
          <View style={styles.boxes_mainContainer}>
            <DashBoardBox
              item={{
                title: 'Accepted',
                count: allOrderCounts?.Accepted,
                icon: 'retweet',
              }}
            />
            <DashBoardBox
              item={{
                title: 'Started',
                count: allOrderCounts?.Started,
                icon: 'clock',
              }}
            />
            <DashBoardBox
              item={{
                title: 'Completed',
                count: allOrderCounts?.Completed,
                icon: 'download-done',
              }}
            />
            <DashBoardBox
              item={{
                title: 'Cancel',
                count: allOrderCounts?.Cancel,
                icon: 'cancel-presentation',
              }}
            />
          </View>
        </View>
        <View style={styles.bottom__container}>
          <View style={styles.bottomHeading__container}>
            <Text style={styles.pendignOrderText}>
              {Strings.PENDING_ORDERS}
            </Text>
            {orderList === null ? null : orderList?.length != 0 ? (
              <TouchableOpacity
                onPress={handleSeeAll}
                style={styles.viewAll__container}>
                <Text style={styles.viewAllText}>{Strings.VIEW_ALL}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {/* <View> */}
          {orderList === null ? (
            <Loading
              customStyle={{
                height: 40,
                backgroundColor: 'transparent',
              }}
            />
          ) : orderList?.length === 0 ? (
            <Text style={{paddingVertical: 30, textAlign: 'center'}}>
              No Pending Orders
            </Text>
          ) : (
            orderList?.map((order, i) => {
              if (i <= 3) {
                return (
                  <View key={i}>
                    <OrderCard
                      key={i}
                      data={order}
                      handleNavigation={handleNavigation}
                    />
                  </View>
                );
              }
            })
          )}
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
