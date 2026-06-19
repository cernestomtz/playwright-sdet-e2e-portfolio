# Bug Reports and Observations

This document contains defects, usability observations, platform limitations, and exploratory testing findings identified during the development of the Playwright SDET portfolio project.

---

# OBS-001 Login Validation Message

## Summary

When both **Username** and **Password** fields are left empty, the application displays:

```text
Epic sadface: Username is required
```

## Current Behavior

### Steps to Reproduce

1. Navigate to the Login page.
2. Leave the **Username** field empty.
3. Leave the **Password** field empty.
4. Click **Login**.

### Actual Result

```text
Epic sadface: Username is required
```

## Expected Behavior

The validation message should clearly indicate that both required fields are missing.

### Option A

```text
Epic sadface: Username and Password are required
```

### Option B

Display individual validation indicators for both fields.

## Impact

Low

The application correctly prevents authentication. However, the feedback may be misleading because only one missing field is mentioned while both fields are empty.

## Severity

Low

## Priority

Low

## Classification

Usability Improvement

## Status

Open

---

# OBS-002 Product Quantity Limitation

## Summary

The application allows users to add a product to the cart only once. There is no quantity selector or option to increase the quantity of the same product.

## Current Behavior

1. Log in using a valid user.
2. Add a product to the cart.
3. Observe that the button changes from **Add to cart** to **Remove**.
4. There is no visible control to increase the quantity of that same product.

## Expected Behavior

No defect is confirmed because the requirements do not explicitly state that multiple quantities of the same product should be supported.

If quantity management were part of the business requirements, the application should provide a quantity selector or allow quantity updates from the cart.

## Impact

Low

The current behavior is consistent with the apparent application design, but it limits quantity-based shopping cart scenarios.

## Classification

Platform Limitation / Requirement Clarification

## Status

Documented

---

# OBS-003 Checkout Validation Order

## Summary

During checkout, when multiple required fields are empty, the application displays the validation message for the first missing field in top-to-bottom order.

## Current Behavior

Examples:

If all checkout fields are empty, the application displays:

```text
Error: First Name is required
```

If First Name is populated but Last Name and Postal Code are empty, the application displays:

```text
Error: Last Name is required
```

If First Name and Last Name are populated but Postal Code is empty, the application displays:

```text
Error: Postal Code is required
```

## Expected Behavior

No defect is confirmed. This behavior is common in form validation.

However, an alternative UX approach could display all missing required fields at once.

## Impact

Low

The application correctly prevents the user from continuing without required information.

## Classification

Validation Behavior / UX Observation

## Status

Documented

---

# OBS-004 API Testing Uses External Public API

## Summary

The UI automation suite uses SauceDemo as the application under test. However, SauceDemo does not expose a public API suitable for API testing practice.

For this reason, API tests were implemented using JSONPlaceholder as a separate public API testing target.

## Current Behavior

The project includes API tests for:

* GET User
* POST Post

These tests validate:

* HTTP status codes
* JSON response structure
* Response body values

## Expected Behavior

No defect. This is an intentional project design decision.

## Impact

None

This allows the project to demonstrate both UI E2E automation and API testing without artificially coupling unrelated systems.

## Classification

Project Design Note

## Status

Documented
