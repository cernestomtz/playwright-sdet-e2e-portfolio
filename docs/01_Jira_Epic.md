# EPIC-001 Customer Checkout Journey

## Epic Summary

Allow customers to complete a purchase from login through order confirmation using the SauceDemo e-commerce platform.

## Business Goal

Increase confidence in the end-to-end checkout process by validating the critical purchasing workflow.

## Scope

The checkout journey includes the following business capabilities:

- User authentication
- Product browsing
- Product selection
- Shopping cart management
- Checkout information capture
- Order confirmation
- User logout

## Out of Scope

The following capabilities are not included in this release:

- User registration
- Password recovery
- Payment gateway integration
- Order history
- User profile management

## Success Criteria

The epic will be considered complete when:

- A user can successfully log in
- A user can add products to the cart
- A user can complete the checkout process
- A confirmation message is displayed after purchase
- The user can log out successfully



## User Stories

### US-001 User Login

As a customer,
I want to log in with valid credentials,
So that I can access the product catalog.

### US-002 Product Selection

As a customer,
I want to browse and select products,
So that I can purchase items I am interested in.

### US-003 Shopping Cart Management

As a customer,
I want to review products in my cart,
So that I can verify my purchase before checkout.

### US-004 Checkout Information

As a customer,
I want to provide my personal information,
So that I can complete the purchase process.

### US-005 Order Confirmation

As a customer,
I want to receive a confirmation message,
So that I know my order was successfully placed.

### US-006 User Logout

As a customer,
I want to log out securely,
So that my account remains protected.   


## Acceptance Criteria

### AC-001 User Login

Given the customer is on the login page,  
When the customer enters valid credentials,  
Then the customer should be redirected to the product inventory page.

### AC-002 Product Selection

Given the customer is on the inventory page,  
When the customer adds a product to the cart,  
Then the selected product should be added successfully and the cart badge should be updated.

### AC-003 Shopping Cart Review

Given the customer has added at least one product to the cart,  
When the customer opens the shopping cart,  
Then the cart page should display the selected product details.

### AC-004 Checkout Information

Given the customer is on the checkout information page,  
When the customer enters required checkout information,  
Then the customer should be able to continue to the order overview page.

### AC-005 Order Confirmation

Given the customer is on the order overview page,  
When the customer completes the purchase,  
Then the system should display an order confirmation message.

### AC-006 User Logout

Given the customer is logged in,  
When the customer logs out,  
Then the customer should be redirected to the login page.