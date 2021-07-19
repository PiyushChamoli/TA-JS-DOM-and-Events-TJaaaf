let form = document.querySelector('form');

let usernameError = '';
let nameError = '';
let emailError = '';
let phoneError = '';
let passwordError = '';

function handleSubmit (event) {
    event.preventDefault();
    let username = event.target.elements.username;
    let name = event.target.elements.name;
    let email = event.target.elements.email;
    let phone = event.target.elements.phone;
    let password = event.target.elements.password;
    let cnfPassword = event.target.elements.cnfPassword;

    if (username.value.length < 4) {
        usernameError = "Can't be less than 4 characters";
    }
    username.nextElementSibling.innerText = usernameError;

    if (!email.value.split('').includes('@')) {
        emailError = "Should contain @";
        email.nextElementSibling.innerText = emailError;
    }
}

form.addEventListener('submit', handleSubmit);



// Rules for form validation:

// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same.
// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers