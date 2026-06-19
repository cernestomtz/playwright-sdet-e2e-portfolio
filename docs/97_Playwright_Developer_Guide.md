# Playwright Debugging Guide

This document contains the most frequently used Playwright commands during development, debugging, execution, and interview demonstrations.

---

# Project Structure

Current test suites:

```
tests/
│
├── login.spec.ts
├── inventory.spec.ts
├── cart.spec.ts
├── checkout.spec.ts
├── logout.spec.ts
└── api.spec.ts
```

---

# Run Tests

## Run Entire Test Suite

```bash
npx playwright test
```

Runs every UI and API test.

---

## Run One Test Suite

Login

```bash
npx playwright test tests/login.spec.ts
```

Inventory

```bash
npx playwright test tests/inventory.spec.ts
```

Cart

```bash
npx playwright test tests/cart.spec.ts
```

Checkout

```bash
npx playwright test tests/checkout.spec.ts
```

Logout

```bash
npx playwright test tests/logout.spec.ts
```

API

```bash
npx playwright test tests/api.spec.ts --project=chromium
```

---

## Run One Browser Only

Chromium

```bash
npx playwright test --project=chromium
```

Firefox

```bash
npx playwright test --project=firefox
```

WebKit

```bash
npx playwright test --project=webkit
```

---

## Run One Test By Name

Example:

```bash
npx playwright test -g "TC-012"
```

Example:

```bash
npx playwright test -g "API-001"
```

---

# HTML Report

After executing tests:

```bash
npx playwright show-report
```

Purpose

- View Passed tests
- View Failed tests
- Execution duration
- Error details
- Screenshots
- Open Trace Viewer

---

# Playwright UI Mode

```bash
npx playwright test --ui
```

Purpose

- Interactive execution
- Run individual tests
- Filter tests
- Watch mode
- Open traces
- Debug visually

Recommended during daily development.

---

# Playwright Inspector

Run a test step by step.

```bash
npx playwright test tests/login.spec.ts --debug
```

Alternative

```bash
PWDEBUG=1 npx playwright test tests/login.spec.ts
```

Purpose

- Pause execution
- Execute line by line
- Inspect locators
- Verify assertions
- Debug failing tests

---

# Trace Viewer

If a trace.zip file exists:

```bash
npx playwright show-trace trace.zip
```

Normally the Trace Viewer is opened directly from the HTML Report.

Purpose

- Replay the entire execution
- DOM snapshots
- Screenshots
- Timeline
- Console logs
- Network requests
- Failed locator analysis

Best tool for investigating failed tests.

---

# Headed Mode

Run tests with a visible browser.

```bash
npx playwright test --headed
```

Useful when visually validating UI behavior.

---

# Code Generator

```bash
npx playwright codegen https://www.saucedemo.com
```

Purpose

- Generate initial Playwright code
- Discover locators
- Learn Playwright syntax

Generated code should normally be refactored before adding it to the framework.

---

# Install Browsers

```bash
npx playwright install
```

---

# Install Dependencies

```bash
npm install
```

---

# Update Playwright

```bash
npm install @playwright/test@latest
```

---

# Typical Debugging Workflow

Step 1

Run the failing suite.

```bash
npx playwright test tests/login.spec.ts
```

↓

Step 2

Run with a visible browser.

```bash
npx playwright test tests/login.spec.ts --headed
```

↓

Step 3

Run using Playwright Inspector.

```bash
npx playwright test tests/login.spec.ts --debug
```

↓

Step 4

Open the HTML Report.

```bash
npx playwright show-report
```

↓

Step 5

Open the Trace Viewer.

↓

Step 6

Identify the failing locator or assertion.

↓

Step 7

Fix the code.

↓

Step 8

Execute the suite again.

---

# Commands Used During This Project

Run Login tests

```bash
npx playwright test tests/login.spec.ts --project=chromium --debug
npx playwright test tests/login.spec.ts --project=chromium --headed
```

Run Inventory tests

```bash
npx playwright test tests/inventory.spec.ts --project=chromium  --debug
npx playwright test tests/inventory.spec.ts --project=chromium  --headed
```

Run Cart tests

```bash
npx playwright test tests/cart.spec.ts --project=chromium  --debug
npx playwright test tests/cart.spec.ts --project=chromium  --headed
```

Run Checkout tests

```bash
npx playwright test tests/checkout.spec.ts --project=chromium  --debug
npx playwright test tests/checkout.spec.ts --project=chromium  --headed
```

Run Logout tests

```bash
npx playwright test tests/logout.spec.ts --project=chromium --debug
npx playwright test tests/logout.spec.ts --project=chromium --headed
```

Run API tests

```bash
npx playwright test tests/api.spec.ts --project=chromium
```

Run Complete Regression

```bash
npx playwright test
```

Open HTML Report

```bash
npx playwright show-report
```

Open UI Mode

```bash
npx playwright test --ui
```

Debug Login

```bash
npx playwright test tests/login.spec.ts --debug
```

Run Browser Headed

```bash
npx playwright test --headed
```

---

# Interview Notes

During this project the following Playwright tools were used:

| Tool | Purpose |
|------|----------|
| HTML Report | Review execution results and failures |
| Trace Viewer | Investigate failed executions step by step |
| Playwright Inspector | Debug tests interactively |
| UI Mode | Interactive development and execution |
| Code Generator | Generate initial locators and test skeletons |

---

# Key Takeaways

✔ HTML Report tells **which test failed**

✔ Trace Viewer explains **why it failed**

✔ Inspector allows **interactive debugging**

✔ UI Mode accelerates daily development

✔ Code Generator speeds up initial test creation but generated code should always be reviewed and refactored