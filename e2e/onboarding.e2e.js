/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';
import {
  walkthroughOnboarding,
  pressCity,
  setBirthDate,
  pressYesAndNext,
  pressMultipleChoiceOption,
  skipNotifications,
} from './testHelpers';

describe('Onboarding Screen', () => {
  jest.useFakeTimers();

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open login screen', async () => {
    await device.launchApp({permissions: {camera: 'YES'}});
    await element(by.id(testIDs.ONBOARDING.LOG_IN_BUTTON)).tap();
    await expect(element(by.id(testIDs.IMPORT_DATA.SCREEN))).toBeVisible();
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await expect(element(by.id(testIDs.ONBOARDING.SCREEN))).toBeVisible();
  });

  it('should walk through the onboarding steps and answer all questions with yes, close app and reopen app, reload app and then delete the account', async () => {
    await device.launchApp({permissions: {notifications: 'YES'}});
    await walkthroughOnboarding();
    await pressCity('AMSTERDAM');
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await pressCity('DENHAAG');
    await setBirthDate('10', 'oktober', '2010');
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await setBirthDate('12', 'december', '2012');
    await pressYesAndNext();
    await pressYesAndNext();
    await device.launchApp({permissions: {notifications: 'YES'}});
    await pressYesAndNext();
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await pressYesAndNext();
    await pressYesAndNext();
    await pressYesAndNext();
    await device.reloadReactNative();
    await pressYesAndNext();
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await pressYesAndNext();
    await pressMultipleChoiceOption(1);
    await pressYesAndNext();
    await skipNotifications();
    await expect(element(by.id(testIDs.LIFE_EVENTS.SCREEN))).toBeVisible();
    await deleteAccount();
  });
});
