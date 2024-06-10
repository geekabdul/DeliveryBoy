import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {AppColors} from '../../../assets/colors/AppColors';

const Input = ({
  inputValue,
  setInputValue,
  iconName,
  placeholder,
  isSecureText = false,
  editable = true,
  maxLength,
  keyboardType,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.IconInput__container}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={placeholder}
          secureTextEntry={isSecureText}
          editable={editable}
          placeholderTextColor={AppColors.BLACK_54}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
        <Feather name={iconName} size={20} color={AppColors.PRIMARY} />
      </View>
      {/* {!editable ? (
        <TouchableOpacity style={styles.editIcon__container}>
          <Feather name={'edit-2'} size={20} color={AppColors.PRIMARY} />
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};

export default Input;
