import { StyleSheet } from 'react-native';
import { AppColors } from '../../assets/colors/AppColors';
import { PhoneDimensions } from '../../constants/Dimensions';
import { Fonts } from '../../assets/fonts';

export default StyleSheet.create({
  container: { flex: 1 },
  mapView__container: { flex: 1, width: '100%' },
  mapMarker: { width: 40, height: 40, resizeMode: 'contain' },
  transparent__container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4),',
    width: '100%',
    height: '100%',
  },
  bottomButtons__container: {
    position: 'absolute',
    alignSelf: 'center',
    width: '95%',
    bottom: 60,
  },
  customerAddress__container: {
    backgroundColor: AppColors.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
  customerMain__addressText: {
    fontSize: 16,
    color: 'black',
    fontFamily: Fonts.SemiBold,
  },
  customer_addressText: { marginVertical: 5 },
  confirmLocationBtn__container: {
    backgroundColor: AppColors.PRIMARY,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  locationDistanceTime__container: {
    backgroundColor: AppColors.WHITE,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    paddingHorizontal: 25,
    height: PhoneDimensions.window_height / 3.5,
  },
  locationTimeText: {
    fontSize: 20,
    color: AppColors.BLACK,
    fontFamily: Fonts.SemiBold,
  },
  locationDistanceText: {
    fontSize: 16,
    color: AppColors.TEXTCOLOR__SECONDARY,
    fontFamily: Fonts.Regular
  },
  locationDistanceTime__msg: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: AppColors.TEXTCOLOR__SECONDARY
  },
  phone__container: {
    backgroundColor: AppColors.PRIMARY,
    position: 'absolute',
    right: 20,
    top: -20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },

  mapPin__container: {
    position: 'absolute',
    backgroundColor: AppColors.WHITE,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 999,
    elevation: 5,
    top: -30,
  },
  arrivingAtLocation__container: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  arrivingAtText: {
    color: AppColors.BLACK,
    fontSize: 14,
    fontFamily: Fonts.Regular,
  },
  LocationText: {
    color: AppColors.BLACK,
    fontFamily: Fonts.SemiBold,
    fontSize: 22,
  },
  excatLocationText: {
    marginTop: 8,
    textAlign: 'center',
    fontFamily: Fonts.Regular
  },

  //MODAL STYLE

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmationText: {
    color: AppColors.BLACK,
    marginVertical: 20,
  },
  reason__container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  circleParent__container: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
  },
  selectedCircleOuter: {
    borderRadius: 999,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.PRIMARY_LIGHT,
  },
  selectedCircle: {
    borderRadius: 999,
    height: 15,
    width: 15,
    backgroundColor: AppColors.PRIMARY,
  },
  unSelectedCircle: {
    borderWidth: 1,
    borderRadius: 999,
    height: 15,
    width: 15,
    marginVertical: 5,
  },
  reasonText: {
    color: AppColors.TEXTCOLOR,
    fontFamily: Fonts.Regular,
    marginLeft: 10,
    fontSize: 14
  },
  updateHeading__container: {
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: AppColors.GREY_4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginBottom: 10,
  },
  updateHeading: {
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
    color: AppColors.BLACK,
  },
  confirmBtnParent__container: {},

  //MODAL STYLE END
});
