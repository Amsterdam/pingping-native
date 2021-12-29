/* eslint-disable no-undef */
import { testIDs } from './modulesTestIDs';
import {
	answerOnboardingQuestions,
	deleteAccount,
	skipNotifications,
	walkthroughOnboarding,
} from './testHelpers';

describe('Onboarding Screen', () => {
	jest.useFakeTimers();

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should walkthrough onboarding and click and finish a route', async () => {
		await device.launchApp({
			permissions: {
				camera: 'YES',
				notifications: 'YES',
			},
		});
		await walkthroughOnboarding();
		await answerOnboardingQuestions();
		await skipNotifications();

		try {
			await expect(
				element(by.id(testIDs.ROUTES.SCREEN)),
			).toBeVisible();
			await expect(
				element(
					by.id(testIDs.ROUTES.FEEDBACK_CARD),
				),
			).toBeVisible();
			await element(
				by.id(testIDs.ROUTES.ROUTE_CARD),
			)
				.atIndex(0)
				.tap();
			await element(
				by.id(
					testIDs.NAVIGATION
						.IMAGE_OVERLAY_BACK_BUTTON,
				),
			).tap();
			await expect(
				element(by.id(testIDs.ROUTES.SCREEN)),
			).toBeVisible();
			await expect(
				element(
					by.id(testIDs.ROUTES.FEEDBACK_CARD),
				),
			).toBeVisible();
			await deleteAccount();
		} catch (error) {
			console.error(error);
			await deleteAccount();
		}
	});
});
