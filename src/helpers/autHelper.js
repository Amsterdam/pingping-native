import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

export async function doRegisterDevice(registerDeviceCallback) {
  try {
    const deviceId = DeviceInfo.getUniqueId();
    const deviceType = DeviceInfo.getDeviceType();
    const deviceOs = await DeviceInfo.getSystemName();
    const {
      data: {
        registerDevice: {
          accessToken,
          user: {id},
        },
      },
    } = await registerDeviceCallback({
      variables: {
        deviceId,
        deviceType,
        deviceOs,
      },
    });
    await AsyncStorage.setItem('@access_token', accessToken);
    const items = [
      ['@access_token', accessToken],
      ['@userId', id],
    ];
    return AsyncStorage.multiSet(items);
  } catch (error) {
    console.log({error});
  }
}

const userStatus = async (refetch, setLoggedIn, setOnboarder) => {
  try {
    const me = await refetch();
    if (me && me.data) {
      if (me.data.getStatus.device.notificationStatus === 'Initial') {
        console.log('I AM LOGGED IN AND NEED TO GO TO ONBOARDING');
        return setOnboarder(true); // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
      }
      return setLoggedIn(true); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
    }
    setOnboarder(true);
  } catch (e) {
    console.log({e});
    setOnboarder(true);
  }
};

export default userStatus;
