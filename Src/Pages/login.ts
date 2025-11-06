// login.page.ts
import { Page, expect } from '@playwright/test';

export class login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {

    
    await this.page.waitForTimeout(1000);
    // Wait until the DOM is ready but don’t require full load
    await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
}
