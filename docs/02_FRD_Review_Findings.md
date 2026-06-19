# FRD Review Findings

## Review Summary

The Customer Checkout Journey epic was reviewed from a QA perspective to identify ambiguities, missing business rules, assumptions, and potential risks before test design activities begin.

## Questions for Product Owner

### Q-001 Login Credentials

The requirements mention valid credentials.

Questions:

- Which user roles are supported?
- What credentials are considered valid?
- Are invalid login attempts limited?

### Q-002 Product Selection

The requirements indicate that products can be added to the cart.

Questions:

- Is there a maximum number of products allowed?
- Can the same product be added multiple times?
- Should inventory availability be validated?

### Q-003 Shopping Cart Review

The requirements indicate that product details should be displayed.

Questions:

- Which product details should be displayed?
- Should product quantities be editable?
- Can products be removed from the cart?

### Q-004 Checkout Information

The requirements indicate that required checkout information must be provided.

Questions:

- Which fields are mandatory?
- Are there format validations?
- Are field length restrictions defined?

### Q-005 Order Confirmation

The requirements indicate that a confirmation message should be displayed.

Questions:

- Should an order number be generated?
- Should the order details be displayed?
- Should confirmation be persisted?

### Q-006 User Logout

The requirements indicate that the user can log out.

Questions:

- Should the user session be terminated immediately?
- Should browser back navigation be prevented after logout?