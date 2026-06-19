# Playwright SDET E2E Portfolio

## Overview

This project was created as a Software Development Engineer in Test (SDET) portfolio to demonstrate:

* Requirements analysis
* Test case design
* Requirements traceability
* Defect documentation
* End-to-end test automation
* Page Object Model implementation
* Component-based framework design
* Test data management
* Playwright and TypeScript automation

The application under test is SauceDemo, a public e-commerce testing platform commonly used for QA and automation practice.

---

## Business Scope

The automated test suite covers the complete customer purchase journey:

- Login
- Product Selection
- Shopping Cart
- Checkout Information
- Order Confirmation
- Logout

---

## Project Structure

```text
playwright-sdet-e2e-portfolio
│
├── components
│   └── MenuComponent.ts
│
├── docs
│   ├── 01_Jira_Epic.md
│   ├── 02_FRD_Review_Findings.md
│   ├── 03_Test_Cases.md
│   ├── 04_Requirements_Traceability_Matrix.md
│   ├── 05_Bug_Reports.md
│   ├── 98_Project_Status.md
│   └── 99_Interview_Talking_Points.md
│
├── fixtures
│   ├── users.ts
│   ├── messages.ts
│   ├── products.ts
│   ├── checkoutData.ts
│   └── checkoutMessages.ts
│
├── pages
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── ProductDetailPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── CheckoutOverviewPage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── logout.spec.ts
│
└── playwright.config.ts
```

---

## Framework Architecture

The framework follows a layered design:

### Page Object Model (POM)

Each application page encapsulates its own locators and interactions.

Examples:

* LoginPage
* InventoryPage
* ProductDetailPage
* CartPage
* CheckoutPage
* CheckoutOverviewPage

### Component Object Model

Reusable UI elements are isolated into components.

Example:

* MenuComponent

### Fixtures

Test data is centralized to avoid hardcoded values inside test files.

Examples:

* users.ts
* products.ts
* messages.ts
* checkoutData.ts
* checkoutMessages.ts

---

## Automated Test Coverage

### Login

* TC-001 Valid Login
* TC-002 Invalid Credentials
* TC-003 Missing Username
* TC-004 Missing Password
* TC-005 Missing Username and Password

### Inventory

* TC-006 Add Product To Cart
* TC-007 Add Product From Product Detail
* TC-008 Add Multiple Products

### Cart

* TC-009 View Shopping Cart
* TC-010 View Multiple Products In Cart
* TC-011 Remove Product From Cart

### Checkout

* TC-012 Checkout With Valid Information
* TC-013 Checkout Missing First Name
* TC-014 Checkout Missing Last Name
* TC-015 Checkout Missing Postal Code
* TC-016 Complete Purchase

### Logout

* TC-017 Logout Successfully

---

## Requirements Traceability

Traceability was implemented between:

- Epic
- Requirements
- Acceptance Criteria
- Test Cases
- Automation Scripts

---

## Defect Documentation

Exploratory testing findings are documented in:

```text
docs/05_Defects_and_Observations.md
```

Example finding:

* OBS-001 Login Validation Message Inconsistency

---

## Running the Test Suite

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run with headed browser:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

---

## Reporting and Debugging

This project uses:

* Playwright HTML Reports
* Playwright Trace Viewer
* Playwright Inspector
* Debug Mode

Examples:

```bash
npx playwright show-report
```

```bash
npx playwright test --debug
```

---

## Key Design Decisions

### Why Page Objects?

To separate test logic from UI implementation details and improve maintainability.

### Why Fixtures?

To centralize test data and avoid hardcoded values.

### Why Components?

To encapsulate reusable UI elements that may appear across multiple pages.

### Why Traceability?

To demonstrate complete coverage from requirements through automation.

---

## Future Improvements

* API Testing Layer
* GitHub Actions CI/CD Pipeline
* Cross-browser execution strategy
* Environment configuration management
* Advanced reporting integrations

---

## API Testing

The project includes API testing using Playwright's built-in request context.

### Covered Scenarios

- API-001 GET User
- API-002 POST Post

### Validations

- HTTP status codes
- Response body validation
- JSON payload assertions
- Test data fixtures

---

## Author

Carlos Ernesto Martinez Rodriguez

QA Engineer | SDET Portfolio Project

Built using Playwright and TypeScript.
