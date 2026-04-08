import { test, expect } from '../lib/fixtures/pages.fixture';
import { ENV } from '../lib/env'

test('User successfully writes a message login through UI', async ({ webApp }) => {
  test.skip(!!process.env.CI, 'Local only test');
  await webApp.loginPage.goto();
  await webApp.loginPage.login(ENV.USER_EMAIL,ENV.USER_PSWD);
  await expect (webApp.accountPage.navMenu).toHaveText(ENV.USER_NAME);

  //Click on ContactMenu
  await webApp.accountPage.contactMenu.click();

  //Enter the message
  await webApp.contactPage.goto();
  await webApp.contactPage.subject.selectOption("Payments");
  await webApp.contactPage.writeMessage("I have made payments successfully, waiting for confirmation");
  await webApp.contactPage.sendButton.click();
  await expect (webApp.contactPage.successMessage).toContainText("Thanks for your message! We will contact you shortly.");
});

// Site under test is protected by Bot, hence login through API authenticated state, instead of UI login
test('User successfully writes a message login via API authenticated state', async ({ webApp }) => {
  await webApp.contactPage.goto();
  await expect (webApp.accountPage.navMenu).toHaveText(ENV.USER_NAME);
  await webApp.contactPage.subject.selectOption("Payments");
  await webApp.contactPage.writeMessage("I have made payments successfully, waiting for confirmation");
  await webApp.contactPage.sendButton.click();
  await expect (webApp.contactPage.successMessage).toContainText("Thanks for your message! We will contact you shortly.");
});