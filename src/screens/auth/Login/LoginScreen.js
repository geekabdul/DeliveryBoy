import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import * as APICalls from '../../../api/APICalls';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTS NAVIGATION
import { useNavigation } from '@react-navigation/native';

// IMPORTS ASSETS
import Strings from '../../../locales/Strings';

// IMPORTS COMPONENTS
import PrimaryButton from '../../../components/common/PrimaryButton/PrimaryButton';
import { AppColors } from '../../../assets/colors/AppColors';
import { PhoneDimensions } from '../../../constants/Dimensions';
import { AppImage } from '../../../assets/images/Index';
import Input from '../../../components/common/Input/Input';
import { Utility } from '../../../util';
import { Fonts } from '../../../assets/fonts';

const LoginScreen = props => {
  const navigation = useNavigation();

  const [emailPhone, setEmailPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [checkemailPhone, setcheckemailPhone] = useState(null);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showResend, setShowResend] = useState(false)

  const handleLoginBtn = () => {
    verifyOTP();
    // navigation.navigate('BottomTabs');
  };
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phonePattern = /^[0-9]{8,}$/;

  const Verify = async () => {
    if (emailPattern.test(emailPhone)) {
      setcheckemailPhone('Email');
    } else if (phonePattern.test(emailPhone)) {
      setcheckemailPhone('Phone');
      sendOtp();
    } else {
      Utility.showToast('Please Enter Correct Email Or Phone Number');
      console.log('error');
      setShowResend(false)
    }
  };

  //API CALLS

  const sendOtp = async () => {
    const params = {
      mobile: emailPhone,
    };
    APICalls.sendOTP(onSuccessSentOTP, onFailureSendOTP, params, props);
  };

  const onSuccessSentOTP = response => {
    Utility.log('onSuccessSendOTP===>', response?.data?.message);
    setShowResend(true)
    startTimer()
    Utility.showToast(response?.data?.message);
  };

  const onFailureSendOTP = error => {
    Utility.log('onFailureSendOTP===> ', error);
    Utility.showToast(error?.message);
  };

  const verifyOTP = async () => {
    const params = {
      mobile: emailPhone,
      otp: Password,
    };
    APICalls.verifyOTP(onSuccessVerified, onFailuerVerifyOTP, params);
  };
  const onSuccessVerified = async res => {
    const authToken = res?.data?.token;
    const userDetail = res?.data?.data;
    try {
      await AsyncStorage.setItem('token', authToken);
      await AsyncStorage.setItem('userDetail', JSON.stringify(userDetail));

      Utility.log('onSuccessVerifyOTP===>', res?.data?.message);
      Utility.showToast(res?.data?.message);
      setEmailPhone('');
      setPassword('');
      setcheckemailPhone(null);
      navigation.navigate('BottomTabs');
      
    } catch (error) {
      Utility.log('Error saving token:', error);
    }
  };
  const onFailuerVerifyOTP = err => {
    Utility.log('onFailureVerifyOTP===> ', err);
    Utility.showToast(err?.message);
  };

  const startTimer = () => {
    clearInterval(timer);
    setTimeLeft(20);
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 0) {
          clearInterval(intervalId);
          setTimer(null);
          return 0;
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);
    setTimer(intervalId);
  };
  return (
    <ScrollView
      style={styles.main__container}
      showsVerticalScrollIndicator={false}>
      <Image
        source={AppImage.appIcon}
        style={styles.appImage}
      />
      <Text style={styles.loginText}>{Strings.LOGIN}</Text>
      <Text style={styles.loginMessage}>{Strings.LOGIN_MESSAGE}</Text>
      <View style={styles.inputMain__containet}>
        <Input
          placeholder={Strings.EMAIL_PHONE}
          inputValue={emailPhone}
          keyboardType="numeric"
          maxLength={10}
          setInputValue={val => {
            setEmailPhone(val);
            setcheckemailPhone(null);
            setShowResend(false)
          }}
          onSubmitEditing={Verify}
        />
        {checkemailPhone === 'Email' ? (
          <Input
            iconName={'eye'}
            placeholder={Strings.PASSWORD}
            inputValue={Password}
            setInputValue={setPassword}
            isSecureText={true}
          />
        ) : checkemailPhone === 'Phone' ? (
          <View>
            <Input
              placeholder={Strings.ENTER_OTP}
              inputValue={Password}
              setInputValue={setPassword}
              maxLength={4}
              keyboardType="numeric"
              onSubmitEditing={handleLoginBtn}
            />
            {showResend ?
              timeLeft > 0 ? (
                <Text
                  style={{
                    color: AppColors.TEXTCOLOR__SECONDARY,
                    fontFamily: Fonts.Regular,
                    marginLeft: 10
                  }}>
                  {Strings.RESEND_CODE}in{' '}
                  <Text style={{ color: AppColors.PRIMARY }}>{timeLeft}</Text>
                </Text>
              ) : (
                <TouchableOpacity onPress={() => {
                  if (timeLeft == 0) {
                    Verify()
                  }
                }}>
                  <Text
                    style={{
                      color: AppColors.PRIMARY,
                      fontFamily: Fonts.SemiBold,
                      marginLeft: 10
                    }}>
                    {Strings.RESEND_CODE}
                  </Text>
                </TouchableOpacity>
              )
              : null}
          </View>
        ) : null}
      </View>
      <View>
        {!checkemailPhone || !emailPhone ? (
          <PrimaryButton
            btnTitle={Strings.VERIFY}
            btnHandle={Verify}
            isbtnDisabled={!emailPhone ? true : false}
          />
        ) : (
          <PrimaryButton
            btnTitle={Strings.LOGIN}
            btnHandle={handleLoginBtn}
            isbtnDisabled={
              checkemailPhone === 'Phone'
                ? Password.length !== 4
                  ? true
                  : false
                : null
            }
          />
        )}
      </View>
      <View style={styles.bottomImage__container}>
        <Text style={styles.poweredByText}>{Strings.POWERED_BY}</Text>
        <Image source={AppImage.flipShop} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
