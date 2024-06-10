import { StyleSheet } from 'react-native';
import { AppColors } from '../../assets/colors/AppColors';
import { PhoneDimensions } from '../../constants/Dimensions';
import { Fonts } from '../../assets/fonts';

export default StyleSheet.create({
  // container: {
  //   // backgroundColor: AppColors.WHITE,
  //   // borderRadius: 5,
  //   // elevation: 2,
  //   // padding: 15,
  //   marginVertical: 7,
  //   height: PhoneDimensions.window_height / 8,
  //   justifyContent: 'center',
  //   // marginHorizontal: 1,
  // },
  // subContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   height: '100%',
  // },
  // notificationMsg__container: {
  //   borderLeftWidth: 2,
  //   marginHorizontal: 22,
  //   paddingHorizontal: 20,
  //   height: '100%',
  //   justifyContent: 'flex-start',
  // },
  // notification__content: {
  //   fontFamily: Fonts.SemiBold,
  //   color: AppColors.BLACK,
  // },
  // dateTime__container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 5,
  // },
  // marginRight10: {marginRight: 10},

  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.BORDER_COLOR_2,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
