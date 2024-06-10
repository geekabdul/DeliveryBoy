import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppIcons} from '../../assets/Icons/Index';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {AppColors} from '../../assets/colors/AppColors';
const DashBoardBox = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrdersScreen', {type: item.title})}
      activeOpacity={0.8}
      style={[
        styles.box__container,
        {
          backgroundColor:
            item.title === 'Accepted'
              ? AppColors.PRIMARY
              : item.title === 'Started'
              ? AppColors.ORANGE
              : item.title === 'Completed'
              ? AppColors.LIGHT_GREEN
              : item.title === 'Cancel'
              ? AppColors.LIGHT_RED
              : null,
        },
      ]}>
      <View style={styles.boxIcon__container}>
        {item.title === 'Accepted' ? (
          <Image source={AppIcons.mapPin} />
        ) : item.title === 'Started' ? (
          <Image source={AppIcons.inProcess} />
        ) : item.title === 'Completed' ? (
          <Image source={AppIcons.complete} />
        ) : item.title === 'Cancel' ? (
          <Image source={AppIcons.cancel} />
        ) : null}
      </View>
      <View style={styles.countTitle__container}>
        <Text style={styles.count}>{item.count}</Text>
        <Text style={styles.boxTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashBoardBox;
