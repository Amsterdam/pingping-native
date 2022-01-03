import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

import sentryHelper from '../helpers/sentryHelper';

export async function doRegisterDevice(
	registerDeviceCallback = () => {},
	exportToken = '',
) {
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
		await AsyncStorage.setItem(
			'@access_token',
			accessToken,
		);
	} catch (error) {
		sentryHelper(error.message);
	}
}

const userStatus = async (
	refetch,
	setUserState,
	setBackEndIssue,
	setSomethingWentWrong,
) => {
	try {
		const token = await AsyncStorage.getItem(
			'@access_token',
		);
		if (token === null) {
			return setUserState('ONBOARDER'); // I AM A NEW USER
		}
		let me = await refetch();
		setBackEndIssue(false); // clear any errors from previous retries
		setSomethingWentWrong(false); // clear any errors from previous retries
		if (me && me.data) {
			if (
				me.data.getStatus.device
					.notificationStatus === 'Initial'
			) {
				return setUserState('ONBOARDER'); // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
			}
			return setUserState('LOGGED_IN'); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
		}
	} catch (error) {
		sentryHelper(error.message);
		if (error.message === 'unauthorized') {
			await AsyncStorage.clear(); // Token is not valid, clear all.
			setUserState('ONBOARDER');
		}
		if (error.message === 'undefined') {
			return setBackEndIssue(true);
		}
		return setSomethingWentWrong(true);
	}
};

export default userStatus;
