let form = document.querySelector('form');

let errorMessages = {};

function displayError (name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.add('error');
}

function displaySuccess (name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove('error');
    elm.parentElement.classList.add('success');
}

function handleSubmit (event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const cnfPassword = elements.cnfPassword.value;

    if (username.value.length < 4) {
        errorMessages.username = "Username can't be less than 4 characters";
        displayError('username');
    } else {
        displaySuccess('username');
    }

    if (!isNaN(name)) {
        errorMessages.name = "Name can't be numbers";
        displayError('name');
    } else {
        displaySuccess('name');
    }

    if (!email.includes('@')) {
        errorMessages.email = "Email must contain @";
        displayError('email');
    } else if (email.length < 6) {
        errorMessages.email = "Email must be atleast 6 characters";
    } else {
        displaySuccess('email');
    }

    if (isNaN(phone)) {
        errorMessages.phone = "Phone numbers can be only number";
        displayError('phone');
    } else if (phone.length < 7) {
        errorMessages.email = "Phone must be atleast 7 characters";
    } else {
        displaySuccess('phone');
    }

    if (password !== cnfPassword) {
        errorMessages.password = "Password must match with Confirm Password";
        errorMessages.cnfPassword = "Password must match with Confirm Password";
        displayError("password");
        displayError('cnfPassword');
    } else {
        displaySuccess("password");
        displaySuccess("cnfPassword");
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