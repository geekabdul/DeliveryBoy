import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle__text: {
    color: AppColors.BLACK,
    fontSize: 16,
    fontFamily: Fonts.Medium_500,
  },
});
