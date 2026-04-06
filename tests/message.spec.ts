import { test, expect } from '../lib/fixtures/pages.fixture';

test('User successfully writes a message', async ({ webApp }) => {
  await webApp.loginPage.goto();
  await webApp.loginPage.login("customer2@practicesoftwaretesting.com","welcome01");
  await expect (webApp.accountPage.navMenu).toHaveText("Jack Howe");

  //Click on ContactMenu
  await webApp.accountPage.contactMenu.click();

  //Enter the message
  await webApp.contactPage.goto();
  await webApp.contactPage.subject.selectOption("Payments");
  await webApp.contactPage.writeMessage("I have made payments successfully, waiting for confirmation");
  await webApp.contactPage.sendButton.click();
  await expect (webApp.contactPage.successMessage).toContainText("Thanks for your message! We will contact you shortly.");
});