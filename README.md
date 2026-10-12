# Playwright Test Automation Project

This project demonstrates UI and API test automation using Playwright and TypeScript.

## Technologies

- Playwright
- TypeScript
- Node.js
- GitHub
- Azure App Testing

## Project Structure

```text
playwright-saucedemo/
├── .github/
├── .vscode/
├── node_modules/
├── tests/
│   ├── api/
│   │   └── api.spec.ts
│   ├── pages/
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── InventoryPage.ts
│   │   └── LoginPage.ts
│   └── ui/
│       ├── cart.spec.ts
│       ├── checkout.spec.ts
│       ├── inventory.spec.ts
│       └── login.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
├── playwright-report/
├── test-results/
└── package-lock.json
```

## UI Test Scenarios

- Login with valid user
- Login validation errors
- Product selection
- Add item to cart
- Cart verification
- Checkout process
- Order confirmation

## API Test Scenarios

- Verify API response status 200
- Verify response body content
- Verify total user count
- Verify user information

## Skills Demonstrated

- Playwright
- TypeScript
- Page Object Model (POM)
- UI Test Automation
- API Testing
- Assertions
- GitHub Version Control
- Azure App Testing

## Installation

```bash
npm install
```

## Run All Tests

```bash
npx playwright test
```

## Run UI Tests

```bash
npx playwright test tests/ui
```

## Run API Tests

```bash
npx playwright test tests/api
```

## View Test Report

```bash
npx playwright show-report
```

## Author

Kari

Learning Playwright, GitHub and Azure App Testing.
