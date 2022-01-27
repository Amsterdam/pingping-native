import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Async storage keys:
 * @param @pingpingNative_acceptedPolicy
 * @param @pingpingNative_accessToken
 * @param @pingpingNative_dismissedUpdate
 * @param @pingpingNative_onboardingStatus
 */

export const setAsyncStorage = async (key = '', value = '') => {
	try {
		return await AsyncStorage.setItem(key, value);
	} catch (e) {
		return e;
	}
};

export const getFromAsyncStorage = async (key = '') => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		return e;
	}
};

export const multiSetAsyncStorage = async (pair = ['', '']) => {
	try {
		return await AsyncStorage.multiSet(pair);
	} catch (e) {
		return e;
	}
};

export const multiGetFromAsyncStorage = async (values = ['']) => {
	try {
		return await AsyncStorage.multiGet(values);
	} catch (e) {
		return e;
	}
};

export const clearAsyncStorage = async () => {
	await AsyncStorage.clear();
};
