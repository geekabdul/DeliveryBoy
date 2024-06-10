import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {PhoneDimensions} from '../../constants/Dimensions';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    elevation: 2,
    padding: 15,
    marginVertical: 7,
  },
  orderStatus__container: {
    width: PhoneDimensions.window_width / 4,
    position: 'absolute',
    right: -1,
    top: -1,
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
  },
  orderStatus_text: {
    color: AppColors.WHITE,
  },
  body__container: {},
  dataItem__container: {marginVertical: 5},
  dataItemKey: {color: AppColors.BLACK, fontFamily: Fonts.SemiBold},
  dataItemValue: {color: 'grey', fontWeight: '400', fontFamily: Fonts.SemiBold},
  totalArrow__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {fontSize: 18, fontFamily: Fonts.SemiBold, color: AppColors.BLACK},
});
