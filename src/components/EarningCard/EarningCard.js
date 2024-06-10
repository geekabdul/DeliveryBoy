import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

//VECTOR_ICONS IMPORT
import {AppColors} from '../../assets/colors/AppColors';
import Strings from '../../locales/Strings';

const EarningCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.orderStatus__container,
          {
            backgroundColor: AppColors.PRIMARY,
          },
        ]}>
        <Text style={styles.orderStatus_text}>{data.day}</Text>
      </View>
      <View style={styles.body__container}>
        <View style={styles.dataItem__container}>
          <Text style={styles.dataItemKey}>
            {Strings.PER_ORDER_EARNING}:{' '}
            <Text style={styles.dataItemValue}>{data.perOrderEarnig}</Text>
          </Text>
        </View>
        <View style={styles.dataItem__container}>
          <Text style={styles.dataItemKey}>
            {Strings.TODAYS_TOTAL_DELIVERY}:{' '}
            <Text style={styles.dataItemValue}>{data.todaysTotalDelivery}</Text>
          </Text>
        </View>
        <View style={styles.dataItem__container}>
          <Text style={styles.dataItemKey}>
            {Strings.PER_ORDER_EARNING} X {Strings.TODAYS_TOTAL_DELIVERY}
          </Text>
          <Text style={styles.dataItemValue}>
            ${data.perOrderEarnig} X {data.todaysTotalDelivery}
          </Text>
        </View>
        <View style={styles.dataItem__container}>
          <View style={styles.totalArrow__container}>
            <Text style={styles.totalText}>
              {Strings.TOTAL}:{' '}
              <Text
                style={{
                  color: AppColors.PRIMARY,
                }}>
                $
                {Number(data.perOrderEarnig) * Number(data.todaysTotalDelivery)}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EarningCard;
