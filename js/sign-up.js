/* Description: Main JavaScript File for Sign Up page */

/*********************
** Form Validation **
********************/

// Get form and inputs
const form = document.querySelector('form')
const _name = form.querySelector('#name')
const email = form.querySelector('#email')
const password = form.querySelector('#password')
const terms = form.querySelector('#terms')

// RegExp for inputs
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameFormat = /^[a-zA-Z ]{2,}$/
const passwordFormat = /^[a-zA-Z0-9 ]{3,}$/

// Functions
function verifyEmail() {
    if (email.value.match(emailFormat)) {
        email.classList.add('success')
        return true
    } else {
        email.classList.add('error')
        return false
    }
}

function verifyName() {
    if (_name.value.match(nameFormat)) {
        _name.classList.add('success')
        return true
    } else {
        _name.classList.add('error')
        return false
    }
}

function verifyPassword() {
    if (password.value.match(passwordFormat)) {
        password.classList.add('success')
        return true
    } else {
        password.classList.add('error')
        return false
    }

}

function verifyTerms() {
    if (terms.checked) {
        terms.classList.add('success')
        return true
    } else {
        terms.classList.add('error')
        return false
    }
}

function verifyInputs(event) {
    event.preventDefault();

    if (verifyName() && verifyEmail() && verifyPassword() && verifyTerms()) {
        location.href = "../index.html"
    }
}

// on form submit, verify the inputs
form.addEventListener('submit', verifyInputs);


/************************
** Show/Hide Password **
***********************/

// get show/hide password button
const hidePasswordBtn = form.querySelector('#hide-password')

function showOrHidePassword() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
}

hidePasswordBtn.addEventListener('click', showOrHidePassword)


/************************
 ** Fake Image Slider **
***********************/

// get the list of bullets
const bullets = document.querySelectorAll('.bullets>li')

// loop through all the bullets
bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        // remove the current active
        document.querySelector('li.active').classList.remove('active')
        // add active class to the newly clicked bullet
        bullet.classList.add('active')
    })
})