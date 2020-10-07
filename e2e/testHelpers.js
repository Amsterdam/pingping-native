/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';

export const walkthroughOnboarding = async () => {
  await element(by.id(testIDs.ONBOARDING.WHAT_BUTTON)).tap();
  await element(by.id(testIDs.ONBOARDING.HOW_BUTTON)).tap();
  await element(by.id(testIDs.ONBOARDING.WHERE_BUTTON)).tap();
  await expect(element(by.id(testIDs.PRIVACY.SCREEN))).toBeVisible();
  await element(by.id(testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON)).tap();
  await element(by.id(testIDs.WELCOME.START_BUTTON)).tap();
};
export const answerOnboardingQuestions = async () => {
  await pressCity('AMSTERDAM');
  await setBirthDate('12', 'december', '2012');
  await pressYesAndNext();
  await pressYesAndNext();
  await pressYesAndNext();
  await pressYesAndNext();
  await pressYesAndNext();
  await pressYesAndNext();
  await pressMultipleChoiceOption(1);
  await pressYesAndNext();
};

export const skipNotifications = async () => {
  await expect(element(by.id(testIDs.NOTIFICATON.SCREEN))).toBeVisible();
  await element(by.id(testIDs.NOTIFICATON.SKIP_BUTTON)).tap();
};

export const setBirthDate = async (day, month, year) => {
  await expect(element(by.id(testIDs.QUESTION.PICKER_DAY))).toBeVisible();
  await element(by.id(testIDs.QUESTION.PICKER_DAY)).setColumnToValue(0, day);
  await element(by.id(testIDs.QUESTION.PICKER_MONTH)).setColumnToValue(
    0,
    month,
  );
  await element(by.id(testIDs.QUESTION.PICKER_YEAR)).setColumnToValue(0, year);
  await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
};

export const pressMultipleChoiceOption = async (index) => {
  await element(by.id(testIDs.QUESTION.MULTIPLE_CHOICE_OPTION))
    .atIndex(index)
    .tap();
  await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
};

export const pressYesAndNext = async () => {
  await element(by.id(testIDs.QUESTION.YES_BUTTON)).tap();
  await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
};
export const pressCity = async (city) => {
  await element(by.id(`${city}_BUTTON`)).tap();
  await element(by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON)).tap();
};
