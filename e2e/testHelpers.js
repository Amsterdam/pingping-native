/* eslint-disable no-undef */
import { testIDs } from './modulesTestIDs';

export const walkthroughOnboarding = async () => {
	await element(
		by.id(testIDs.ONBOARDING.WHAT_BUTTON),
	).tap();
	await element(
		by.id(testIDs.ONBOARDING.HOW_BUTTON),
	).tap();
	await element(
		by.id(testIDs.ONBOARDING.WHERE_BUTTON),
	).tap();
	await expect(
		element(by.id(testIDs.PRIVACY.SCREEN)),
	).toBeVisible();
	await element(
		by.id(testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON),
	).tap();
};

export const answerOnboardingQuestions = async () => {
	await pressYes();
	await pressYes();
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
	await expect(
		element(
			by.id(testIDs.NOTIFICATON.SKIP_BUTTON),
		),
	).toBeVisible();
	await element(
		by.id(testIDs.NOTIFICATON.SKIP_BUTTON),
	).tap();
};

export const setBirthDate = async (
	day,
	month,
	year,
) => {
	await expect(
		element(by.id(testIDs.QUESTION.PICKER_DAY)),
	).toBeVisible();
	await element(
		by.id(testIDs.QUESTION.PICKER_DAY),
	).setColumnToValue(0, day);
	await element(
		by.id(testIDs.QUESTION.PICKER_MONTH),
	).setColumnToValue(0, month);
	await element(
		by.id(testIDs.QUESTION.PICKER_YEAR),
	).setColumnToValue(0, year);
	await element(
		by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON),
	).tap();
};

export const deleteAccount = async () => {
	await expect(
		element(by.id(testIDs.ACCOUNT.TAB_BUTTON)),
	).toBeVisible();
	await element(
		by.id(testIDs.ACCOUNT.TAB_BUTTON),
	).tap();
	await expect(
		element(by.id(testIDs.ACCOUNT.SCREEN)),
	).toBeVisible();
	await element(
		by.id(
			testIDs.ACCOUNT.DELETE_DATA_BLOCK_BUTTON,
		),
	).tap();
	await expect(
		element(by.id(testIDs.DELETE_DATA.SCREEN)),
	).toBeVisible();
	await element(
		by.id(testIDs.DELETE_DATA.DELETE_BUTTON),
	).tap();
	await expect(
		element(by.id(testIDs.DELETE_DATA.MODAL)),
	).toBeVisible();
	await element(
		by.id(
			testIDs.DELETE_DATA
				.DELETE_DATA_MODAL_BUTTON,
		),
	).tap();
	await expect(
		element(by.id(testIDs.ONBOARDING.SCREEN)),
	).toBeVisible();
};

export const pressMultipleChoiceOption = async index => {
	await element(
		by.id(
			testIDs.QUESTION.MULTIPLE_CHOICE_OPTION,
		),
	)
		.atIndex(index)
		.tap();
	await element(
		by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON),
	).tap();
};

export const pressYesAndNext = async () => {
	await element(
		by.id(testIDs.QUESTION.YES_BUTTON),
	).tap();
	await element(
		by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON),
	).tap();
};
export const pressNoAndNext = async () => {
	await element(
		by.id(testIDs.QUESTION.NO_BUTTON),
	).tap();
	await element(
		by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON),
	).tap();
};
export const pressYes = async () => {
	await element(
		by.id(testIDs.QUESTION.YES_BUTTON),
	).tap();
};
export const pressNo = async () => {
	await element(
		by.id(testIDs.QUESTION.NO_BUTTON),
	).tap();
};

export const pressCity = async city => {
	await element(by.id(`${city}_BUTTON`)).tap();
	await element(
		by.id(testIDs.QUESTION.NEXT_QUESTION_BUTTON),
	).tap();
};

export const goBack = async () => {
	await element(
		by.id(testIDs.NAVIGATION.HEADER_BACK_BUTTON),
	).tap();
};
