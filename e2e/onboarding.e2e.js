import {testIDs} from './modulesTestIDs';

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

  it('should walk through the onboarding steps', async () => {
    await element(by.id(testIDs.ONBOARDING.WHAT_BUTTON)).tap();
    await element(by.id(testIDs.ONBOARDING.HOW_BUTTON)).tap();
    await element(by.id(testIDs.ONBOARDING.WHERE_BUTTON)).tap();
    await expect(element(by.id(testIDs.PRIVACY.SCREEN))).toBeVisible();
    await element(by.id(testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON)).tap();
    await element(by.id(testIDs.WELCOME.START_BUTTON)).tap();
    // await element(by.id(testIDs.QUESTION.YES_BUTTON)).tap();
    // await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
  });
});
