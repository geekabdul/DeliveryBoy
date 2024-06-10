import React, { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AppColors } from '../../assets/colors/AppColors';
import Strings from '../../locales/Strings';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-switch';
import Header from '../../components/common/Header/Header';
import { AppImage } from '../../assets/images/Index';
import { Fonts } from '../../assets/fonts';
import InputText from '../../components/common/InputText/InputText';
import PrimaryButton from '../../components/common/PrimaryButton/PrimaryButton';
import { AppIcons } from '../../assets/Icons/Index';
import * as APICalls from '../../api/APICalls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';
import ProfileField from '../../components/common/ProfileField/ProfileField';
import { Utility } from '../../util';

const ProfileScreen = props => {
  const navigation = useNavigation();

  //STATE HOOKS
  const [userData, setUserData] = useState(null);
  const [editName, seteditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [galleryModal, setGalleryModal] = useState(false);

  //FUNCTIONS
  const toggleSwitch = () => {
    const params = {
      is_active: userData?.is_active == 1 ? 0 : 1,
    };
    setProfile(params);
    // setIsEnabled(previousState => !previousState);
  };

  const handleYes = async () => {
    await AsyncStorage.removeItem('token');
    setModalVisible(!modalVisible);
    navigation.navigate('LoginScreen');
  };
  const handleNo = () => {
    setModalVisible(!modalVisible);
  };

  const handleEditProfileImage = () => {
    setGalleryModal(true);
  };
  // => TAKE PAYMENT BUTTON
  const openCamera = () => {
    setGalleryModal(false);
    ImagePicker.openCamera({
      cropping: true,
    })
      .then(image => {
        const imageName = image?.path?.split('/').slice(-1)[0];
        const params = {
          files: {
            uri: image?.path,
            type: image?.mime,
            name: imageName,
          },
        };
        setUploadImage(params);
      })
      .catch(error => {
        console.log('Error picking image: ', error);
      });
  };
  const openGallery = () => {
    setGalleryModal(false);
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        const imageName = image?.path?.split('/').slice(-1)[0];
        const params = {
          files: {
            uri: image?.path,
            type: image?.mime,
            name: imageName,
          },
        };
        setUploadImage(params);
      })
      .catch(error => {
        console.log('Error picking image: ', error);
      });
  };

  const handleEditConfirm = () => {
    if (!!editName || !!editPhone) {
      const params = {
        name: editName,
        mobile: editPhone,
      };
      setProfile(params);
    } else {
      console.log('NO CHANGE');
    }
  };
  const setProfile = async params => {
    setLoading(true);
    const userId = userData?.id;
    APICalls.editProfile(onGetSetData, onFailSetData, params, userId, props);
  };
  const onGetSetData = response => {
    setUpdateModalVisible(false);
    getUserDetails();
  };

  const onFailSetData = error => {
    console.log(error, 'error');
    setLoading(false);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    setLoading(true);
    const UserId = JSON.parse(await AsyncStorage.getItem('userDetail'));
    APICalls.userDetails(onGetUserData, onFailUserData, UserId?.id, props);
  };
  const onGetUserData = response => {
    setUserData(response?.data);
    seteditName(response?.data?.name);
    setEditPhone(response?.data?.mobile);
    setLoading(false);
  };

  const onFailUserData = error => {
    console.log(error, 'error');
    setLoading(false);
  };

  const setUploadImage = async params => {
    setLoading(true);
    APICalls.uploadImage(onSuccessUpload, onFailureUpload, params, props);
  };
  const onSuccessUpload = res => {
    Utility.log(res?.data?.uploads[0]?.url, 'Upload Image Sucess');
    const params = {
      image: res?.data?.uploads[0]?.url,
    };
    setProfile(params);
    setLoading(false);
  };
  const onFailureUpload = err => {
    Utility.log(err, 'Upload Image Error');
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header headerTitle={Strings.MY_PROFILE} hideRIghtIcon={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 10,
          flex: 1,
        }}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <View
          style={{
            marginTop: 130,
            backgroundColor: AppColors.WHITE,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              backgroundColor: AppColors.GREY_4,
              position: 'absolute',
              alignSelf: 'center',
              top: -90,
              borderRadius: 999,
              padding: 10,
            }}>
            <Image
              style={{ height: 114.96, width: 114.96, borderRadius: 100 }}
              source={
                userData ? { uri: userData?.image } : AppImage.defaultProfileImage
              }
            />
            <View
              onTouchEnd={handleEditProfileImage}
              style={{
                position: 'absolute',
                right: 5,
                bottom: 10,
                backgroundColor: AppColors.WHITE,
                borderRadius: 999,
                height: 38,
                width: 38,
                elevation: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={AppIcons.camera} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setUpdateModalVisible(true)}
            style={{
              alignSelf: 'flex-end',
              marginTop: 20,
              marginRight: 10,
            }}>
            <Feather name="edit" size={20} />
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <ProfileField label="Name" inputValue={userData?.name} />
            <ProfileField label="Phone" inputValue={userData?.mobile} />
            <ProfileField label="Email" inputValue={userData?.email} />
            <ProfileField
              label="Address"
              inputValue={`${userData?.current_address}, ${userData?.city}, ${userData?.state}`}
            />
            <View style={styles.deliveryStatus__container}>
              <View>
                <Text style={{ fontFamily: Fonts.Regular }}>
                  {Strings.STATUS}
                </Text>
                <Text
                  style={{
                    color: AppColors.BLACK,
                    fontFamily: Fonts.SemiBold,
                    fontSize: 16,
                  }}>
                  {userData?.is_active == 1
                    ? Strings.AVAILABLE
                    : Strings.UNAVAILABLE}
                </Text>
              </View>
              <Switch
                value={userData?.is_active == 1 ? true : false}
                onValueChange={toggleSwitch}
                disabled={false}
                circleSize={17}
                barHeight={22}
                backgroundActive={AppColors.LIGHT_GREEN}
                backgroundInactive={AppColors.ICON}
                circleActiveColor={AppColors.WHITE}
                circleInActiveColor={AppColors.WHITE}
                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                // innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={1.5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={1.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={2.7} // multiplied by the `circleSize` prop to calculate total width of the Switch
                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                circleBorderActiveColor={'white'}
                circleBorderInactiveColor={'white'}
              />
            </View>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
            backgroundColor: AppColors.WHITE,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Regular,
              color: AppColors.BLACK,
            }}>
            {Strings.TOTAL_EARNING}
          </Text>
          <Text
            style={{
              color: AppColors.PRIMARY,
              fontFamily: Fonts.Bold,
              fontSize: 18,
            }}>
            ₹0
          </Text>
        </View> */}

        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 30 }}
          onPress={() => setModalVisible(true)}>
          <Text
            style={{
              color: AppColors.LIGHT_RED,
              fontFamily: Fonts.SemiBold,
            }}>
            {Strings.LOGOUT}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Start */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.ModalHeading}>{Strings.LOGOUT}</Text>
            <Feather name="log-out" size={40} color={AppColors.PRIMARY} />
            <Text style={styles.confirmationText}>
              {Strings.WANT_TO_LOGOUT}
            </Text>
            <View style={styles.YesNO__container}>
              <PrimaryButton
                btnHandle={handleNo}
                btnTitle={'No'}
                customButtonStyle={{
                  backgroundColor: AppColors.WHITE,
                  width: '45%',
                  borderWidth: 1,
                  borderColor: AppColors.GREY_4,
                  padding: 10,
                }}
                customButtonText={{
                  color: AppColors.BLACK,
                  fontFamily: Fonts.SemiBold,
                  fontSize: 14,
                }}
              />
              <PrimaryButton
                btnHandle={handleYes}
                btnTitle={'Yes'}
                customButtonStyle={{ width: '45%', padding: 10 }}
                customButtonText={{
                  // color: AppColors.BLACK,
                  fontFamily: Fonts.SemiBold,
                  fontSize: 14,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal End */}

      {/* Update Modal Start */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={updateModalVisible}
        onRequestClose={() => {
          setUpdateModalVisible(!updateModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.updateHeading__container}>
              <Text style={styles.updateHeading}>{Strings.UPDATE}</Text>
              <TouchableOpacity
                onPress={() => setUpdateModalVisible(!updateModalVisible)}>
                <AntDesign name="close" size={20} color={AppColors.BLACK} />
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
              <InputText
                label="Name"
                inputValue={editName}
                setInputValue={seteditName}
              />
              {/* <InputText
                label="Phone"
                inputValue={editPhone}
                setInputValue={setEditPhone}
              /> */}
            </View>
            <PrimaryButton
              btnHandle={handleEditConfirm}
              btnTitle={'Confirm'}
              customButtonStyle={{ marginTop: 10, padding: 10, width: '90%' }}
            />
          </View>
        </View>
      </Modal>

      {/* Update Modal End */}

      {/* Camera modal */}

      <Modal
        animationType="slide"
        onRequestClose={() => {
          setGalleryModal(false);
        }}
        transparent={true}
        visible={galleryModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{ backgroundColor: 'transparent', flex: 1 }}
            onPress={() => {
              setGalleryModal(false);
            }}
          />
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingBottom: 40,
              paddingTop: 65,
            }}>
            <AntDesign
              name="closesquareo"
              color={AppColors.PRIMARY}
              onPress={() => setGalleryModal(false)}
              size={25}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                padding: 7,
                borderRadius: 30,
              }}
            />
            <TouchableOpacity activeOpacity={0.9} onPress={openCamera}>
              <Image
                source={AppImage.Camera}
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Poppins600,
                  alignSelf: 'center',
                  color: AppColors.PRIMARY,
                }}>
                Open Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={openGallery}>
              <Image
                source={AppImage.Gallery}
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Poppins600,
                  alignSelf: 'center',
                  color: AppColors.PRIMARY,
                }}>
                Open Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProfileScreen;
