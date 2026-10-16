# Test Cases - Login Page

**Application URL:** https://practicetestautomation.com/practice-test-login/
**Valid credentials:** student / Password123

| TC ID | Type | Test Scenario | Test Steps | Test Data | Expected Result |
|-------|------|---------------|------------|-----------|-----------------|
| TC01 | Positive | Verify login page loads with all fields | 1. Open the login page | NA | Page title has "Test Login". Username field, Password field and Submit button are displayed |
| TC02 | Positive | Verify user can login with valid credentials | 1. Open the login page<br>2. Enter valid username<br>3. Enter valid password<br>4. Click Submit | Username: student<br>Password: Password123 | User is redirected to the logged-in-successfully page. "Logged In Successfully" heading, "Congratulations student. You successfully logged in!" message and Log out button are displayed |
| TC03 | Positive | Verify password is masked in the password field | 1. Open the login page<br>2. Enter password | Password: Password123 | Password field type is "password", so the entered text is hidden |
| TC04 | Positive | Verify user can login after a failed attempt | 1. Open the login page<br>2. Login with wrong password<br>3. Login again with valid credentials | Username: student<br>Password: wrongPassword, then Password123 | Error message is shown for the first attempt. Second attempt logs the user in successfully |
| TC05 | Positive | Verify logout takes user back to login page | 1. Login with valid credentials<br>2. Click Log out | Username: student<br>Password: Password123 | User is redirected back to the login page |
| TC06 | Negative | Verify error message for invalid username | 1. Open the login page<br>2. Enter invalid username and valid password<br>3. Click Submit | Username: incorrectUser<br>Password: Password123 | "Your username is invalid!" is displayed and user stays on the login page |
| TC07 | Negative | Verify error message for invalid password | 1. Open the login page<br>2. Enter valid username and invalid password<br>3. Click Submit | Username: student<br>Password: incorrectPassword | "Your password is invalid!" is displayed and user stays on the login page |
| TC08 | Negative | Verify error message when username and password are empty | 1. Open the login page<br>2. Leave both fields empty<br>3. Click Submit | Blank | "Your username is invalid!" is displayed and user stays on the login page |
| TC09 | Negative | Verify error message when password is empty | 1. Open the login page<br>2. Enter valid username and leave password empty<br>3. Click Submit | Username: student<br>Password: blank | "Your password is invalid!" is displayed and user stays on the login page |
| TC10 | Negative | Verify password is case sensitive | 1. Open the login page<br>2. Enter valid username and the password in lowercase<br>3. Click Submit | Username: student<br>Password: password123 | "Your password is invalid!" is displayed and user stays on the login page |

All 10 test cases are automated in `tests/login.spec.js`.
