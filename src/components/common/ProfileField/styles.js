import {StyleSheet} from 'react-native';
import {AppColors} from '../../../assets/colors/AppColors';
import {Fonts} from '../../../assets/fonts';

export default StyleSheet.create({
  container: {
    marginVertical: 5,

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
    padding: 0,
    fontSize: 16,
    color: AppColors.BLACK,
    fontFamily: Fonts.Medium_500,
    width: '100%',
  },
  editIcon__container: {width: '10%', alignItems: 'center'},
});
