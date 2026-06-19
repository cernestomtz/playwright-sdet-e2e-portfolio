# Playwright SDET Developer Guide

This document contains the most frequently used commands, workflows, and development practices for this project.

It serves as the primary developer reference for local development, debugging, Git workflow, GitHub workflow, and CI/CD.

---

# Project Structure

```
PLAYWRIGHT-SDET-E2E-PORTFOLIO
│
├── .github/
│   └── workflows/
│
├── components/
├── docs/
├── fixtures/
├── pages/
├── tests/
│
├── README.md
├── package.json
└── playwright.config.ts
```

Folder description

* **components/** → Reusable UI components.
* **docs/** → Project documentation.
* **fixtures/** → Centralized test data.
* **pages/** → Page Object Model classes.
* **tests/** → UI and API automated tests.
* **.github/workflows/** → GitHub Actions CI pipeline.

---

# Test Suites

```
login.spec.ts
inventory.spec.ts
cart.spec.ts
checkout.spec.ts
logout.spec.ts
api.spec.ts
```

---

# NPM Scripts

Run complete regression

```bash
npm test
```

Run Login suite

```bash
npm run test:login
```

Run Inventory suite

```bash
npm run test:inventory
```

Run Cart suite

```bash
npm run test:cart
```

Run Checkout suite

```bash
npm run test:checkout
```

Run Logout suite

```bash
npm run test:logout
```

Run API suite

```bash
npm run test:api
```

Run Chromium only

```bash
npm run test:chrome
```

Run Firefox only

```bash
npm run test:firefox
```

Run WebKit only

```bash
npm run test:webkit
```

Run Headed Mode

```bash
npm run test:headed
```

Run Debug Mode

```bash
npm run test:debug
```

Run Playwright UI Mode

```bash
npm run test:ui
```

Open HTML Report

```bash
npm run report
```

---

# Running Individual Suites

Login

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

Inventory

```bash
npx playwright test tests/inventory.spec.ts --project=chromium
```

Cart

```bash
npx playwright test tests/cart.spec.ts --project=chromium
```

Checkout

```bash
npx playwright test tests/checkout.spec.ts --project=chromium
```

Logout

```bash
npx playwright test tests/logout.spec.ts --project=chromium
```

API

```bash
npx playwright test tests/api.spec.ts --project=chromium
```

Run a single test

```bash
npx playwright test -g "TC-001"
```

Run a single API test

```bash
npx playwright test -g "API-001"
```

---

# Debugging Tools

## HTML Report

```bash
npm run report
```

Used to review:

* Passed tests
* Failed tests
* Duration
* Screenshots
* Trace Viewer

---

## Playwright Inspector

```bash
npx playwright test tests/login.spec.ts --project=chromium --debug
```

Purpose

* Step-by-step execution
* Inspect locators
* Verify assertions
* Pause execution

---

## UI Mode

```bash
npm run test:ui
```

Purpose

* Interactive execution
* Run selected tests
* Watch mode
* Visual debugging

---

## Trace Viewer

Normally opened from the HTML Report.

Or manually

```bash
npx playwright show-trace trace.zip
```

Useful for

* DOM snapshots
* Timeline
* Screenshots
* Network requests
* Console logs
* Locator failures

---

## Headed Mode

```bash
npm run test:headed
```

Runs the browser visibly.

Useful for visual validation.

---

## Code Generator

```bash
npx playwright codegen https://www.saucedemo.com
```

Useful to

* Discover locators
* Generate initial Playwright code
* Learn Playwright syntax

Generated code should always be refactored before being added to the framework.

---

# Typical Debugging Workflow

1. Run the failing suite.

```bash
npm run test:login
```

↓

2. Run headed.

```bash
npm run test:headed
```

↓

3. Run debug.

```bash
npm run test:debug
```

↓

4. Open HTML Report.

```bash
npm run report
```

↓

5. Open Trace Viewer.

↓

6. Identify the failing locator or assertion.

↓

7. Fix the issue.

↓

8. Execute the suite again.

---

# Git Workflow

## Verify current branch

```bash
git branch
```

Current branch is marked with (*).

---

## Switch to Main

```bash
git checkout main
```

---

## Update Main

```bash
git pull origin main
```

Always update main before starting a new feature.

---

## Create a Feature Branch

```bash
git checkout -b feature/feature-name
```

Example

```bash
git checkout -b feature/add-api-tests
```

---

## Switch Between Branches

Main

```bash
git checkout main
```

Feature

```bash
git checkout feature/add-api-tests
```

---

## Check Current Status

```bash
git status
```

---

## Stage Files

```bash
git add .
```

---

## Commit

```bash
git commit -m "Meaningful commit message"
```

Example

```bash
git commit -m "Add API regression tests"
```

---

## Push Branch

```bash
git push -u origin feature/add-api-tests
```

Subsequent pushes

```bash
git push
```

---

# GitHub Workflow

Typical development flow

```
Update Main

↓

Create Feature Branch

↓

Develop

↓

git add

↓

git commit

↓

git push

↓

Open Pull Request

↓

GitHub Actions executes

↓

Review

↓

Merge

↓

Pull latest Main

↓

Start next feature
```

---

# Pull Request Checklist

Before opening a PR verify

* Tests pass locally
* No unnecessary files
* Documentation updated
* Meaningful commit message
* Feature branch pushed

---

# GitHub Actions

The pipeline executes automatically

* On every Push to main
* On every Pull Request

Pipeline steps

```
Checkout Repository

↓

Install Dependencies

↓

Install Playwright Browsers

↓

Execute Complete Test Suite

↓

Upload HTML Report Artifact
```

---

# CI/CD Benefits

The pipeline validates

* UI Tests
* API Tests
* Complete Regression

before code reaches the main branch.

---

# Frequently Used Commands

Run Login

```bash
npm run test:login
```

Run API

```bash
npm run test:api
```

Run Regression

```bash
npm test
```

Open Report

```bash
npm run report
```

Run Debug

```bash
npm run test:debug
```

Run UI Mode

```bash
npm run test:ui
```

Run Chromium

```bash
npm run test:chrome
```

---

# Interview Talking Points

This project demonstrates

* Requirements Analysis
* Manual Test Design
* Traceability Matrix
* Defect Documentation
* Page Object Model (POM)
* Component Object Model
* Fixture Design
* UI Automation
* API Automation
* Playwright Debugging
* Git Workflow
* Pull Requests
* GitHub Actions
* CI/CD Pipeline
* Professional Documentation

---

# Future Improvements

* Branch Protection Rules
* Scheduled Nightly Regression
* Allure Reporting
* API Login Authentication
* Responsive Testing
* Environment Configuration
* Docker Execution
* Parallel Test Distribution
* Cross-browser Matrix Execution
* Slack/Teams Notifications
* Performance Testing
* Visual Regression Testing

---

# Key Takeaways

✔ HTML Report identifies which test failed.

✔ Trace Viewer explains why it failed.

✔ Playwright Inspector enables interactive debugging.

✔ UI Mode accelerates local development.

✔ GitHub Actions automatically validates every Pull Request.

✔ CI/CD helps prevent unstable code from reaching the main branch.

✔ The project follows a professional SDET workflow from requirements analysis through automated testing and continuous integration.
