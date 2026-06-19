Feature: Verify the place order functionality

Scenario: Verify place order
  Given the user is on the Login page
  When the user login using "shainug12345@gmail.com" and "Shainug@12345"
  When user add product "ZARA COAT 3" to the cart
  Then verify the product "ZARA COAT 3" in the cart
  When user enters the country name "India" and place order
  Then verify the order displayed in the orders page
  Then user logout from the application


