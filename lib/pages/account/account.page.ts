import{type Locator, type Page} from 'playwright/test'

export class AccountPage{
    readonly page: Page;
    readonly contactMenu: Locator
    readonly navMenu: Locator
    constructor(page: Page){
        this.page = page;
        this.contactMenu = page.getByTestId("nav-contact");
        this.navMenu = page.getByTestId("nav-menu");
    }
}