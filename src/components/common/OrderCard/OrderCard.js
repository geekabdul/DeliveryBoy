import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { AppColors } from '../../../assets/colors/AppColors';

//VECTOR_ICONS IMPORT
import Strings from '../../../locales/Strings';
import { Fonts } from '../../../assets/fonts';
import { AppImage } from '../../../assets/images/Index';
import { AppIcons } from '../../../assets/Icons/Index';
import moment from 'moment';
import { capitalizeFirstLetter } from '../../../screens/OrderDetails/OrderDetailsScreen';

const OrderCard = ({ data, handleNavigation }) => {
  const shippingData = data?.order_details_json?.shipping_details;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handleNavigation(data.id)}
      style={styles.container}>
      <View style={styles.body__container}>
        <View style={styles.nameOrderIdAddress__container}>
          <Text style={styles.nameText}>
            {capitalizeFirstLetter(shippingData?.first_name)}{' '}
            {capitalizeFirstLetter(shippingData?.last_name)}
          </Text>
          <Text style={styles.orderId_heading}>
            {Strings.ORDER_ID}:{' '}
            <Text style={{ fontFamily: Fonts.Medium_500 }}>{data?.order_id}</Text>
          </Text>
          <View style={styles.address__container}>
            <Text style={styles.address}>{Strings.ADDRESS}</Text>
            <Text
              style={{
                fontFamily: Fonts.Regular,
                color: AppColors.TEXTCOLOR__SECONDARY,
              }}>
              {shippingData?.address_1}
              {shippingData?.address_1 && ' '}
              {shippingData?.address_2}
              {shippingData?.address_2 && ' '}
              {shippingData?.district}
              {shippingData?.district && ' '}
              {shippingData?.city}
              {shippingData?.city && ' '}
              {shippingData?.postal_code}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={
              data?.payment_details?.payment_type === 'Online'
                ? AppImage.paid
                : AppImage.cod
            }
          />
        </View>
      </View>
      <View style={styles.cardBottom__container}>
        <View style={styles.calendarIconNdate__container}>
          <Image
            source={AppIcons.calendar}
            style={{ width: 18, height: 18, marginBottom: 3 }}
          />
          <Text style={styles.dateText}>
            {moment(data?.created_at).format('MMM DD, YYYY')}
          </Text>
        </View>
        <Text style={styles.quantityText}>
          {Strings.QTY}: {data?.order_details_json?.lineitem?.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
