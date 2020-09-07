import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

async function doRegisterDevice(registerDeviceCallback) {
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

export default async function userStatus(
  registerDevice,
  data,
  error,
  loading,
  setLogin,
  setOnboarder,
) {
  const token = await AsyncStorage.getItem('@access_token'); // GET ACCESS TOKEN
  if (!data && error) {
    console.log('My token is invalid or not linked to user');
    setOnboarder(true);
    return await doRegisterDevice(registerDevice); // IF I HAVE A TOKEN BUT IT IS NOT CORRECT, GET A NEW ONE
  }
  if (!token && !loading) {
    console.log('GETTING TOKEN');
    return await doRegisterDevice(registerDevice); // REGISTER DEVICE IF THERE IS NO TOKEN
  }
  if (data && data.getStatus && !error && !loading) {
    if (
      data.getStatus.currentTask ||
      data.getStatus.device.notificationStatus === 'Initial'
    ) {
      console.log('I AM LOGGED IN AND NEED TO GO TO ONBOARDING');
      setOnboarder(true);
      return; // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
    }

    return setLogin(); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
  }
}
