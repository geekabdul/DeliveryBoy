import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';

// IMPORTS NAVIGATION
import { useNavigation } from '@react-navigation/native';

// IMPORT ASSETS
import Strings from '../../../locales/Strings';

// IMPORT COMMON COMPONENTS
import { AppImage } from '../../../assets/images/Index';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={AppImage.splashScreenImage} style={styles.splashImage} />
        <Text style={styles.appName}>{Strings.APP_NAME}</Text>
        <Text style={styles.subHeading}>
          {Strings.SPLASH_SCREEN_SUBHEADING}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.getStartedText}>{Strings.GET_STARTED}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
