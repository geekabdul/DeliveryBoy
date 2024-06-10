import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppColors} from '../../../assets/colors/AppColors';

const MainContainer = props => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? AppColors.BLACK : AppColors.WHITE,
  // };
  return (
    <SafeAreaView style={[styles.main__container, props.style]}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        barStyle={'dark-content'}
        backgroundColor={AppColors.WHITE}
      />
      {props.children}
    </SafeAreaView>
  );
};

export default MainContainer;
