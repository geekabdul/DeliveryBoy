import {StyleSheet} from 'react-native';
import {PhoneDimensions} from '../../constants/Dimensions';
import {Fonts} from '../../assets/fonts';
import {AppColors} from '../../assets/colors/AppColors';

export default StyleSheet.create({
  box__container: {
    borderRadius: 25,
    padding: 15,
    width: PhoneDimensions.window_width / 2.3,
    height: PhoneDimensions.window_width / 4,
    justifyContent: 'space-between',
  },
  boxIcon__container: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  countTitle__container: {marginTop: 5},
  count: {
    fontSize: 24,
    color: AppColors.WHITE,
    fontFamily: Fonts.Bold,
  },
  boxTitle: {
    fontFamily: Fonts.Medium_500,
    color: AppColors.WHITE,
    fontSize: 16,
  },
});
