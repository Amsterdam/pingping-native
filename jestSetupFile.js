import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import mockGesture from 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-gesture-handler', () => mockGesture);
jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
  };
});
jest.mock('react-native-notifications', () => ({
  configure: jest.fn(),
  onRegister: jest.fn(),
  onNotification: jest.fn(),
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
}));
