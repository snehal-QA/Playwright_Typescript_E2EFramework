import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login/login.page';
import { ContactPage } from '../pages/contact/contact.page';
import { AccountPage } from '../pages/account/account.page';

export class PageManager {
    loginPage: LoginPage;
    contactPage: ContactPage;
    accountPage: AccountPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.contactPage = new ContactPage(page);
        this.accountPage = new AccountPage(page);
    }
}