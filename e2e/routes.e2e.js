/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';
import {
  walkthroughOnboarding,
  answerOnboardingQuestions,
  skipNotifications,
  deleteAccount,
} from './testHelpers';

describe('Onboarding Screen', () => {
  jest.useFakeTimers();

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should walkthrough onboarding and click and finish a route', async () => {
    await device.launchApp({
      permissions: {camera: 'YES', notifications: 'YES'},
    });
    await walkthroughOnboarding();
    await answerOnboardingQuestions();
    await skipNotifications();
    await expect(element(by.id(testIDs.ROUTES.SCREEN))).toBeVisible();
    try {
      await element(by.id(testIDs.ROUTES.ROUTE_CARD)).atIndex(0).tap();
    } catch (error) {
      console.error(error);
      await deleteAccount();
    }
  });
});
