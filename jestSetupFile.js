import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockGesture from 'react-native-gesture-handler/jestSetup';
import mockPermissions from 'react-native-permissions/mock';

jest.mock(
	'@react-native-community/netinfo',
	() => mockRNCNetInfo,
);

jest.mock('react-native-qrcode-scanner', () =>
	jest.fn(),
);
jest.mock(
	'react-native-permissions',
	() => mockPermissions,
);
jest.mock(
	'@react-native-community/async-storage',
	() => mockAsyncStorage,
);
jest.mock(
	'react-native-gesture-handler',
	() => mockGesture,
);
jest.mock('react-native-device-info', () => ({
		getModel: jest.fn(),
	}));

jest.mock('react-native-notifications', () => ({
	configure: jest.fn(),
	onRegister: jest.fn(),
	onNotification: jest.fn(),
	addEventListener: jest.fn(),
	requestPermissions: jest.fn(),
}));
