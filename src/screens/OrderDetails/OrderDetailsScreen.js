import React, { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import styles from './styles';

//ICONS IMPORTS
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//STRING, COLORS IMPORTS
import Strings from '../../locales/Strings';
import { AppColors } from '../../assets/colors/AppColors';

//COMMON_COMPONENTS IMPORTS
import MainContainer from '../../components/common/Container/MainContainer';
import BackHeader from '../../components/common/BackHeader/BackHeader';
import PrimaryButtom from '../../components/common/PrimaryButton/PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

// PACKAGES IMPORTS
import ImagePicker from 'react-native-image-crop-picker';
import { Fonts } from '../../assets/fonts';
import { AppIcons } from '../../assets/Icons/Index';
import PrimaryButton from '../../components/common/PrimaryButton/PrimaryButton';
import * as APICalls from '../../api/APICalls';
import moment from 'moment';
import { checkStatus } from '../../constants/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';
import { Utility } from '../../util';

const OrderRejectReasonList = [
  Strings.I_AM_ON_OTHER_DELIVERY,
  Strings.I_TAKEN_A_LEAVE,
  Strings.OTHER,
];
export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const OrderDetailsScreen = props => {
  const orderId = props?.route?.params?.OrderId;
  //STATE HOOKS
  const [modalVisible, setModalVisible] = useState(false);
  const [acceptModalVisible, setAcceptModalVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const [orderDetails, setOrderDetails] = useState();

  //FUNCTIONS
  useEffect(() => {
    if (!!orderId) {
      getorderDetails();
    }
  }, [orderId]);
  const getorderDetails = () => {
    APICalls.orderDetails(onGetOrderData, onFailOrderData, orderId, props);
  };
  const onGetOrderData = response => {
    setOrderDetails(response?.data);
  };

  const onFailOrderData = error => {
    console.log(error, 'error');
  };
  const totalAmount = () => {
    const totalUnitPrice = orderDetails?.order_details_json?.lineitem.reduce(
      (total, item) => {
        return total + item.quantity * item.unit_price;
      },
      0,
    );
    return totalUnitPrice;
  };

  const updateTask = async type => {
    const params = {
      task_status: type, // Started // Accepted // Rejected
      reason: selectedReason,
    };
    const param = {
      task_status: type, // Started // Accepted // Rejected
    };
    APICalls.updateTaskStatus(
      onGetUpdate,
      onFailUpdate,
      type == 'Rejected' ? params : param,
      orderId,
      props,
    );
  };
  const onGetUpdate = response => {
    if (response?.data?.task_status == 'Rejected') {
      props.navigation.navigate('DashboardScreen');
    } else if (response?.data?.task_status == 'Accepted') {
      setIsOrderAccepted(true);
      setAcceptModalVisible(false);
    }
    // setOrderDetails(response?.data)
    // Utility.showToast(JSON.stringify(response));
    // Utility.log('onSuccessSentOTP===> ', JSON.stringify(response));
  };

  const onFailUpdate = error => {
    console.log(error, 'error');
    // Utility.showToast(error?.message);
    // Utility.log('onFailureSendOTP===> ', JSON.stringify(error));
  };

  //=> MODAL CONFIRM BUTTON
  const handleConfirmReason = () => {
    if (selectedReason) {
      setModalVisible(false);
      setSelectedReason('');
      if (selectedReason === Strings.OTHER) {
        props.navigation.navigate('WriteAReasonScreen', { orderId: orderId });
      } else {
        updateTask('Rejected');
      }
    } else {
      Utility.showToast('Please select any Reason');
    }
  };

  //=> ACCEPT BUTTON
  const onAcceptHandle = () => {
    setAcceptModalVisible(true);
  };

  //=> CANCEL BUTTON
  const onCanceltHandle = () => {
    setModalVisible(true);
  };

  //=> LOCATION BUTTON
  const handleLocationBtn = () => {
    props.navigation.navigate('MapScreen', {
      data: orderDetails,
      orderId: orderId,
      // onDeliveredReturn: () => {
      //   setIsReachedAtLocation(true);
      // },
    });
  };

  //=> TAKE PAYMENT BUTTON
  // const handleTakePaymentBtn = () => {
  //   // navigation.navigate('VerificationScreen');
  //   ImagePicker.openCamera({
  //     cropping: true,
  //   })
  //     .then(image => {
  //       setImagePaths(prevPaths => [...prevPaths, image.path]);
  //     })
  //     .catch(error => {
  //       console.log('Error picking image: ', error);
  //     });
  // };

  //=> DELETE PAYMENT IMAGE
  // const handleDeleteImage = indexToDelete => {
  //   setImagePaths(prevPaths =>
  //     prevPaths.filter((_, index) => index !== indexToDelete),
  //   );
  // };

  //=> SEND OTP BUTTON
  // const handleSendOTP = () => {
  //   navigation.navigate('VerificationScreen', {
  //     onVerifiedReturn: () => {
  //       setIsOrderVerified(true);
  //     },
  //   });
  // };

  //=> ORDER DELIVERED BUTTON
  // const handleOrderDelivered = () => {
  //   navigation.navigate('AllDeliveredScreen');
  // };

  const handleAcceptYes = () => {
    updateTask('Accepted');
  };
  const handleAcceptNo = () => {
    setAcceptModalVisible(false);
  };
  const openMaps = () => {
    const encodedAddress = encodeURIComponent(
      orderDetails.order_details_json?.shipping_details?.address_1,
    );
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const url = `${scheme}${encodedAddress}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          // Fallback to a web browser if Google Maps is not installed
          const browserUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          return Linking.openURL(browserUrl);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  const shippingData = orderDetails?.order_details_json?.shipping_details;

  if (!orderDetails) {
    return <Loading customStyle={{ flex: 1 }} />;
  }

  return (
    <>
      <BackHeader headerTitle={Strings.ORDER_DETAILS} />

      <ScrollView
        style={{
        }}
        contentContainerStyle={{flexGrow:1,paddingBottom:100}}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: AppColors.WHITE,
            padding: 15,
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: AppColors.BORDER_COLOR_2,
              paddingVertical: 10,
            }}>
            <Text
              numberOfLines={1}
              style={{
                borderRadius: 7,
                fontSize: 12,
                color: AppColors.BLACK,
                width: '80%',
                backgroundColor: AppColors.PRIMARY_LIGHT_2,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              {Strings.ORDER_ID}:
              <Text style={{ fontFamily: Fonts.Medium_500, fontSize: 12 }}>
                {' '}
                {orderDetails?.order_id}
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Bold,
                fontSize: 16,
                color:
                  orderDetails?.payment_details?.payment_type == 'Online'
                    ? AppColors.GREEN
                    : AppColors.RED,
              }}>
              ₹{totalAmount()}
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  width: '60%',
                  fontSize: 16,
                  fontFamily: Fonts.Bold,
                  color: AppColors.BLACK,
                }}>
                {capitalizeFirstLetter(shippingData?.first_name)}{' '}
                {capitalizeFirstLetter(shippingData?.last_name)}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={AppIcons.calendar}
                  style={{ width: 16, height: 16, marginBottom: 3 }}
                />
                <Text
                  style={{
                    color: AppColors.TEXTCOLOR__SECONDARY,
                    marginLeft: 5,
                    fontFamily: Fonts.Regular,
                  }}>
                  {moment(orderDetails?.created_at).format('MMM DD, YYYY')}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontFamily: Fonts.Regular }}>{Strings.EMAIL}</Text>
              <Text style={{ fontFamily: Fonts.Regular, color: AppColors.BLACK }}>
                {orderDetails?.customer_details_json?.email}
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontFamily: Fonts.Regular }}>{Strings.MOBILE}</Text>
              <Text style={{ fontFamily: Fonts.Regular, color: AppColors.BLACK }}>
                {shippingData?.phone}
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ fontFamily: Fonts.Regular }}>
                  {Strings.ADDRESS}
                </Text>
                <View
                  onTouchEnd={openMaps}
                  style={{
                    backgroundColor: AppColors.PRIMARY_LIGHT,
                    // padding: ,
                    height: 30,
                    width: 30,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: AppColors.BORDER_COLOR_2,
                  }}>
                  <FontAwesome
                    name="location-arrow"
                    size={20}
                    color={AppColors.PRIMARY}
                  />
                </View>
              </View>
              <Text style={{ fontFamily: Fonts.Regular, color: AppColors.BLACK }}>
                {shippingData?.address_1}
                {shippingData?.address_1 && ' '}
                {shippingData?.address_2}
                {shippingData?.address_2 && ' '}
                {shippingData?.district}
                {shippingData?.district && ' '}
                {shippingData?.city}
                {shippingData?.city && ' '}
                {shippingData?.postal_code}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ fontFamily: Fonts.Regular }}>
                  {Strings.PAYMENT_STATUS}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.SemiBold,
                    color:
                      orderDetails?.payment_details?.payment_type == 'Online'
                        ? AppColors.GREEN
                        : AppColors.RED,
                  }}>
                  {orderDetails?.payment_status}
                </Text>
              </View>
              <View>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontFamily: Fonts.Regular }}>
                    {Strings.ORDER_STATUS}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Regular,
                      color:
                        orderDetails?.task_status === 'Accepted'
                          ? AppColors.PRIMARY
                          : orderDetails?.task_status === 'Started'
                            ? AppColors.SKYBLUE
                            : orderDetails?.task_status === 'Created'
                              ? AppColors.ORANGE
                              : orderDetails?.task_status === 'Completed'
                                ? AppColors.GREEN
                                : orderDetails?.task_status === 'Rejected'
                                  ? AppColors.RED
                                  : null,
                    }}>
                    {checkStatus(orderDetails?.task_status)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {orderDetails?.order_details_json?.lineitem?.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  borderTopWidth: 1,
                  borderColor: AppColors.BORDER_COLOR_2,
                  paddingTop: 15,
                }}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ height: 60, width: 60 }}
                />
                <View style={{ marginLeft: 10, width: '80%' }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: Fonts.Regular,
                      color: AppColors.BLACK,
                    }}>
                    {item.title}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontFamily: Fonts.Bold,
                        fontSize: 16,
                        color: AppColors.BLACK,
                      }}>
                      ₹{item.unit_price}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.Regular,
                        fontSize: 14,
                        borderLeftWidth: 1,
                        marginLeft: 10,
                        paddingLeft: 10,
                        color: AppColors.BLACK,
                      }}>
                      {Strings.QTY}
                      <Text style={{ fontFamily: Fonts.SemiBold }}>
                        {' '}
                        {item.quantity}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
       
      </ScrollView>

        {orderDetails.task_status === 'Rejected' ||
          orderDetails.task_status === 'Completed' ? null : (
          <View
            style={{
              backgroundColor: AppColors.WHITE,
              position: 'absolute',
              bottom: 0,
              paddingVertical: 30,
              paddingHorizontal: 20,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <PrimaryButtom
              btnHandle={onCanceltHandle}
              btnTitle={Strings.CANCEL}
              customButtonStyle={{
                width: '40%',
                backgroundColor: AppColors.WHITE,
                paddingHorizontal: 10,
              }}
              customButtonText={{
                fontSize: 14,
                fontFamily: Fonts.Regular,
                color: AppColors.BLACK,
              }}
            />
            {!isOrderAccepted && orderDetails?.task_status === 'Created' ? (
              <PrimaryButtom
                btnTitle={Strings.ACCEPT}
                customButtonStyle={{ width: '60%', paddingVertical: 10 }}
                customButtonText={{ fontSize: 16, fontFamily: Fonts.SemiBold }}
                btnIcon={'chevrons-right'}
                btnHandle={onAcceptHandle}
              />
            ) : (
              <PrimaryButtom
                btnTitle={Strings.LOCATION}
                customButtonStyle={{ width: '60%', paddingVertical: 10 }}
                customButtonText={{ fontSize: 16, fontFamily: Fonts.SemiBold }}
                btnIcon={'chevrons-right'}
                btnHandle={handleLocationBtn}
              />
            )}
          </View>
        )}

      {/*Cancel  Modal Start */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.updateHeading__container}>
              <Text style={styles.updateHeading}>{Strings.DECLINEREASON}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign
                  name="close"
                  size={20}
                  style={{ marginBottom: 3 }}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            </View>
            {OrderRejectReasonList.map((reason, i) => (
              <View
                key={i}
                style={styles.reason__container}
                onTouchEnd={() => setSelectedReason(reason)}>
                <View style={styles.circleParent__container}>
                  {selectedReason === reason ? (
                    <View style={styles.selectedCircleOuter}>
                      <View style={styles.selectedCircle} />
                    </View>
                  ) : (
                    <View style={styles.unSelectedCircle} />
                  )}
                </View>
                <Text style={styles.reasonText}>{reason}</Text>
              </View>
            ))}
            <PrimaryButtom
              customButtonStyle={{
                marginTop: 20,
                width: '90%',
                alignSelf: 'center',
                paddingVertical: 10,
              }}
              btnTitle={Strings.CONFIRM}
              customButtonText={{ fontFamily: Fonts.SemiBold, fontSize: 14 }}
              btnHandle={handleConfirmReason}
            />
          </View>
        </View>
      </Modal>

      {/* Cancel Modal End */}

      {/* Accept Modal Start */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={acceptModalVisible}
        onRequestClose={() => {
          setAcceptModalVisible(!acceptModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { alignItems: 'center' }]}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.SemiBold,
                borderBottomWidth: 1,
                width: '100%',
                color: AppColors.BLACK,
                borderBottomColor: AppColors.GREY_4,
                paddingBottom: 5,
                marginBottom: 20,
              }}>
              {Strings.ACCEPT}
            </Text>
            <Feather name="check-circle" size={40} color={AppColors.GREEN} />
            <Text style={styles.confirmationText}>
              {Strings.WANT_TO_ACCEPT}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <PrimaryButton
                btnHandle={handleAcceptNo}
                btnTitle={'No'}
                customButtonStyle={{
                  backgroundColor: AppColors.WHITE,
                  width: '45%',
                  borderWidth: 1,
                  borderColor: AppColors.GREY_4,
                  padding: 10,
                }}
                customButtonText={{
                  color: AppColors.BLACK,
                  fontFamily: Fonts.SemiBold,
                  fontSize: 14,
                }}
              />
              <PrimaryButton
                btnHandle={handleAcceptYes}
                btnTitle={'Yes'}
                customButtonStyle={{ width: '45%', padding: 10 }}
                customButtonText={{
                  fontFamily: Fonts.SemiBold,
                  fontSize: 14,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* Accept Modal End */}
    </>
  );
};

export default OrderDetailsScreen;
