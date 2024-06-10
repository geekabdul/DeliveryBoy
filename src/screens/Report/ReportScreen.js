import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import {BarChart, LineChart} from 'react-native-gifted-charts';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as APICalls from '../../api/APICalls';
import {useIsFocused} from '@react-navigation/native';

// IMPORTS ASSETS
import Strings from '../../locales/Strings';

// IMPORTS COMMON_COMPONENTS
import Header from '../../components/common/Header/Header';
import {AppColors} from '../../assets/colors/AppColors';
import {Fonts} from '../../assets/fonts';
import {PhoneDimensions} from '../../constants/Dimensions';
import {AppIcons} from '../../assets/Icons/Index';
import {AppImage} from '../../assets/images/Index';
import {Utility} from '../../util';
import moment from 'moment';

// IMPORTS COMPONENTS

// const barData = [
//   {
//     value: 40,
//     label: 'Sat',
//     spacing: 2,
//     labelWidth: 30,
//     labelTextStyle: {color: 'gray'},
//     frontColor: AppColors.LIGHT_GREEN,
//   },
//   {value: 20, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 50,
//   //   label: 'Sun',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 40, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 75,
//   //   label: 'Mon',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 25, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 30,
//   //   label: 'Tue',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 20, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 40,
//   //   label: 'Wed',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 20, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 60,
//   //   label: 'Thu',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 40, frontColor: AppColors.LIGHT_RED},
//   // {
//   //   value: 65,
//   //   label: 'Fri',
//   //   spacing: 2,
//   //   labelWidth: 30,
//   //   labelTextStyle: {color: 'gray'},
//   //   frontColor: AppColors.LIGHT_GREEN,
//   // },
//   // {value: 30, frontColor: AppColors.LIGHT_RED},
// ];

