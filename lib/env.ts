export const ENV = {
    BASE_URL: process.env.BASE_URL ?? (() => {throw new Error('BASE_URL not set')}) (),
    USER_EMAIL: process.env.USER_EMAIL ?? (() => {throw new Error('USER_EMAIL not set')}) (),
    USER_PSWD: process.env.USER_PSWD ?? (() => {throw new Error('USER_PSWD not set')}) (),
    USER_NAME: process.env.USER_NAME ?? (() => {throw new Error('USER_NAME not set')}) (),
};