import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SuccessPage } from '../pages/SuccessPage';
import loginData from '../test-data/loginData.json';

const { validUser, invalidLogins } = loginData;

let loginPage;
let successPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  successPage = new SuccessPage(page);
  await loginPage.goto();
});

test.describe('Login - Positive Scenarios', () => {

  test('TC01 - Verify login page loads with all fields', async ({ page }) => {
    await expect(page).toHaveTitle(/Test Login/);
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC02 - Verify user can login with valid credentials', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(successPage.heading).toHaveText('Logged In Successfully');
    await expect(successPage.successMessage).toHaveText('Congratulations student. You successfully logged in!');
    await expect(successPage.logoutButton).toBeVisible();
  });

  test('TC03 - Verify password is masked in the password field', async () => {
    await loginPage.passwordInput.fill(validUser.password);

    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });

  test('TC04 - Verify user can login after a failed attempt', async ({ page }) => {
    await loginPage.login(validUser.username, 'wrongPassword');
    await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');

    await loginPage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(successPage.heading).toHaveText('Logged In Successfully');
  });

  test('TC05 - Verify logout takes user back to login page', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    await expect(successPage.logoutButton).toBeVisible();

    await successPage.logout();

    await expect(page).toHaveURL(/practice-test-login/);
    await expect(loginPage.usernameInput).toBeVisible();
  });
});

test.describe('Login - Negative Scenarios', () => {

  for (const data of invalidLogins) {
    test(`${data.id} - ${data.scenario}`, async ({ page }) => {
      await loginPage.login(data.username, data.password);

      // #error div is always there in the DOM (hidden with opacity: 0),
      // so checking the "show" class confirms the error is really displayed
      await expect(loginPage.errorMessage).toHaveClass(/show/);
      await expect(loginPage.errorMessage).toHaveText(data.expectedError);
      await expect(page).toHaveURL(/practice-test-login/);
    });
  }
});
