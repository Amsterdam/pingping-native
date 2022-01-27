/* eslint-disable no-undef */
import testIDs from './modulesTestIDs';
import {
	deleteAccount,
	goBack,
	pressMultipleChoiceOption,
	pressNo,
	pressYes,
	pressYesAndNext,
	setBirthDate,
	skipNotifications,
	walkthroughOnboarding,
} from './testHelpers';

describe('Onboarding Screen', () => {
	jest.useFakeTimers();

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('Should open login screen and show camera', async () => {
		await device.launchApp({
			permissions: { camera: 'YES' },
		});
		await element(by.id(testIDs.ONBOARDING.LOG_IN_BUTTON)).tap();
		await expect(
			element(by.id(testIDs.IMPORT_DATA.SCREEN))
		).toBeVisible();
		await goBack();
		await expect(
			element(by.id(testIDs.ONBOARDING.SCREEN))
		).toBeVisible();
	});

	it('Should walk through onboarding and skip questions and delete account', async () => {
		await device.launchApp({
			permissions: { notifications: 'YES' },
		});
		await walkthroughOnboarding();
		await pressYes();
		await pressNo();
		await expect(
			element(by.id(testIDs.QUESTION.SKIP_QUESTIONS_MODAL))
		).toBeVisible();
		await element(
			by.id(testIDs.QUESTION.CONFIRM_SKIP_QUESTIONS_BUTTON)
		).tap();
		await skipNotifications();
		await expect(element(by.id(testIDs.ROUTES.SCREEN))).toBeVisible();
		await expect(
			element(by.id(testIDs.ROUTES.FEEDBACK_CARD))
		).toBeNotVisible();
		await deleteAccount();
	});

	it('should walk through the onboarding steps and answer all questions with yes, close app and reopen app, reload app and then delete the account', async () => {
		await device.launchApp({
			permissions: { notifications: 'YES' },
		});
		await walkthroughOnboarding();
		await pressNo();
		await expect(
			element(by.id(testIDs.GO_BACK_SCREEN.SCREEN))
		).toBeVisible();
		await element(by.id(testIDs.GO_BACK_SCREEN.GO_BACK_BUTTON)).tap();
		await pressYes();
		await pressYes();
		await setBirthDate('10', 'oktober', '2010');
		await goBack();
		await setBirthDate('12', 'december', '2012');
		await pressYesAndNext();
		await pressYesAndNext();
		await device.launchApp({
			permissions: { notifications: 'YES' },
			launchArgs: {
				detoxDebugVisibility: 'YES',
			},
		});
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
		await expect(element(by.id(testIDs.ROUTES.SCREEN))).toBeVisible();
		await deleteAccount();
	});
});
