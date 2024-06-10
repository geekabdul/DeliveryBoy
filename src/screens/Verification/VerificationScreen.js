import React, {useRef, useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

//STRING IMPORTS
import Strings from '../../locales/Strings';

//COMMON_COMPONENTS IMPORTS
import MainContainer from '../../components/common/Container/MainContainer';
import BackHeader from '../../components/common/BackHeader/BackHeader';
import PrimaryButtom from '../../components/common/PrimaryButton/PrimaryButton';
import styles from './styles';
import {AppColors} from '../../assets/colors/AppColors';
// import OtpInputs from 'react-native-otp-inputs';
import OTPTextInput from 'react-native-otp-textinput';

//PACKAGES IMPORTS
import {useNavigation, useRoute} from '@react-navigation/native';
import {Fonts} from '../../assets/fonts';
import {AppImage} from '../../assets/images/Index';
import {Utility} from '../../util';
import * as APICalls from '../../api/APICalls';

const VerificationScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params;
  let otpInput = useRef(null);
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1);

  const handleVerify = () => {
    if (otp?.length < 4 || otp === null) {
      Utility.showToast('Please Enter OTP');
    } else {
      verifyOTP();
      // ToastAndroid.show('Order delivered successfully', ToastAndroid.LONG);
      // navigation.navigate('DashboardScreen');
      // onVerifiedReturn();
    }
  };

  const handleCodeChange = code => {
    setOtp(code);
  };

  // Formatting the time
  const formatTime = () => {
    let minutes = Math.floor(timeLeft / 60); // Since it's a 1-minute timer, it will be either 1 or 0
    let seconds = timeLeft % 60;

    // Adding leading zero to seconds if less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const verifyOTP = async () => {
    const params = {
      otp: otp,
      task_id: data?.id,
    };
    APICalls.verifyDeliveredOTP(onSuccessVerified, onFailuerVerifyOTP, params);
  };
  const onSuccessVerified = async res => {
    Utility.showToast(res?.data?.message);
    navigation.navigate('DashboardScreen');
  };
  const onFailuerVerifyOTP = err => {
    Utility.showToast(err?.message);
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
    otpInput.clear();
    setTimeLeft(1);
    // navigation.navigate('VerificationScreen', {data});
  };

  const onFailureSendOTP = error => {
    Utility.log('onFailureSendOTP===> ', error);
    Utility.showToast(error?.message);
  };
  return (
    <>
      <BackHeader headerTitle={Strings.VERIFICATION} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            margin: 20,
            alignItems: 'center',
            backgroundColor: AppColors.WHITE,
            borderRadius: 20,
          }}>
          <View
            style={{alignItems: 'center', marginTop: 40, marginVertical: 20}}>
            <Image source={AppImage.Verification} />
          </View>
          <View style={styles.heading__container}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontFamily: Fonts.Bold,
                marginVertical: 20,
                color: AppColors.BLACK,
              }}>
              {Strings.ENTER_CODE}
            </Text>
            <Text style={styles.sendOtpNote__container}>
              {Strings.SEND_OTP_NOTE}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                color: AppColors.BLACK,
                textAlign: 'center',
              }}>
              +91 {data?.customer_details_json?.phone}
            </Text>
          </View>
          <OTPTextInput
            ref={e => (otpInput = e)}
            handleTextChange={handleCodeChange}
            tintColor={AppColors.PRIMARY}
            textInputStyle={styles.otp__Input}
            containerStyle={styles.otp__container}
            autoFocus={true}
          />
          <PrimaryButtom
            btnTitle={Strings.VERIFY}
            btnHandle={handleVerify}
            customButtonStyle={{
              width: '90%',
              alignItems: 'center',
              paddingVertical: 10,
              marginVertical: 20,
            }}
            customButtonText={{fontFamily: Fonts.SemiBold, fontSize: 16}}
          />
          <View style={{marginBottom: 60}}>
            {timeLeft > 0 ? (
              <Text
                style={{
                  color: AppColors.TEXTCOLOR__SECONDARY,
                  fontFamily: Fonts.Regular,
                }}>
                {Strings.RESEND_CODE}{' '}
                <Text style={{color: AppColors.PRIMARY}}>{formatTime()}</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={sendOTP}>
                <Text
                  style={{
                    color: AppColors.PRIMARY,
                    fontFamily: Fonts.SemiBold,
                  }}>
                  {Strings.RESEND_CODE}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default VerificationScreen;
