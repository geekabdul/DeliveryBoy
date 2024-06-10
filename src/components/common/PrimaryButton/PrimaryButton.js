import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { AppColors } from '../../../assets/colors/AppColors';

const PrimaryButton = ({
  btnTitle,
  btnHandle,
  customButtonStyle,
  customButtonText,
  btnIcon,
  isbtnDisabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={isbtnDisabled}
      style={[
        styles.container,
        {
          backgroundColor: isbtnDisabled
            ? AppColors.PRIMARY_LIGHT
            : AppColors.PRIMARY,
        },
        customButtonStyle,
      ]}
      onPress={btnHandle}>
      <Text style={[styles.btnText, customButtonText]}>{btnTitle}</Text>
      {btnIcon ? (
        <Feather name={btnIcon} size={20} color={AppColors.WHITE} />
      ) : null}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
