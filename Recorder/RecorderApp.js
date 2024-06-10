import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeadDetailPage from './LeadDetailPage';
import PendingTask from './PendingTask';
import TaskDetail from './TaskDetail';

const RecorderApp = () => {
  return (
    <>
      {/* <LeadDetailPage /> */}
      <PendingTask />
      {/* <TaskDetail /> */}
    </>
  );
};

export default RecorderApp;

const styles = StyleSheet.create({});
