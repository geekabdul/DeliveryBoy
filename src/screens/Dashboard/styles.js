import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {PhoneDimensions} from '../../constants/Dimensions';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  Header__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.WHITE,
    padding: 20,
  },
  top__container: {
    backgroundColor: AppColors.WHITE,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  rowCenterSpacebetween: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  search__container: {marginRight: 20},
  dateText: {
    marginRight: 10,
    fontFamily: Fonts.Medium_500,
    fontSize: 12,
    color: AppColors.TEXTCOLOR__SECONDARY,
  },
  scrollView__container: {marginBottom: 65},
  day_Text: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
    color: AppColors.BLACK,
  },
  boxes_mainContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 10,
  },
  box__container: {
    borderRadius: 25,
    padding: 15,
    width: PhoneDimensions.window_width / 2.3,
    height: PhoneDimensions.window_width / 4,
    justifyContent: 'space-between',
  },
  boxIcon__container: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  boxTitle: {
    fontFamily: Fonts.Medium_500,
    color: AppColors.WHITE,
    fontSize: 16,
  },
  bottom__container: {paddingHorizontal: 20, paddingBottom: 30},

  bottomHeading__container: {
    marginVertical: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pendignOrderText: {
    color: AppColors.BLACK,
    fontFamily: Fonts.Medium_500,
    fontSize: 16,
  },
  viewAll__container: {flexDirection: 'row', alignItems: 'center'},
  viewAllText: {
    fontFamily: Fonts.Regular,
    color: AppColors.SKYBLUE,
  },
});
