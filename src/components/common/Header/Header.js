import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {AppColors} from '../../../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';

const Header = ({headerTitle, hideRIghtIcon = true}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle__text}>{headerTitle}</Text>
      {hideRIghtIcon && (
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Feather name="bell" size={20} color={AppColors.BLACK} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
