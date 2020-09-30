/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';

describe('Onboarding Screen', () => {
  jest.useFakeTimers();

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const walkthroughOnboarding = async () => {
    await element(by.id(testIDs.ONBOARDING.WHAT_BUTTON)).tap();
    await element(by.id(testIDs.ONBOARDING.HOW_BUTTON)).tap();
    await element(by.id(testIDs.ONBOARDING.WHERE_BUTTON)).tap();
    await expect(element(by.id(testIDs.PRIVACY.SCREEN))).toBeVisible();
    await element(by.id(testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON)).tap();
    await element(by.id(testIDs.WELCOME.START_BUTTON)).tap();
  };

  const setBirthDate = async (day, month, year) => {
    await expect(element(by.id(testIDs.QUESTION.PICKER_DAY))).toBeVisible();
    await element(by.id(testIDs.QUESTION.PICKER_DAY)).setColumnToValue(0, day);
    await element(by.id(testIDs.QUESTION.PICKER_MONTH)).setColumnToValue(
      0,
      month,
    );
    await element(by.id(testIDs.QUESTION.PICKER_YEAR)).setColumnToValue(
      0,
      year,
    );
    await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
  };

  const pressMultipleChoiceOption = async (index) => {
    await element(by.id(testIDs.QUESTION.MULTIPLE_CHOICE_OPTION))
      .atIndex(index)
      .tap();
    await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
  };

  const pressYesAndNext = async () => {
    await element(by.id(testIDs.QUESTION.YES_BUTTON)).tap();
    await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
  };
  const pressCity = async (city) => {
    await element(by.id(`${city}_BUTTON`)).tap();
    await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
  };

  it('should open login screen', async () => {
    await device.launchApp({permissions: {camera: 'YES'}});
    await element(by.id(testIDs.ONBOARDING.LOG_IN_BUTTON)).tap();
    await expect(element(by.id(testIDs.IMPORT_DATA.SCREEN))).toBeVisible();
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await expect(element(by.id(testIDs.ONBOARDING.SCREEN))).toBeVisible();
  });

  it('should walk through the onboarding steps and answer all questions with yes and then delete the account', async () => {
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
    await pressYesAndNext();
    await element(by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON)).tap();
    await pressYesAndNext();
    await pressYesAndNext();
    await pressYesAndNext();
    await pressYesAndNext();
    await pressMultipleChoiceOption(1);
    await pressYesAndNext();
    await expect(element(by.id(testIDs.NOTIFICATON.SCREEN))).toBeVisible();
    await element(by.id(testIDs.NOTIFICATON.SKIP_BUTTON)).tap();
    await expect(element(by.id(testIDs.LIFE_EVENTS.SCREEN))).toBeVisible();
    await element(by.id(testIDs.ACCOUNT.TAB_BUTTON)).tap();
    await expect(element(by.id(testIDs.ACCOUNT.SCREEN))).toBeVisible();
    await element(by.id(testIDs.ACCOUNT.DELETE_DATA_BLOCK_BUTTON)).tap();
    await expect(element(by.id(testIDs.DELETE_DATA.SCREEN))).toBeVisible();
    await element(by.id(testIDs.DELETE_DATA.DELETE_BUTTON)).tap();
    await expect(element(by.id(testIDs.DELETE_DATA.MODAL))).toBeVisible();
    await element(by.id(testIDs.DELETE_DATA.DELETE_DATA_MODAL_BUTTON)).tap();
    await expect(element(by.id(testIDs.ONBOARDING.SCREEN))).toBeVisible();
  });
});
