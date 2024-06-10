import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const BackHeader = ({headerTitle}) => {
  const navigation = useNavigation();
  const handleBackArrow = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrow__container}
        onPress={handleBackArrow}>
        <AntDesign name="arrowleft" color={'black'} size={20} />
      </TouchableOpacity>
      <View style={styles.headerTitle__container}>
        <Text style={styles.headerTitle__text}>{headerTitle}</Text>
      </View>
    </View>
  );
};

export default BackHeader;
