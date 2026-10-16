# Playwright Login Automation

Automation tests for the login page at https://practicetestautomation.com/practice-test-login/ using Playwright with JavaScript. The Page Object Model is used so the locators and page actions stay separate from the tests.

## Project Structure

```
playwright-login-automation
├── pages
│   ├── LoginPage.js        # login page locators and actions
│   └── SuccessPage.js      # logged in page locators and actions
├── test-data
│   └── loginData.json      # valid user and negative test data
├── tests
│   └── login.spec.js       # positive and negative login tests
├── TEST_CASES.md           # 10 functional test cases
├── playwright.config.js
└── package.json
```

## Prerequisites

- Node.js 20 or above
- npm

## Setup

```bash
git clone <repo-url>
cd playwright-login-automation
npm install
npx playwright install chromium
```

## Running the Tests

```bash
npm test                        # run all tests (headless)
npm run test:headed             # run with the browser visible
npx playwright test -g "TC02"   # run a single test case
```

## Test Report

An HTML report is generated in the `playwright-report` folder after every run. To open it:

```bash
npm run report
```

For failed tests, the screenshot, video and trace are saved in the `test-results` folder and are also attached in the HTML report.

## Test Cases

10 functional test cases (5 positive and 5 negative) are written in [TEST_CASES.md](TEST_CASES.md). All 10 are automated.

## Notes

- The error message (`#error`) is present on the page from the start and is only hidden with `opacity: 0`, so `toBeVisible()` passes even before clicking Submit. That's why the negative tests also check for the `show` class, which is added only after a failed login.
- The logged in page (`/logged-in-successfully/`) can be opened directly without logging in. Fine for a practice site, but in a real application this would be a bug.
