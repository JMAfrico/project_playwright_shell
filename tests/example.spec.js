// @ts-check
const { test, expect } = require('@playwright/test');
import { criarArquivo } from './testeshell';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  criarArquivo();

  await page.close();
});
