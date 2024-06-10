import { StyleSheet } from 'react-native';
import { AppColors } from '../../assets/colors/AppColors';
import { PhoneDimensions } from '../../constants/Dimensions';
import { Fonts } from '../../assets/fonts';

export default StyleSheet.create({
  container: { padding: 20 },
  // container: {flex: 1, paddingBottom: 20},
  // OrderDetails__container: {
  //   marginTop: 1,
  //   marginHorizontal: 1,
  //   backgroundColor: AppColors.WHITE,
  //   borderRadius: 5,
  //   elevation: 2,
  //   padding: 15,
  // },
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
  // paymentStatusText: {fontFamily: Fonts.SemiBold},
  // totalArrow__container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // totalText: {fontSize: 24, fontFamily: Fonts.SemiBold, color: AppColors.BLACK},
  // productDetails__container: {
  //   marginHorizontal: 1,
  //   marginVertical: 20,
  //   backgroundColor: AppColors.WHITE,
  //   borderRadius: 5,
  //   elevation: 2,
  //   padding: 15,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // productImage: {width: 80, height: 80, borderRadius: 8},
  // productDetails__subContainer: {marginLeft: 10, flex: 1},
  // productName: {fontFamily: Fonts.Bold, color: AppColors.BLACK, fontSize: 14},
  // productDetails__Text: {
  //   fontSize: 12,
  //   fontFamily: Fonts.Regular,
  // },
  // productPrice: {fontFamily: Fonts.SemiBold},

  // acceptRejectButtons__container: {
  //   width: '100%',
  //   marginTop: 100,
  //   alignSelf: 'center',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // acceptRejectButtons__subContainer: {
  //   width: '46%',
  // },

  // bottombuttons__container: {
  //   // position: 'absolute',
  //   // bottom: 60,
  //   marginTop: 100,
  //   alignSelf: 'center',
  //   width: '90%',
  // },
  // sendOtp__container: {marginTop: 20},

  // TakePaymentImage__container: {
  //   marginHorizontal: 1,
  //   marginVertical: 10,
  //   backgroundColor: AppColors.WHITE,
  //   borderRadius: 5,
  //   elevation: 2,
  //   padding: 15,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // deleteIcon__container: {position: 'absolute', right: 10, top: 10},
  // addNewImage__container: {
  //   alignItems: 'center',
  //   borderRadius: 8,
  //   borderWidth: 2,
  //   borderColor: AppColors.PRIMARY,
  //   height: 80,
  //   width: 80,
  //   justifyContent: 'center',
  // },
  // takePayment__Image: {width: 80, height: 80, borderRadius: 8},
  // takePaymentImageText: {
  //   marginLeft: 10,
  //   fontSize: 18,
  //   color: AppColors.BLACK,
  //   fontFamily: Fonts.SemiBold,
  // },

  //MODAL STYLE

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
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
    color: AppColors.BLACK,
    fontFamily: Fonts.Regular,
    marginLeft: 10,
  },
  confirmBtnParent__container: {},
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
  //MODAL STYLE END
});
