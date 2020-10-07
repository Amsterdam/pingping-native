/* eslint-disable no-undef */
import {testIDs} from './modulesTestIDs';
import {
  walkthroughOnboarding,
  answerOnboardingQuestions,
  skipNotifications,
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
    await expect(element(by.id(testIDs.LIFE_EVENTS.SCREEN))).toBeVisible();
  });
});
