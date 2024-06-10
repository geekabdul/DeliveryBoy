import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BoxContainer from './BoxContainer';
import DateTimeContainer from './DateTimeContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppImage} from '../../src/assets/images/Index';

export default function TaskCard() {
  return (
    <View style={styles.main__container}>
      <Text style={{color: '#2A47AA', fontSize: 12, fontWeight: '600'}}>
        SMS Template for Payment Reminder etc
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <BoxContainer title={'High'} color={'#FF002E'} type={'Outlined'} />
        <DateTimeContainer color={'#BF0000'} type={'Outlined'} />
        <BoxContainer title={'Pending'} color={'#FF2E00'} type={'Filled'} />
      </View>
      <Text>Created at: 04 Jan 2024, 05:39:09 pm</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <MaterialCommunityIcons name="message-text-outline" size={18} />
          <Text style={{marginLeft: 15}}>Replies</Text>
        </View>

        <Text style={{marginLeft: 20}}>0/3 Checklist</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={AppImage.defaultProfileImage}
            style={{height: 30, width: 30}}
          />
          <Text style={{marginLeft: 5}}>Abdul Rahman</Text>
        </View>
        <Image
          source={require('./Vector.png')}
          style={{marginHorizontal: 10}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={AppImage.defaultProfileImage}
            style={{height: 30, width: 30}}
          />
          <Text style={{marginLeft: 5}}>Dilip Kumar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main__container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
