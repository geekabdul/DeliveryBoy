import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  IconInput__container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 15,
    padding: 0,
    fontSize: 16,
    color: AppColors.BLACK,
    fontFamily: Fonts.Regular,
    width: '100%',
  },
  editIcon__container: {width: '10%', alignItems: 'center'},
});
