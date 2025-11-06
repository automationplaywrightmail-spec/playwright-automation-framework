import { test, expect } from '@playwright/test';
import {login} from '../Pages/login.ts'

test('login to page',async ({page})=>{

const loginpage = new login(page);

await loginpage.goto();

//Loading credentials from .env file created
const username = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

await loginpage.login(username, password);

});