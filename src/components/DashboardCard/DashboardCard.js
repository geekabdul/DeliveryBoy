import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

//VECTOR_ICONS IMPORT
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../../assets/colors/AppColors';
import Strings from '../../locales/Strings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// PACKAGES IMPORTS
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../assets/fonts';
import moment from 'moment';
import {AppImage} from '../../assets/images/Index';
import {AppIcons} from '../../assets/Icons/Index';

const DashboardCard = ({data}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('OrderDetailsScreen', {data});
  };
  return (
    // <TouchableOpacity style={styles.container} onPress={handleNavigation}>
    //   {/* <View
    //     style={[
    //       styles.orderStatus__container,
    //       {
    //         backgroundColor:
    //           data.orderStatus === 'Delivered'
    //             ? AppColors.GREEN
    //             : data.orderStatus === 'Pending'
    //             ? AppColors.PRIMARY
    //             : data.orderStatus === 'Rejected'
    //             ? AppColors.RED
    //             : null,
    //       },
    //     ]}>
    //     <Text style={styles.orderStatus_text}>{data.orderStatus}</Text>
    //   </View> */}
    //   <View style={styles.body__container}>
    //     <View style={styles.dataItem__container}>
    //       <Text
    //         style={{
    //           fontSize: 16,
    //           fontFamily: Fonts.Bold,
    //           color: AppColors.BLACK,
    //         }}>
    //         {data.name}
    //       </Text>
    //     </View>
    //     <View style={styles.dataItem__container}>
    //       <Text style={styles.dataItemKey}>
    //         {Strings.QUANTITY}:{' '}
    //         <Text style={styles.dataItemValue}>{data.quantity}</Text>
    //       </Text>
    //     </View>
    //     <View style={styles.dataItem__container}>
    //       <Text style={styles.dataItemKey}>
    //         Order Placed On:{' '}
    //         <Text style={styles.dataItemValue}>{data.orderPlacedOn}</Text>
    //       </Text>
    //     </View>

    //     <View style={styles.dataItem__container}>
    //       <View style={styles.totalArrow__container}>
    //         <Text style={styles.totalText}>
    //           {Strings.TOTAL}:{' '}
    //           <Text
    //             style={{
    //               color:
    //                 data.orderStatus === 'Delivered'
    //                   ? AppColors.GREEN
    //                   : data.orderStatus === 'Pending'
    //                   ? AppColors.PRIMARY
    //                   : data.orderStatus === 'Rejected'
    //                   ? AppColors.RED
    //                   : null,
    //             }}>
    //             ${data.Total}
    //           </Text>
    //         </Text>
    //         <View
    //           style={[
    //             styles.arrowCircle__container,
    //             {
    //               backgroundColor:
    //                 data.orderStatus === 'Delivered'
    //                   ? AppColors.GREEN
    //                   : data.orderStatus === 'Pending'
    //                   ? AppColors.PRIMARY
    //                   : data.orderStatus === 'Rejected'
    //                   ? AppColors.RED
    //                   : null,
    //             },
    //           ]}>
    //           <Ionicons
    //             name="chevron-forward-sharp"
    //             size={20}
    //             color={AppColors.WHITE}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </TouchableOpacity>

    <TouchableOpacity
      style={{
        backgroundColor: AppColors.WHITE,
        marginVertical: 10,
        padding: 20,
        borderRadius: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Bold,
              color: AppColors.BLACK,
            }}>
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: Fonts.Regular,
              color: AppColors.TEXTCOLOR__SECONDARY,
            }}>
            {Strings.ORDER_ID}:{' '}
            <Text style={{fontFamily: Fonts.SemiBold}}>{data.OrderId}</Text>
          </Text>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Fonts.Regular,
                color: AppColors.BLACK,
              }}>
              {Strings.ADDRESS}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Regular,
                color: AppColors.TEXTCOLOR__SECONDARY,
              }}>
              {data.address}
            </Text>
          </View>
        </View>
        <View>
          <Image source={AppImage.paid} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
              fontFamily: Fonts.SemiBold,
            }}>
            {moment(data.orderPlacedOn).format('MMM DD, YYYY')}
          </Text>
        </View>
        <Text style={{fontFamily: Fonts.SemiBold}}>
          {Strings.QTY}: {data.quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;
