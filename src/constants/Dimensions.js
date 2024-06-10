import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
//Width & Height

export const PhoneDimensions = {
  window_width: width,
  window_height: height,
};

export const checkStatus = item => {
  if (item == 'Accepted') {
    return 'Accepted';
  } else if (item === 'Started') {
    return 'Started';
  } else if (item == 'Created') {
    return 'Pending';
  } else if (item == 'Rejected') {
    return 'Cancel';
  } else if (item == 'Completed') {
    return 'Completed';
  }
};

export const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};
