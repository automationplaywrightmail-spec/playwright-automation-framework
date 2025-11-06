import { Page, expect } from '@playwright/test';

export class AddCart {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators 

    get backpack_button() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');


    }

    get cart_button() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    get itemTitle() {
        return this.page.locator('[data-test="item-4-title-link"]');
    }

    get cartlink()
    {
        return this.page.locator('[data-test="shopping-cart-link"]');

    }

    get checkout_button()
    {
        return this.page.locator('[data-test="checkout"]');
    }

    

    //Action's 

    async Add_cart() {
        await this.page.locator('[data-test="title"]').click();
        await this.backpack_button.click();
        await this.cart_button.click();
        await this.page.locator('[data-test="inventory-item-name"]').click();
    }

    async Checkout(firstName: string, lastName: string, postalCode: string) {
       
        await this.cartlink.click();
        await this.checkout_button.click();
        
        await this.page.locator('[data-test="firstName"]').click();
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').click();
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').click();
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
        await this.page.locator('[data-test="continue"]').click();


    }







}