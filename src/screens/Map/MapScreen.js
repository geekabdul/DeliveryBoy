import {
  View,
  Text,
  Image,
  PermissionsAndroid,
  Modal,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, Polyline, Circle} from 'react-native-maps';
import Strings from '../../locales/Strings';
import PrimaryButtom from '../../components/common/PrimaryButton/PrimaryButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {AppColors} from '../../assets/colors/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import Geolocation from 'react-native-geolocation-service';
import {Fonts} from '../../assets/fonts';
import * as APICalls from '../../api/APICalls';
import Loading from '../../components/Loading/Loading';
import MapViewDirections from 'react-native-maps-directions';
import {AppIcons} from '../../assets/Icons/Index';
import {Utility} from '../../util';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getDistance} from '../../constants/Dimensions';
import {showToast} from '../../util/Utility';

const customerLatLong = {
  latitude: 26.9239,
  longitude: 75.8267,
};

const OrderRejectReasonList = [Strings.RESCHEDULE_ORDER, Strings.CANCEL_ORDER];
const MapScreen = props => {
  const orderId = props?.route?.params?.orderId;
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params;

  //STATE HOOKS
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [isStart, setIsStart] = useState(false);
  const [mLatLong, setMLatLong] = useState(null);
  // const [distance, setDistance] = useState(0);
  const customerLatLong = {
    latitude: 26.9239,
    longitude: 75.8267,
  };

  // const coordinates = [
  //   {
  //     latitude: 26.91137579529856,
  //     longitude: 75.73841960536062,
  //   },
  //   {latitude: 26.911627642976562, longitude: 75.74382825640134},
  //   {latitude: 26.911474571448508, longitude: 75.75296922482688},
  //   {latitude: 26.921041142988503, longitude: 75.75451417723684},
  //   {latitude: 26.915760495768257, longitude: 75.77356859029295},
  //   {latitude: 26.923977800064108, longitude: 75.82675551479252},
  //   // ... add your other coordinates here
  // ];
  const handleStartBtn = () => {
    updateTask('Started');
  };

  const handleCancel = () => {
    setModalVisible(true);
  };
  const handleDelivered = () => {
    sendOTP();
    // navigation.navigate('VerificationScreen');
  };

  const handleConfirmReason = () => {
    if (selectedReason) {
      setModalVisible(false);
      setSelectedReason('');
      if (selectedReason === Strings.CANCEL_ORDER) {
        navigation.navigate('WriteAReasonScreen', {orderId: orderId});
      } else {
        updateTask('Deferred');
      }
    } else {
      Utility.showToast('Please select any Reason');
    }
  };

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        getCurrentLocation();
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  //FUNCTION FOR GET CURRENT LOCATION
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setMLatLong(position.coords);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const handlePhoneIcon = phone => {
    Linking.openURL(`tel:${phone}`);
  };

  useEffect(() => {
    requestLocationPermission();
    // getCurrentLocation();
  }, []);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        setMLatLong(position.coords);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10, // Minimum distance for an update in meters
        interval: 5000, // Interval between updates in milliseconds
        fastestInterval: 2000, // Maximum time that can pass without an update in milliseconds
      },
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  // useEffect(() => {
  //   if (mLatLong) {
  //     if (currentIndex < coordinates.length - 1) {
  //       const timer = setTimeout(() => {
  //         setCurrentIndex(currentIndex + 1);
  //       }, 1000);

  //       return () => clearTimeout(timer);
  //     }
  //   }
  // }, [currentIndex, coordinates.length, mLatLong]);

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
    if (response?.data?.task_status == 'Deferred') {
      props.navigation.navigate('DashboardScreen');
    } else if (response?.data?.task_status == 'Started') {
      setIsStart(true);
    }
  };

  const onFailUpdate = error => {
    console.log(error, 'error');
  };

  const sendOTP = async () => {
    const param = {
      task_id: data?.id,
    };
    APICalls.sendDeliveredOTP(onSuccessSentOTP, onFailureSendOTP, param, props);
  };

  const onSuccessSentOTP = response => {
    Utility.log('onSuccessSendOTP===>', response?.data?.message);
    Utility.showToast(response?.data?.message);
    navigation.navigate('VerificationScreen', {data});
  };

  const onFailureSendOTP = error => {
    Utility.log('onFailureSendOTP===> ', error);
    Utility.showToast(error?.message);
  };

  // if (mLatLong) {
  //   const total_distance = getDistance(
  //     customerLatLong?.latitude,
  //     customerLatLong?.longitude,
  //     mLatLong?.latitude,
  //     mLatLong?.longitude,
  //   );
  //   setDistance(total_distance);
  //   console.log(total_distance, 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
  // }
  const loctionnotFound = () => {
    showToast('Location not found please try some time later');
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          region={
            !isStart && !mLatLong
              ? {
                  ...customerLatLong,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }
              : {
                  latitude: mLatLong?.latitude,
                  longitude: mLatLong?.longitude,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }
          }
          style={styles.mapView__container}>
          {mLatLong ? (
            <>
              <Marker
                coordinate={{
                  latitude: mLatLong.latitude,
                  longitude: mLatLong.longitude,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }}>
                <Image source={AppIcons.bike} style={styles.mapMarker} />
              </Marker>
              {/* <Polyline
              coordinates={[
                {
                  latitude: mLatLong.latitude,
                  longitude: mLatLong.longitude,
                },
                {
                  latitude: Number(data?.order_details_json?.shipping_details?.lat),
                  longitude: Number(data?.order_details_json?.shipping_details?.long),
                },
              ]}
              strokeWidth={4}
              strokeColor="blue"
              zIndex={-1}
            /> */}
              <MapViewDirections
                origin={
                  !!mLatLong
                    ? {
                        latitude: mLatLong.latitude,
                        longitude: mLatLong.longitude,
                      }
                    : {
                        ...customerLatLong,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                      }
                }
                destination={{
                  latitude: 26.9239,
                  longitude: 75.8267,
                }}
                apikey={'AIzaSyBmniloMXEznkrAL6k0VfoFsJJFAfcRBgg'} // insert your API Key here
                strokeWidth={4}
                strokeColor="grey"
              />

              {/* <MapViewDirections
              origin={{
                latitude: mLatLong.latitude,
                longitude: mLatLong.longitude,
              }}
              destination={{
                latitude: 26.9239,
                longitude: 75.8267,
              }}
              apikey={'AIzaSyBS6wj4axmVRuhmrGy-f-ioM2IhBIiTZ64'}
            /> */}
            </>
          ) : null}

          <Marker
            coordinate={{
              latitude: 26.9239,
              longitude: 75.8267,
            }}>
            <Image
              source={require('../../assets/images/MapMarkerIcon.png')}
              style={styles.mapMarker}
            />
          </Marker>
        </MapView>

        <View style={styles.locationDistanceTime__container}>
          <View style={styles.phone__container}>
            <TouchableOpacity
              onPress={() =>
                handlePhoneIcon(data?.customer_details_json?.phone)
              }>
              <Feather name="phone" color={AppColors.WHITE} size={25} />
            </TouchableOpacity>
          </View>
          {!isStart ? (
            <>
              <View>
                <Text style={styles.locationDistanceText}>
                  <Text style={styles.locationTimeText}>30 Min </Text>(5.4 Km)
                </Text>
                <Text style={styles.locationDistanceTime__msg}>
                  Fastest route now due to traffic conditions
                </Text>
              </View>

              <View style={styles.bottomButtons__container}>
                {!mLatLong ? (
                  <ActivityIndicator size="large" color={AppColors.PRIMARY} />
                ) : (
                  <PrimaryButtom
                    btnTitle={Strings.START}
                    btnHandle={handleStartBtn}
                    customButtonStyle={{paddingVertical: 10}}
                    customButtonText={{
                      fontSize: 16,
                      fontFamily: Fonts.SemiBold,
                    }}
                    btnIcon={'chevrons-right'}
                  />
                )}
              </View>
            </>
          ) : (
            <>
              <View style={styles.arrivingAtLocation__container}>
                <Text style={styles.arrivingAtText}>{Strings.ARRIVING_AT}</Text>
                <Text style={styles.LocationText}>{Strings.LOCATION}</Text>
                <Text numberOfLines={3} style={styles.excatLocationText}>
                  {data?.order_details_json?.shipping_details?.address_1}{' '}
                  {data?.order_details_json?.shipping_details?.address_2}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PrimaryButtom
                  btnHandle={handleCancel}
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
                <PrimaryButtom
                  btnTitle={Strings.DELIVERED}
                  customButtonStyle={{width: '60%', paddingVertical: 10}}
                  customButtonText={{fontSize: 16, fontFamily: Fonts.SemiBold}}
                  btnIcon={'chevrons-right'}
                  btnHandle={handleDelivered}
                />
              </View>
            </>
          )}
        </View>
      </View>

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
                  style={{marginBottom: 3}}
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
              customButtonText={{fontFamily: Fonts.SemiBold, fontSize: 14}}
              btnHandle={handleConfirmReason}
            />
          </View>
        </View>
      </Modal>

      {/* Cancel Modal End */}
    </>
  );
};

export default MapScreen;
