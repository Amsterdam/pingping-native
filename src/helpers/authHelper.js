import DeviceInfo from 'react-native-device-info';

import { clearAsyncStorage, getFromAsyncStorage, setAsyncStorage } from './asyncStorageHelpers';
import sentryHelper from './sentryHelper';

import { asyncStorageKeys, ERROR_TYPES, USER_STATES } from '../config/constants';

export async function doRegisterDevice(registerDeviceCallback = () => {}, exportToken = '') {
	try {
		const deviceId = DeviceInfo.getUniqueId();
		const deviceType = DeviceInfo.getDeviceType();
		const deviceOs = await DeviceInfo.getSystemName();
		const {
			data: {
				registerDevice: { accessToken },
			},
		} = await registerDeviceCallback({
			variables: {
				deviceId,
				deviceType,
				deviceOs,
				exportToken,
			},
		});
		await setAsyncStorage(asyncStorageKeys.accessToken, accessToken);
	} catch (error) {
		sentryHelper(error.message);
	}
}

const userStatus = async (refetch, setUserState, setBootIssue) => {
	try {
		const token = await getFromAsyncStorage(asyncStorageKeys.accessToken);
		if (token === null) {
			return setUserState(USER_STATES.onboarder); // I AM A NEW USER
		}
		const me = await refetch();
		setBootIssue(''); // clear any errors from previous retries
		if (me && me.data) {
			if (me.data.getStatus.device.notificationStatus === 'Initial') {
				return setUserState(USER_STATES.onboarder); // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
			}
			return setUserState(USER_STATES.loggedIn); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
		}
		return true;
	} catch (error) {
		sentryHelper(error.message);
		if (error.message === 'unauthorized') {
			await clearAsyncStorage(); // Token is not valid, clear all.
			return setUserState(USER_STATES.onboarder);
		}
		if (error.message === 'undefined' || error.message.includes('Unrecognized token')) {
			return setBootIssue(ERROR_TYPES.backendError);
		}
		return setBootIssue(ERROR_TYPES.networkError);
	}
};

export default userStatus;
