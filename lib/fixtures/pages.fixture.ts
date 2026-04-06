import {test as baseTest} from '@playwright/test'
import { PageManager } from '../pages/pageManager'

type MyApp = {
    webApp: PageManager;
}

export const test = baseTest.extend<MyApp>({
    webApp: async({page}, use) =>{
        await use(new PageManager(page));
    }
});

export {expect} from '@playwright/test';