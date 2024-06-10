import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.BORDER_COLOR,
    padding: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  IconInput__container: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 15,
    padding: 0,
    marginTop: 2,
    fontSize: 14,
    color: AppColors.BLACK,
    fontFamily: Fonts.Regular,
    width: '100%',
  },
  editIcon__container: {width: '10%', alignItems: 'center'},
});
