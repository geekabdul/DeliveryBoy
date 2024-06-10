import {View, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './styles';

import {Fonts} from '../../../assets/fonts';

const ProfileField = ({
  inputValue,

  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: Fonts.Regular}}>{label}</Text>
      <View style={styles.IconInput__container}>
        <Text style={styles.input}>{inputValue}</Text>
      </View>
    </View>
  );
};

export default ProfileField;
