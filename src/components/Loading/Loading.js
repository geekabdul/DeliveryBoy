import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../assets/colors/AppColors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function Loading({customStyle}) {
  return (
    <View style={[styles.container, customStyle]}>
      <ActivityIndicator size="large" color={AppColors.PRIMARY} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // zIndex: 10,
  },
});
