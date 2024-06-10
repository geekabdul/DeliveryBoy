import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  mainContainer: {backgroundColor: AppColors.PRIMARY, flex: 1},
  container: {
    backgroundColor: AppColors.WHITE_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 30,
  },
  splashImage: {marginHorizontal: 10, height: 350, width: 350},
  appName: {
    fontSize: 20,
    fontFamily: Fonts.SemiBold,
    color: AppColors.BLACK,
  },
  subHeading: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: AppColors.TEXTCOLOR,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1 / 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: AppColors.WHITE,
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
  },
});
