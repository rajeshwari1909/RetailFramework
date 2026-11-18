Playwright TypeScript Automation Framework
Overview
This project is a Playwright TypeScript Automation Framework developed for the Automation Exercise application.
Application Under Test:
https://automationexercise.com
The framework is designed using the Page Object Model (POM) pattern to improve readability, maintainability, and reusability.
________________________________________
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
________________________________________
Design Pattern
Page Object Model (POM)
The framework follows the Page Object Model design pattern.
All page-specific locators and actions are stored inside page classes, while test files contain only business scenarios.
LoginPage
Contains reusable login-related functionality such as:
•	navigateToLogin()
•	login()
•	logout()
•	verifyLoginSuccess()
•	verifyLogoutSuccess()
ProductPage
Contains reusable product-related functionality such as:
•	navigateToProducts()
•	searchProduct()
•	verifySearchResults()
•	openFirstProduct()
•	addToCart()
•	viewCart()
•	verifyProductAdded()
________________________________________
Automated Test Scenarios
The following scenarios are automated:
User Management
•	Register User
•	Login User
•	Logout User
Product Management
•	Search Product
•	Add Product To Cart
Customer Support
•	Contact Us Form Submission
________________________________________
Test Data Management
User credentials are maintained separately in:
testdata/user.ts
This keeps test data separate from test logic and makes maintenance easier.
________________________________________
Configuration Management
Application URL is managed using Playwright configuration.
Example:
baseURL: 'https://automationexercise.com'
Tests use:
await page.goto('/');
instead of hardcoded URLs.
________________________________________
Features Implemented
•	Playwright with TypeScript
•	Page Object Model (POM)
•	Test Data Separation
•	Configuration Management
•	Reusable Page Objects
•	HTML Reporting Support
•	Screenshots on Failure
•	Trace Collection
________________________________________
Installation
Install project dependencies:
npm install
________________________________________
Execute All Tests
npx playwright test
________________________________________
Execute Specific Test
Example:
npx playwright test tests/login-user.spec.ts
________________________________________
View Playwright Report
npx playwright show-report
________________________________________
Reporting and Debugging
The framework supports:
•	Playwright HTML Reports
•	Screenshots on Failure
•	Trace Viewer
•	Playwright Debugging Tools
These features help analyze failures and improve test reliability.
________________________________________
Future Enhancements
•	Custom Fixtures
•	Data Driven Testing
•	Network Mocking
•	Accessibility Testing using axe-core
•	Visual Regression Testing
•	Cross Browser Execution
