import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

export default async function registerDevice(registerDeviceCallback) {
  console.log('doin');
  try {
    const deviceId = DeviceInfo.getUniqueId();
    const deviceType = DeviceInfo.getDeviceType();
    const deviceOs = await DeviceInfo.getSystemName();
    // const deviceToken = await DeviceInfo.getDeviceToken();
    // add devicetoken for push notifications
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
    console.log(error);
  }
}
