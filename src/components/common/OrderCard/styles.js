import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    marginVertical: 10,
    padding: 20,
    borderRadius: 30,
  },
  body__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameOrderIdAddress__container: {flex: 1},
  nameText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: AppColors.BLACK,
  },
  orderId_heading: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: AppColors.TEXTCOLOR__SECONDARY,
  },
  address__container: {marginVertical: 10},
  address: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: AppColors.BLACK,
  },
  cardBottom__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarIconNdate__container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: AppColors.TEXTCOLOR__SECONDARY,
    marginLeft: 5,
    fontFamily: Fonts.Medium_500,
    fontSize: 12,
  },
  quantityText: {fontFamily: Fonts.Medium_500, fontSize: 12},
  // orderStatus__container: {
  //   width: PhoneDimensions.window_width / 4,
  //   position: 'absolute',
  //   right: -1,
  //   top: -1,
  //   padding: 5,
  //   borderTopRightRadius: 5,
  //   borderBottomLeftRadius: 5,
  //   alignItems: 'center',
  // },
  // orderStatus_text: {
  //   color: AppColors.WHITE,
  //   fontFamily: Fonts.Regular,
  // },
  // body__container: {},
  // dataItem__container: {marginVertical: 5},
  // dataItemKey: {color: AppColors.BLACK, fontFamily: Fonts.SemiBold},
  // dataItemValue: {color: 'grey', fontFamily: Fonts.SemiBold},
  // totalArrow__container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // totalText: {fontSize: 18, fontFamily: Fonts.SemiBold, color: AppColors.BLACK},
  // arrowCircle__container: {
  //   borderRadius: 999,
  //   padding: 8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
