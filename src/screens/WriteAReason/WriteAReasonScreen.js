import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

//STRING IMPORTS
import Strings from '../../locales/Strings';

//COMMON_COMPONENTS IMPORTS
import MainContainer from '../../components/common/Container/MainContainer';
import BackHeader from '../../components/common/BackHeader/BackHeader';
import PrimaryButtom from '../../components/common/PrimaryButton/PrimaryButton';
import * as APICalls from '../../api/APICalls';

//PACKAGES IMPORTS
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const WriteAReasonScreen = (props) => {
  const orderId = props?.route?.params?.orderId
  const [value, onChangeText] = React.useState('');

  const handleSend = async (type) => {
    const params = {
      "task_status": type, // Started // Accepted // Rejected
      "reason": value
    }
    APICalls.updateTaskStatus(onGetUpdate, onFailUpdate, params, orderId, props);
  };
  const onGetUpdate = response => {
    props.navigation.navigate('DashboardScreen')
  };

  const onFailUpdate = error => {
    Utility.log('onFailureSendOTP===> ', JSON.stringify(error));
  };

  return (
    <MainContainer>
      <BackHeader headerTitle={Strings.WRITE_A_REASON} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          editable
          multiline
          numberOfLines={10}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Write a Reason For Rejection"
        />
      </View>
      <View style={styles.button__container}>
        <PrimaryButtom btnTitle={Strings.SEND} btnHandle={() => handleSend("Rejected")} />
      </View>
    </MainContainer>
  );
};

export default WriteAReasonScreen;
