import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {PhoneDimensions} from '../../constants/Dimensions';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    borderRadius: 30,
    padding: 15,
    marginVertical: 7,
  },
  orderStatus__container: {
    width: PhoneDimensions.window_width / 4,
    position: 'absolute',
    right: -1,
    top: -1,
    padding: 5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
  },
  orderStatus_text: {
    color: AppColors.WHITE,
    fontFamily: Fonts.Regular,
  },
  body__container: {},
  dataItem__container: {marginVertical: 5},
  dataItemKey: {color: AppColors.BLACK, fontFamily: Fonts.SemiBold},
  dataItemValue: {color: 'grey', fontFamily: Fonts.SemiBold},
  totalArrow__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {fontSize: 18, fontFamily: Fonts.SemiBold, color: AppColors.BLACK},
  arrowCircle__container: {
    borderRadius: 999,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
