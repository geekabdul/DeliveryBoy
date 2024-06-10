import {StyleSheet} from 'react-native';
import {AppColors} from '../../assets/colors/AppColors';
import {Fonts} from '../../assets/fonts';

export default StyleSheet.create({
  deliveryStatus__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  deliveryStatusText: {color: AppColors.BLACK, fontFamily: Fonts.SemiBold},
  IsAvailable: {fontFamily: Fonts.Regular},
  boxes__maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  boxParent__container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box__container: {
    backgroundColor: AppColors.WHITE,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  boxImage: {height: 50, width: 50},
  BoxText: {
    marginVertical: 5,
    color: AppColors.BLACK,
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  logout__container: {
    backgroundColor: AppColors.WHITE,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LogoutText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: AppColors.PRIMARY,
  },

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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  ModalHeading: {
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
    borderBottomWidth: 1,
    width: '100%',
    color: AppColors.BLACK,
    borderBottomColor: AppColors.GREY_4,
    paddingBottom: 5,
    marginBottom: 10,
  },
  confirmationText: {
    color: AppColors.BLACK,
    marginVertical: 20,
    fontFamily: Fonts.Regular,
  },
  YesNO__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '40%',
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
  },
  ButtonNo: {
    backgroundColor: AppColors.PRIMARY,
    borderColor: AppColors.PRIMARY,
  },

  textYes: {
    color: AppColors.BLACK,
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
  textNo: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },

  //MODAL STYLE END
});