const ptData = [
  {value: 260, label: 'sat'},
  {value: 180, label: 'sun'},
  {value: 190, label: 'mon'},
  {value: 180, label: 'tue'},
  {value: 140, label: 'wed'},
  {value: 145, label: 'thu'},
  {value: 160, label: 'fri'},
  // {value: 200, date: '8 Apr 2022'},
];
const ReportScreen = props => {
  const date = new Date();
  const focus = useIsFocused();
  const [allOrderCounts, setAllOrderCounts] = useState({
    Completed: 0,
    Cancel: 0,
  });

  const getAllCatCount = async () => {
    const UserId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    const params = {};
    APICalls.OrderList(onSuccessList, onFailureList, UserId.id, params, props);
  };
  const onSuccessList = res => {
    const rejectedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Rejected',
    );
    const completedTasks = res?.data?.rows.filter(
      item => item.task_status === 'Completed',
    );
    const rejectedTasksCount = rejectedTasks.length;
    const completedTasksCount = completedTasks.length;

    setAllOrderCounts({
      Completed: completedTasksCount,
      Cancel: rejectedTasksCount,
    });
  };
  const onFailureList = err => {
    setAllOrderCounts({
      Completed: 0,
      Cancel: 0,
    });
  };

  const barData = [
    {
      value: allOrderCounts.Completed,
      label: 'Orders',
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: {color: 'gray'},
      frontColor: AppColors.LIGHT_GREEN,
    },
    {value: allOrderCounts.Cancel, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 50,
    //   label: 'Sun',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 40, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 75,
    //   label: 'Mon',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 25, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 30,
    //   label: 'Tue',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 20, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 40,
    //   label: 'Wed',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 20, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 60,
    //   label: 'Thu',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 40, frontColor: AppColors.LIGHT_RED},
    // {
    //   value: 65,
    //   label: 'Fri',
    //   spacing: 2,
    //   labelWidth: 30,
    //   labelTextStyle: {color: 'gray'},
    //   frontColor: AppColors.LIGHT_GREEN,
    // },
    // {value: 30, frontColor: AppColors.LIGHT_RED},
  ];

  useEffect(() => {
    if (focus) {
      // getOrderList();
      getAllCatCount();
    }
  }, [focus]);

  return (
    <>
      <Header headerTitle={Strings.REPORTS} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{padding: 20, marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: AppColors.BLACK,
              fontFamily: Fonts.Medium_500,
              fontSize: 16,
            }}>
            {Strings.EARNING_OVERVIEW}
          </Text>

          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={{
                color: AppColors.PRIMARY,
                fontFamily: Fonts.Bold,
                fontSize: 16,
              }}>
              ₹0
            </Text>
            <Text
              style={{
                color: AppColors.PRIMARY,
                fontFamily: Fonts.Regular,
                fontSize: 12,
              }}>
              {Strings.TOTAL_EARNING}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          {/* {reportData?.map((data, i) => ( */}
          <View
            style={[
              {
                height: PhoneDimensions.window_width / 3,
                width: PhoneDimensions.window_width / 2.35,
                borderRadius: 30,
                overflow: 'hidden',
              },
              {
                backgroundColor: AppColors.LIGHT_GREEN,
              },
            ]}>
            <View style={{margin: 20, marginTop: 25}}>
              <Text
                style={{
                  fontFamily: Fonts.Bold,
                  fontSize: 24,
                  color: AppColors.WHITE,
                }}>
                {allOrderCounts?.Completed}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Medium_500,
                  fontSize: 16,
                  color: AppColors.WHITE,
                }}>
                {Strings.COMPLETED}
              </Text>
            </View>
            <Image
              source={AppImage.increase}
              style={{
                position: 'absolute',
                bottom: 0,
              }}
            />
          </View>

          <View
            style={[
              {
                height: PhoneDimensions.window_width / 3,
                width: PhoneDimensions.window_width / 2.35,
                borderRadius: 30,
                overflow: 'hidden',
              },
              {
                backgroundColor: AppColors.LIGHT_RED,
              },
            ]}>
            <View style={{margin: 20, marginTop: 25}}>
              <Text
                style={{
                  fontFamily: Fonts.Bold,
                  fontSize: 24,
                  color: AppColors.WHITE,
                }}>
                {allOrderCounts?.Cancel}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Medium_500,
                  fontSize: 16,
                  color: AppColors.WHITE,
                }}>
                {Strings.CANCEL}
              </Text>
            </View>
            <Image
              source={AppImage.decrease}
              style={{
                position: 'absolute',
                bottom: 0,
              }}
            />
          </View>

          {/* ))} */}
        </View>

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            padding: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{fontFamily: Fonts.Medium_500, color: AppColors.BLACK}}>
              {Strings.DAILY_ORDER_OVERVIEW}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={AppIcons.calendar} />
              <Text
                style={{
                  color: AppColors.TEXTCOLOR__SECONDARY,
                  marginLeft: 5,
                  fontFamily: Fonts.Medium_500,
                  fontSize: 12,
                }}>
                {moment(date).format('MMM DD, YYYY')}
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <BarChart
              data={barData}
              barWidth={5}
              height={120}
              spacing={24}
              width={PhoneDimensions.window_width / 1.5}
              roundedTop
              roundedBottom
              xAxisThickness={1}
              yAxisThickness={0}
              xAxisColor="lightgray"
              yAxisTextStyle={{color: 'gray'}}
              noOfSections={4}
              l
            />
          </View>
        </View>

        {/* <View
          style={{
            backgroundColor: AppColors.WHITE,
            padding: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{fontFamily: Fonts.Medium_500, color: AppColors.BLACK}}>
              {Strings.DAILY_EARNING_OVERVIEW}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: AppColors.TEXTCOLOR__SECONDARY,
                  fontFamily: Fonts.Medium_500,
                  fontSize: 12,
                }}>
                Weekly
              </Text>
              <Entypo
                name="chevron-small-down"
                size={20}
                color={AppColors.TEXTCOLOR__SECONDARY}
              />
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <LineChart
              disableScroll
              curved
              areaChart
              data={ptData}
              width={260}
              hideDataPoints
              spacing={40}
              color={AppColors.LIGHT_RED}
              thickness={2}
              startFillColor={AppColors.LIGHT_RED}
              endFillColor={AppColors.WHITE}
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={15}
              noOfSections={4}
              // maxValue={600}
              // yAxisColor="black"
              yAxisThickness={0}
              rulesType="solid"
              rulesColor="gray"
              yAxisTextStyle={{color: 'gray'}}
              yAxisSide="right"
              xAxisColor="lightgray"
              // pointerConfig={{
              //   pointerStripHeight: 160,
              //   pointerStripColor: 'lightgray',
              //   pointerStripWidth: 2,
              //   pointerColor: 'lightgray',
              //   radius: 6,
              //   pointerLabelWidth: 100,
              //   pointerLabelHeight: 90,
              //   activatePointersOnLongPress: true,
              //   autoAdjustPointerLabelPosition: false,
              //   pointerLabelComponent: items => {
              //     return (
              //       <View
              //         style={{
              //           height: 90,
              //           width: 100,
              //           justifyContent: 'center',
              //           marginTop: -30,
              //           marginLeft: -40,
              //         }}>
              //         <Text
              //           style={{
              //             color: 'white',
              //             fontSize: 14,
              //             marginBottom: 6,
              //             textAlign: 'center',
              //           }}>
              //           {items[0].date}
              //         </Text>

              //         <View
              //           style={{
              //             paddingHorizontal: 14,
              //             paddingVertical: 6,
              //             borderRadius: 16,
              //             backgroundColor: 'white',
              //           }}>
              //           <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              //             {'$' + items[0].value + '.0'}
              //           </Text>
              //         </View>
              //       </View>
              //     );
              //   },
              // }}
            />
          </View>
        </View> */}
      </ScrollView>
    </>
  );
};

export default ReportScreen;
