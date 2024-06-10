import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DateTimeContainer = ({color}) => {
  return (
    <View style={[styles.main__container, {borderColor: color}]}>
      <AntDesign name={'calendar'} color={color} />
      <Text style={{fontSize: 11, marginHorizontal: 10, color: color}}>
        04 Jan 2024
      </Text>
      <Text style={{fontSize: 11, color: color}}>05:00 PM</Text>
    </View>
  );
};

export default DateTimeContainer;

const styles = StyleSheet.create({
  main__container: {
    marginHorizontal: 10,
    borderWidth: 0.86,
    alignItems: 'center',
    padding: 5.15,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
