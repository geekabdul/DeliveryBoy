import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LeadDetailPage = () => {
  return (
    <View style={styles.main__container}>
      <View></View>
    </View>
  );
};

export default LeadDetailPage;

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  main__container: {
    padding: 10,
  },
});
