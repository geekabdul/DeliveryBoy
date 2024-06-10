import { Alert, Linking, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constants, Utility } from '.';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import { CURRENT_CITY, MapKey } from './Constants';
import Strings from '../locales/Strings';

export function log() {
  if (true) {
    console.log(...arguments);
  }
}

export function showToast(message) {
  if (message) {
    Toast.show(message, Toast.LONG);
  }
}

export async function getNetInfo() {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
}

export function showNoInternetDialog() {
  Alert.alert(
    Strings.NO_INTERNET,
    Strings.NO_INTERNET_MESSAGE,
    [
      {
        text: 'OK',
        onPress: () => { },
      },
    ],
    { cancelable: true },
  );
}

export function validateEmail(value) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(value) !== false;
}

export function validatePhoneNumber(value) {
  let reg = /^[6-9]\d{9}$/;
  return reg.test(value) !== false;
}

export function validateName(value) {
  let reg = /^[a-zA-Z ]{3,50}$/;
  return reg.test(value) !== false;
}

export function onlyNumeric(text) {
  return text.replace(/[^0-9]/g, '');
}

export function onlyAlphaNumeric(text) {
  return text.replace(/[^0-9a-zA-Z_ ]/g, '');
}

export function isValueNullOrEmpty(value) {
  // log("isValueNullOrEmpty==>" + value)
  let isValue = false;
  if (
    value === undefined ||
    value == null ||
    value === '' ||
    value === '.' ||
    value === 'null' ||
    value == 0
  ) {
    isValue = true;
  }
  return isValue;
}

export function openExternalUrl(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        showToast(Strings.PROVIDED_URL_CAN_NOT_BE_OPENED);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => log('An error occurred==>', err));
}

export function callNumber(mobileNo) {
  log('cal===> ', mobileNo);
  let callingUrl = 'tel:' + mobileNo;

  Linking.canOpenURL(callingUrl)
    .then(supported => {
      if (!supported) {
        showToast("Can't handle url: " + callingUrl);
      } else {
        return Linking.openURL(callingUrl);
      }
    })
    .catch(err => log('An error occurred', err));
}

export function convertImageToBase64(image) {
  // return new Promise(resolve => {
  //   RNFetchBlob.fetch('GET', image)
  //     .then(res => {
  //       resolve(res.data);
  //     })
  //     .catch((errorMessage, statusCode) => {
  //       // error handling
  //       // log('statusCode==>', statusCode)
  //     });
  // });
}

export async function getCurrentLocation() {
  Geolocation.getCurrentPosition(
    position => {
      let location = {
        lat: JSON.stringify(position?.coords?.latitude),
        long: JSON.stringify(position?.coords?.longitude),
      };
      log('location==>', location);

      AsyncStorage.setItem(Constants.LOCATION, JSON.stringify(location));
      getCountry(location);
    },
    async error => {
      if (error.message == 'No location provider available.') {
        // await getCurrentLocation();
      }
    },
    {
      enableHighAccuracy: false,
      timeout: 30000,
      maximumAge: 1000,
    },
  );
}

export async function getCountry(loc) {
  const API_KEY = MapKey;
  const LATITUDE = loc?.lat;
  const LONGITUDE = loc?.long;
  await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LATITUDE},${LONGITUDE}&key=${API_KEY}`,
  )
    .then(response => response.json())
    .then(async data => {
      const locationName = data?.results[0]?.address_components;
      const findCity = locationName.find(item => {
        if (item?.types[0] == 'administrative_area_level_3') {
          return item;
        } else if (item?.types[0] == 'administrative_area_level_2') {
          return item;
        } else {
          return;
        }
      });
      if (!!findCity) {
        await AsyncStorage.setItem(CURRENT_CITY, findCity?.long_name);
      }
    })
    .catch(error => console.error('error of country', error));
}

export async function sendEvent(eventType, eventParams) {
  // if (!BaseURL2.includes('fabindiaofficial')) {
  const currency = await AsyncStorage.getItem('currency');
  const token = await AsyncStorage.getItem('generatToken');
  const parseToken = JSON.parse(token);
  const location = await AsyncStorage.getItem('current_location');
  let parselocation = JSON.parse(location);
  // const time = moment().format();

  let Obj = {
    // user_id: parseToken?.access_token,
    Device_type: Platform.OS,
    // Device_version: DeviceInfo.getSystemVersion(),
    // app_version: DeviceInfo.getVersion(),
    location: parselocation,
    timestamp: time,
    Currency: currency,
  };
  if (await isLogin()) {
    let userDetail = await AsyncStorage.getItem('userData');
    userDetail = JSON.parse(userDetail);
    Obj.contactNumber = userDetail?.contactNumber;
    Obj.email = userDetail?.uid;
    Obj.userId = userDetail?.name;
  }

  let newObj = Object.assign(Obj, eventParams);
  await analytics().logEvent(eventType, newObj);
}

export async function isUserLogined() {
  var value = await AsyncStorage.getItem(Constants.ACCESS_TOKEN);
  // log('access_token===>', value)

  if (value) {
    return true;
  }
  return false;
}

export const navigationController = (data, props) => {
  if (data.screen_type === 'plp') {
    props.navigation.navigate('ProductList');
  } else if (data.screen_type === 'pdp') {
    props.navigation.navigate('ProductDetail');
  } else {
    Utility.Toast('page Not Found!!');
  }
};

export const setAsyncStorage = async (key, data) => {
  await AsyncStorage.setItem(key, data?.token);
};
export const GetAuthToken = async key => {
  const AsyncStorageResponse = await AsyncStorage.getItem(key);
  if (AsyncStorageResponse !== null) return AsyncStorageResponse;
};
