import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TaskCard from './component/TaskCard';

const tabData = [
  {
    name: 'All',
    count: '25',
  },
  {
    name: 'Abdul',
    count: '13',
  },
  {
    name: 'Vamsi',
    count: '12',
  },
  {
    name: 'Ravi',
    count: '15',
  },
  {
    name: 'Abdul',
    count: '13',
  },
  {
    name: 'Vamsi',
    count: '12',
  },
  {
    name: 'Ravi',
    count: '15',
  },
];
const PendingTask = () => {
  return (
    <View style={styles.main__container}>
      <View style={{marginVertical: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabData?.map((tab, id) => (
            <View key={id} style={styles.tab__container}>
              <Text>{tab.count}</Text>
              <Text>{tab.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 170}}
          showsVerticalScrollIndicator={false}>
          {Array.from({length: 20}).map((_, id) => (
            <TaskCard />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PendingTask;

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  main__container: {
    padding: 10,
  },
  tab__container: {
    backgroundColor: 'white',
    marginRight: 10,
    width: width / 4,
    height: width / 7,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
  container: {paddingHorizontal: 10},
});
