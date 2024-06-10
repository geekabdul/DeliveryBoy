import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { AppColors } from '../../assets/colors/AppColors';

//VECTOR_ICONS IMPORT
import Entypo from 'react-native-vector-icons/Entypo';
import { AppIcons } from '../../assets/Icons/Index';
import { Fonts } from '../../assets/fonts';
import moment from 'moment';

const NotificationCard = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          width: 20,
          marginRight: 10,
          alignSelf: 'flex-start',
          marginTop: 7,
        }}>
        <Image
          source={
            data.message === 'You have an order assigned to you.'
              ? AppIcons.orderAssigned
              : data.message === 'You deliver an order.'
                ? AppIcons.deliveredOrder
                : data.message === 'You cancel an order.'
                  ? AppIcons.cancelOrder
                  : null
          }
          style={{ resizeMode: 'contain' }}
        />
      </View> */}
      <Image
        source={
          // data.message === 'You have an order assigned to you.'
          //   ?
          AppIcons.orderAssigned
          //   : data.message === 'You deliver an order.'
          //     ? AppIcons.deliveredOrder
          //     : data.message === 'You cancel an order.'
          //       ? 
          // AppIcons.cancelOrder
          // : null
        }
        style={{ width: 22, height: 22, marginRight: 5, marginTop: 5 }}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
        }}>
        <Text style={{ fontFamily: Fonts.Medium_500, color: AppColors.BLACK }}>
          {data.message}
        </Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Image source={AppIcons.calendar} style={{ width: 18, height: 18, marginBottom: 3 }} />
          <Text
            style={{
              marginHorizontal: 10,
              color: AppColors.TEXTCOLOR__SECONDARY,
              fontFamily: Fonts.Medium_500,
              fontSize: 12,
            }}>
            {moment(data.created_at).format('MMM DD YYYY   hh:mm')}
          </Text>
        </View>
      </View>
      {/* <View style={{}}>
        <Entypo
          name={'chevron-thin-right'}
          size={15}
          color={AppColors.TEXTCOLOR__SECONDARY}
        />
      </View> */}
    </View>
  );
};

export default NotificationCard;
