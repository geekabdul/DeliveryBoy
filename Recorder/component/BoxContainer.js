import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BoxContainer = ({title, color, customContainerStyle, type}) => {
  return (
    <View
      style={[
        styles.main__container,
        type === 'Outlined'
          ? {borderColor: color, borderWidth: 0.86}
          : type === 'Filled'
          ? {backgroundColor: color}
          : null,
        customContainerStyle,
      ]}>
      <Text
        style={[
          styles.title,
          {
            color:
              type === 'Outlined' ? color : type === 'Filled' ? 'white' : null,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default BoxContainer;

const styles = StyleSheet.create({
  main__container: {
    alignItems: 'center',
    paddingVertical: 5.15,
    borderRadius: 5,
  },
  title: {
    paddingHorizontal: 12,
    fontWeight: '600',
    fontSize: 10.31,
  },
});
