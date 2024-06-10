import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  heading__container: {marginTop: 20},
  sendOtpNote__container: {
    color: AppColors.TEXTCOLOR__SECONDARY,
    textAlign: 'center',
    fontFamily: Fonts.Regular,
  },
  otpInput__container: {alignItems: 'center'},
  button__container: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '90%',
  },
  otp__Input: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  otp__container: {marginVertical: 20, width: '90%'},
});
