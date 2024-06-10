import {View, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './styles';

import {Fonts} from '../../../assets/fonts';

const InputText = ({
  inputValue,
  setInputValue,
  placeholder,
  isSecureText = false,
  editable = true,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: Fonts.Regular}}>{label}</Text>
      <View style={styles.IconInput__container}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={placeholder}
          secureTextEntry={isSecureText}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default InputText;
