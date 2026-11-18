# Playwright TypeScript Automation Framework

## Overview

This project is a browser automation framework built with Playwright and TypeScript for the [Automation Exercise](https://automationexercise.com) application.

The framework uses the **Page Object Model (POM)** to keep page interactions reusable and test scenarios easy to read and maintain. It also separates test data from test logic and uses Playwright configuration for the application URL and test artifacts.

## Framework Structure

```text
RetailFramework/
├── pages/
│   ├── LoginPage.ts
│   └── ProductPage.ts
├── tests/
│   ├── register-user.spec.ts
│   ├── login-user.spec.ts
│   ├── logout.spec.ts
│   ├── search-product.spec.ts
│   ├── add-to-cart.spec.ts
│   └── contact-us.spec.ts
├── testdata/
│   └── user.ts
├── fixtures/                 # Available for shared test fixtures
├── utils/                    # Available for shared helper utilities
├── config/                   # Available for additional configuration
├── playwright.config.ts
└── README.md
```

## Design Pattern

### Page Object Model (POM)

Page-specific locators and actions are grouped into page classes. Test files use these page objects to describe business scenarios without repeating the underlying UI interactions.

### `LoginPage`

Reusable login and account-related actions include:

- `navigateToLogin()`
- `login()`
- `logout()`
- `verifyLoginSuccess()`
- `verifyLogoutSuccess()`

### `ProductPage`

Reusable product and shopping actions include:

- `navigateToProducts()`
- `searchProduct()`
- `verifySearchResults()`
- `openFirstProduct()`
- `addToCart()`
- `viewCart()`
- `verifyProductAdded()`

## Automated Test Scenarios

| Area | Scenarios |
| --- | --- |
| User management | Register User, Login User, Logout User |
| Product management | Search Product, Add Product To Cart |
| Customer support | Contact Us Form Submission |

## Test Data Management

User test data is stored separately in [`testdata/user.ts`](testdata/user.ts). Keeping test data outside of test logic makes it easier to maintain and reuse.

## Configuration Management

The application URL is configured as Playwright's `baseURL` in `playwright.config.ts`:

```typescript
baseURL: 'https://automationexercise.com'
```

Tests can navigate relative to this URL instead of repeating the full address:

```typescript
await page.goto('/');
```

The Playwright configuration also defines Chromium, Firefox, and WebKit projects, an HTML reporter, screenshots on failure, and trace collection on the first retry.

## Features

- Playwright with TypeScript
- Page Object Model (POM)
- Separate user test data
- Centralized application URL configuration
- Reusable page objects
- HTML test reporting
- Screenshots captured on failure
- Trace collection on the first retry
- Cross-browser projects for Chromium, Firefox, and WebKit

## Installation

Install the project dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login-user.spec.ts
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Reporting and Debugging

The framework uses Playwright's HTML reporter. After running tests, open the report with:

```bash
npx playwright show-report
```

Screenshots are saved for failed tests. Traces are collected on the first retry and can be inspected with the Playwright Trace Viewer:

```bash
npx playwright show-trace <path-to-trace.zip>
```

These artifacts, along with Playwright's debugging tools, help investigate test failures.

## Future Enhancements

- Add shared custom fixtures.
- Expand data-driven test coverage.
- Add network mocking.
- Add accessibility testing with axe-core.
- Add visual regression testing.


Playwright TypeScript Automation Framework
Overview
This project is a Playwright TypeScript Automation Framework developed for the Automation Exercise application.

Application Under Test:

https://automationexercise.com

The framework is designed using the Page Object Model (POM) pattern to improve readability, maintainability, and reusability.

Framework Structure
RetailFramework
│
├── pages
│   ├── LoginPage.ts
│   └── ProductPage.ts
│
├── tests
│   ├── register-user.spec.ts
│   ├── login-user.spec.ts
│   ├── logout.spec.ts
│   ├── search-product.spec.ts
│   ├── add-to-cart.spec.ts
│   └── contact-us.spec.ts
│
├── testdata
│   └── user.ts
│
├── fixtures
│
├── utils
│
├── config
│
├── playwright.config.ts
│
└── README.md
Design Pattern
Page Object Model (POM)
The framework follows the Page Object Model design pattern.

All page-specific locators and actions are stored inside page classes, while test files contain only business scenarios.

LoginPage
Contains reusable login-related functionality such as:

navigateToLogin()
login()
logout()
verifyLoginSuccess()
verifyLogoutSuccess()
ProductPage
Contains reusable product-related functionality such as:

navigateToProducts()
searchProduct()
verifySearchResults()
openFirstProduct()
addToCart()
viewCart()
verifyProductAdded()
Automated Test Scenarios
The following scenarios are automated:

User Management
Register User
Login User
Logout User
Product Management
Search Product
Add Product To Cart
Customer Support
Contact Us Form Submission
Test Data Management
User credentials are maintained separately in:

testdata/user.ts
This keeps test data separate from test logic and makes maintenance easier.

Configuration Management
Application URL is managed using Playwright configuration.

Example:

baseURL: 'https://automationexercise.com'
Tests use:

await page.goto('/');
instead of hardcoded URLs.

Features Implemented
Playwright with TypeScript
Page Object Model (POM)
Test Data Separation
Configuration Management
Reusable Page Objects
HTML Reporting Support
Screenshots on Failure
Trace Collection
Installation
Install project dependencies:

npm install
Execute All Tests
npx playwright test
Execute Specific Test
Example:

npx playwright test tests/login-user.spec.ts
View Playwright Report
npx playwright show-report
Reporting and Debugging
The framework supports:

Playwright HTML Reports
Screenshots on Failure
Trace Viewer
Playwright Debugging Tools
These features help analyze failures and improve test reliability.

Future Enhancements
Custom Fixtures
Data Driven Testing
Network Mocking
Accessibility Testing using axe-core
Visual Regression Testing
Cross Browser Execution
