function getEnv(key: string): string {
    const value = process.env[key];
    if(!value) throw new Error (`${key} is not set in .env file`);
        return value;
}

export const ENV = {
    BASE_URL: getEnv('BASE_URL'),
    BASE_API_URL: getEnv('BASE_API_URL'),
    USER_EMAIL: getEnv('USER_EMAIL'),
    USER_PSWD: getEnv('USER_PSWD'),
    USER_NAME: getEnv('USER_NAME'),
}