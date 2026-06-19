# Test Cases

## Test Design Approach

The test cases were designed based on:

- Epic requirements
- Acceptance criteria
- Risk analysis
- End-to-end user workflows

The primary objective is to validate the customer checkout journey from login through order confirmation.

## Test Case Inventory

| Test ID | User Story | Scenario | Priority | Type | Automation Candidate | Status |
|---------|------------|----------|----------|------|----------------------|--------|
| TC-001 | US-001 | Valid Login | High | Positive | Yes | Automated |
| TC-002 | US-001 | Invalid Credentials | High | Negative | Yes | Automated |
| TC-003 | US-001 | Missing Username | High | Negative | Yes | Automated |
| TC-004 | US-001 | Missing Password | High | Negative | Yes | Automated |
| TC-005 | US-001 | Missing Username and Password | High | Negative | Yes | Automated |
| TC-006 | US-002 | Add Product To Cart | High | Positive | Yes | Automated |
| TC-007 | US-002 | Add Product From Product Detail | High | Positive | Yes | Automated |
| TC-008 | US-002 | Add Multiple Products | High | Positive | Yes | Automated |
| TC-009 | US-003 | View Shopping Cart | High | Positive | Yes | Automated |
| TC-010 | US-003 | View Multiple Products In Cart | High | Positive | Yes | Automated |
| TC-011 | US-003 | Remove Product From Cart | High | Positive | Yes | Automated |
| TC-012 | US-004 | Checkout With Valid Information | High | Positive | Yes | Automated |
| TC-013 | US-004 | Checkout Missing First Name | High | Negative | Yes | Automated |
| TC-014 | US-004 | Checkout Missing Last Name | High | Negative | Yes | Automated |
| TC-015 | US-004 | Checkout Missing Postal Code | High | Negative | Yes | Automated |
| TC-016 | US-005 | Complete Purchase | High | Positive | Yes | Automated |
| TC-017 | US-006 | Logout Successfully | Medium | Positive | Yes | Automated |



## Detailed Manual Test Cases

### TC-001 Valid Login

| Field             | Value                                            |
| ----------------- | ------------------------------------------------ |
| Test Case ID      | TC-001                                           |
| User Story        | US-001 User Login                                |
| Title             | Valid Login                                      |
| Priority          | High                                             |
| Type              | Positive                                         |
| Automation Status | Automated                                        |
| Preconditions     | User is on the SauceDemo Login page.             |
| Test Data         | Username: standard_user / Password: secret_sauce |

#### Steps

1. Navigate to the SauceDemo Login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click **Login**.

#### Expected Result

The user is redirected to the Inventory page and the **Products** title is displayed.

---

### TC-002 Invalid Credentials

| Field             | Value                                               |
| ----------------- | --------------------------------------------------- |
| Test Case ID      | TC-002                                              |
| User Story        | US-001 User Login                                   |
| Title             | Invalid Credentials                                 |
| Priority          | High                                                |
| Type              | Negative                                            |
| Automation Status | Automated                                           |
| Preconditions     | User is on the SauceDemo Login page.                |
| Test Data         | Username: invalid_user / Password: invalid_password |

#### Steps

1. Navigate to the SauceDemo Login page.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click **Login**.

#### Expected Result

The user remains on the Login page and the following error message is displayed:

```text
Epic sadface: Username and password do not match any user in this service
```

---

### TC-006 Add Product To Cart

| Field             | Value                                           |
| ----------------- | ----------------------------------------------- |
| Test Case ID      | TC-006                                          |
| User Story        | US-002 Product Selection                        |
| Title             | Add Product To Cart                             |
| Priority          | High                                            |
| Type              | Positive                                        |
| Automation Status | Automated                                       |
| Preconditions     | User is logged in and is on the Inventory page. |
| Test Data         | Product: Sauce Labs Backpack                    |

#### Steps

1. Log in using a valid user.
2. Locate the **Sauce Labs Backpack** product on the Inventory page.
3. Click **Add to cart**.

#### Expected Result

The selected product is added to the cart and the cart badge displays **1**.

---

### TC-009 View Shopping Cart

| Field             | Value                                                             |
| ----------------- | ----------------------------------------------------------------- |
| Test Case ID      | TC-009                                                            |
| User Story        | US-003 Shopping Cart Management                                   |
| Title             | View Shopping Cart                                                |
| Priority          | High                                                              |
| Type              | Positive                                                          |
| Automation Status | Automated                                                         |
| Preconditions     | User is logged in and has added at least one product to the cart. |
| Test Data         | Product: Sauce Labs Backpack                                      |

#### Steps

1. Log in using a valid user.
2. Add **Sauce Labs Backpack** to the cart.
3. Open the shopping cart.

#### Expected Result

The Cart page is displayed and the selected product appears with the correct name and price.

---

### TC-012 Checkout With Valid Information

| Field             | Value                                                          |
| ----------------- | -------------------------------------------------------------- |
| Test Case ID      | TC-012                                                         |
| User Story        | US-004 Checkout Information                                    |
| Title             | Checkout With Valid Information                                |
| Priority          | High                                                           |
| Type              | Positive                                                       |
| Automation Status | Automated                                                      |
| Preconditions     | User is logged in and has at least one product in the cart.    |
| Test Data         | First Name: Ernesto / Last Name: Martinez / Postal Code: 44100 |

#### Steps

1. Log in using a valid user.
2. Add a product to the cart.
3. Open the shopping cart.
4. Click **Checkout**.
5. Enter valid checkout information.
6. Click **Continue**.

#### Expected Result

The user is redirected to the Checkout Overview page and the selected product is displayed.

---

### TC-016 Complete Purchase

| Field             | Value                                  |
| ----------------- | -------------------------------------- |
| Test Case ID      | TC-016                                 |
| User Story        | US-005 Order Confirmation              |
| Title             | Complete Purchase                      |
| Priority          | High                                   |
| Type              | Positive                               |
| Automation Status | Automated                              |
| Preconditions     | User is on the Checkout Overview page. |
| Test Data         | Product: Sauce Labs Backpack           |

#### Steps

1. Complete login with a valid user.
2. Add a product to the cart.
3. Complete checkout information.
4. Continue to the Checkout Overview page.
5. Click **Finish**.

#### Expected Result

The Checkout Complete page is displayed with the confirmation message:

```text
Thank you for your order!
```

---

### TC-017 Logout Successfully

| Field             | Value                                            |
| ----------------- | ------------------------------------------------ |
| Test Case ID      | TC-017                                           |
| User Story        | US-006 User Logout                               |
| Title             | Logout Successfully                              |
| Priority          | Medium                                           |
| Type              | Positive                                         |
| Automation Status | Automated                                        |
| Preconditions     | User is logged in.                               |
| Test Data         | Username: standard_user / Password: secret_sauce |

#### Steps

1. Log in using a valid user.
2. Open the application menu.
3. Click **Logout**.

#### Expected Result

The user is redirected back to the Login page and the Username field is displayed.
