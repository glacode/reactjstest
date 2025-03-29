import { test, expect } from '@playwright/test';

test.describe('Portfolio Site Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Navigate to baseURL
  });

  test('Home page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle('My Portfolio | Home'); // Update with your site’s title
    await expect(page.locator('h1')).toHaveText('Welcome to My Portfolio');
  });

  test('Navigate to About page', async ({ page }) => {
    await page.click('header a[href="/about"]');
    await expect(page).toHaveTitle('My Portfolio | About Me'); // Update with your site’s title
    await expect(page.locator('h1')).toHaveText('About Me');
  });

  test('Submit contact form', async ({ page }) => {
    await page.click('header a[href="/contact"]');
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'Hello, this is a test!');
    await page.click('button[type="submit"]');
    
    // Adjust based on your success message:
    await expect(page.locator('.success-message')).toBeVisible();
  });
});