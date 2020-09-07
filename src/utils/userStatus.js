import AsyncStorage from '@react-native-community/async-storage';
import registerDeviceHelper from './registerDevice';

export default async function userStatus(
  registerDevice,
  data,
  error,
  loading,
  setLogin,
) {
  const token = await AsyncStorage.getItem('@access_token'); // GET ACCESS TOKEN
  if (!token && !loading) {
    console.log('GETTING TOKEN');
    return await registerDeviceHelper(registerDevice); // REGISTER DEVICE IF THERE IS NO TOKEN
  }
  if (!data && error) {
    console.log('My token is invalid or not linked to user');
    return registerDeviceHelper(registerDevice); // IF I HAVE A TOKEN BUT IT IS NOT CORRECT, GET A NEW ONE
  }
  if (data && data.getStatus && !error && !loading) {
    if (
      data.getStatus.currentTask ||
      data.getStatus.device.notificationStatus === 'Initial'
    ) {
      console.log('I AM LOGGED IN AND NEED TO GO TO ONBOARDING');
      return; // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
    }

    return setLogin(); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
  }
}
