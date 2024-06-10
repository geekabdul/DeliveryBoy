import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 10,
  },
  backArrow__container: {},
  headerTitle__container: {
    marginLeft: 20,
  },
  headerTitle__text: {
    color: AppColors.BLACK,
    fontSize: 16,
    fontFamily: Fonts.Medium_500,
  },
});
