import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../assets/colors/AppColors';
import { Fonts } from '../../../assets/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  main__container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 20
  },
  container: {
    backgroundColor: AppColors.WHITE,
    flex: 1,
    padding: 20
  },
  appImage__container: {
    alignSelf: 'center',
    top: -90
  },
  appImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginVertical: width / 5.5,
  },
  loginText: {
    color: AppColors.BLACK,
    fontSize: 30,
    fontFamily: Fonts.ExtraBold,
    textAlign: 'center'
  },
  subHeading__container: {
    marginVertical: 10
  },
  textHello: {
    color: AppColors.TEXTCOLOR,
    fontSize: 20,
    fontFamily: Fonts.Regular,
  },
  loginMessage: {
    color: AppColors.TEXTCOLOR,
    fontSize: 14,
    fontFamily: Fonts.Regular,
    textAlign: 'center'
  },
  welcomebackText: {
    color: AppColors.TEXTCOLOR,
    fontSize: 20,
    fontFamily: Fonts.Regular,
  },
  inputMain__containet: { marginVertical: 10 },
  bottomImage__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width / 5,
  },
  poweredByText: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: AppColors.BLACK,
  },
});
