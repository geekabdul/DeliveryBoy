import { StyleSheet } from 'react-native';
import { AppColors } from '../../../assets/colors/AppColors';
import { Fonts } from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: AppColors.WHITE,
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: Fonts.Regular,
  },
});
