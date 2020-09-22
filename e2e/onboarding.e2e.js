describe('Onboarding Screen', () => {
  jest.useFakeTimers();

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  //   it('should have welcome screen elements', async () => {
  //     await expect(element(by.id('Welcome-Screen'))).toBeVisible();
  //     await expect(element(by.id('Log-In-Button'))).toBeVisible();
  //     await expect(element(by.id('Block-Button'))).toExist();
  //   });

  //   it('should open login screen', async () => {
  //     await device.launchApp({permissions: {camera: 'YES'}});
  //     await element(by.id('Log-In-Button')).tap();
  //     await expect(element(by.text('Gegevens Importeren'))).toBeVisible();
  //     await element(by.id('Header-Back-Button')).tap();
  //     await expect(element(by.id('Welcome-Screen'))).toBeVisible();
  //   });

  it('should walk through the onboarding steps', async () => {
    await element(by.id('What-Button')).tap();
    await element(by.id('How-Button')).tap();
    await element(by.id('Where-Button')).tap();
    await expect(element(by.text('Privacy'))).toBeVisible();
    await element(by.id('Privacy-Button')).tap();
    await element(by.id('Start-Button')).tap();
    await element(by.id('yes-Button')).tap();
    await element(by.id('Next-Button')).tap();
  });
});
