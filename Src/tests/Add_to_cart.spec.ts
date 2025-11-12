import { test, expect } from '@playwright/test';
import { login } from '../Pages/login'
import { AddCart } from '../Pages/Add_cart_Page'
// below import uses for customizing allure report
import { label, feature, story, severity, description, step, epic, owner } from 'allure-js-commons'
// IMPORT TEST DATA FROM JSON FILE
import testData from "../Utils/testdata.json";
import { log } from 'console';



for (const data of testData){
test(`Adding to cart : ${data.firstName}`, async ({ page }) => {

  
    // below mentioned functions are based on allure report customization
    epic('Salesforce');
    feature('Login Module');
    story('Verify login with valid credentials');
    description('This test verifies the Salesforce login flow using valid user credentials.');
    owner('Midhun K');
    severity('critical');
    label('method', 'login');

    const loginpage = new login(page);
    const addcartpage = new AddCart(page);

    await loginpage.goto();
    //Loading credentials from .env file created
    const username = process.env.SAUCE_USERNAME!;
    console.log('Loaded username:', process.env.SAUCE_USERNAME);
    const password = process.env.SAUCE_PASSWORD!;
  
    await loginpage.login(username, password);

      // ✅ Access data from JSON file
  //  const { firstName, lastName, postalCode } = testdata.checkoutDetails;
    await addcartpage.Add_cart();
    await addcartpage.Checkout(data.firstName,data.lastName, data.postalCode);
  
});
}