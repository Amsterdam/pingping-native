/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';
import {
  walkthroughOnboarding,
  setBirthDate,
  pressYesAndNext,
  pressMultipleChoiceOption,
  skipNotifications,
  deleteAccount,
  goBack,
  pressNoAndNext,
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
    await goBack();
    await expect(element(by.id(testIDs.ONBOARDING.SCREEN))).toBeVisible();
  });

  it('should walk through the onboarding steps and answer all questions with yes, close app and reopen app, reload app and then delete the account', async () => {
    await device.launchApp({permissions: {notifications: 'YES'}});
    await walkthroughOnboarding();
    await pressNoAndNext();
    await expect(element(by.id(testIDs.GO_BACK_SCREEN.SCREEN))).toBeVisible();
    await element(by.id(testIDs.GO_BACK_SCREEN.GO_BACK_BUTTON)).tap();
    await pressYesAndNext();
    await setBirthDate('10', 'oktober', '2010');
    await goBack();
    await setBirthDate('12', 'december', '2012');
    await pressYesAndNext();
    await pressYesAndNext();
    await device.launchApp({permissions: {notifications: 'YES'}});
    await pressYesAndNext();
    await goBack();
    await pressYesAndNext();
    await pressYesAndNext();
    await pressYesAndNext();
    await device.reloadReactNative();
    await pressYesAndNext();
    await goBack();
    await pressYesAndNext();
    await pressMultipleChoiceOption(1);
    await pressYesAndNext();
    await skipNotifications();
    await expect(element(by.id(testIDs.LIFE_EVENTS.SCREEN))).toBeVisible();
    await deleteAccount();
  });
});
