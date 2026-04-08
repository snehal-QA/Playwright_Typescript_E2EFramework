import {test as setup, request, expect} from '@playwright/test'
import path from 'path';
import { ENV } from '../lib/env'
import fs from 'fs'

const authFile = path.resolve(process.cwd(), 'playwright/.auth/user.json');

setup('authenticate user and save storage state', async () =>{
    fs.mkdirSync(path.dirname(authFile), { recursive: true });

    const apiContext = await request.newContext({
        baseURL: ENV.BASE_API_URL,
    });

    const response = await apiContext.post('/users/login', {
        data: {
        email: ENV.USER_EMAIL,
        password: ENV.USER_PSWD,
        },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    const accessToken = body.access_token;

    if (!accessToken) {
    throw new Error(`No access_token found in response: ${JSON.stringify(body)}`);
    }

    const storageState = {
        cookies: [],
        origins: [
        {
            origin: ENV.BASE_URL.replace(/\/$/, ''),
            localStorage: [
            {
                name: 'auth-token',
                value: accessToken,
            },
            ],
        },
        ],
    };
    fs.writeFileSync(authFile, JSON.stringify(storageState, null, 2));
    
    await apiContext.dispose();
})
