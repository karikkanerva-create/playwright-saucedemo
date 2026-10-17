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
├── doc/
│   └── test-cases.md
├── node_modules/
├── tests/
│   ├── api/
│   │   ├── api-create-user.spec.ts
│   │   ├── api-user-data.spec.ts
│   │   ├── api-user-delete.spec.ts
│   │   ├── api-user-list.spec.ts
│   │   ├── api-user-not-found.spec.ts
│   │   ├── api-user-update.spec.ts
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
├── playwright.service.config.ts
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
- Create and update a user
- Delete a user
- Verify missing users return 404

API tests run once in the dedicated `api` project. UI tests run in Chromium, Firefox, and WebKit.

See [doc/test-cases.md](./doc/test-cases.md) for the documented UI and API test cases.

## Continuous Integration

GitHub Actions automatically runs the Playwright test suite on every push and pull request targeting the `main` or `master` branch.

## Latest Test Report

The [Playwright HTML report](./playwright-report/index.html) records the latest Azure Playwright Workspaces run: all 24 UI tests passed, while all 8 API tests failed because ReqRes had reached its anonymous daily request limit and returned HTTP 429. The API failures are caused by the external service limit.

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
npm test
```

## Run UI Tests

```bash
npm run test:ui
```

## Run API Tests

```bash
npm run test:api
```

## Run Tests with Azure Playwright Workspaces

Set `PLAYWRIGHT_SERVICE_URL` to the browser endpoint shown on your Azure Playwright Workspaces resource's **Get Started** page. You can store it in the ignored `.env` file alongside `playwright.config.ts`:

```text
PLAYWRIGHT_SERVICE_URL=<your Azure browser endpoint>
```

Sign in to the Azure tenant that contains the workspace, then run the tests with the service configuration:

```bash
az login
npx playwright test --config=playwright.service.config.ts
```

The service configuration uses Microsoft Entra ID credentials from Azure CLI. Azure Playwright Workspaces usage may incur charges.

## View Test Report

```bash
npm run report
```

## Author

Kari Kanerva<br>
Bachelor of Computer Science<br>
ISTQB Foundation Level Tester CTFL 4.0<br>
ISTQB Foundation Agile Tester<br>
email: kari.k.kanerva@gmail.com
