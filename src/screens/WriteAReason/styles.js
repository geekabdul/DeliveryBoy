import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    borderColor: AppColors.PRIMARY,
    borderWidth: 1.2,
    borderRadius: 5,
    flex: 1 / 3,
  },
  input: {
    textAlignVertical: 'top',
    padding: 10,
    fontFamily: Fonts.Regular,
  },

  button__container: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '80%',
  },
});
