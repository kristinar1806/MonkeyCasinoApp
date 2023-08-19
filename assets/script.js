function clearErrorMessageOnInput(inputElement, errorElement) {
    inputElement.addEventListener('input', function() {
      errorElement.textContent = ''; 
    });
  }

function validateForm() {
    const firstnameInput = document.getElementById('first-name');
    const lastnameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');

    const firstnameError = document.getElementById('firstnameError');
    const lastnameError = document.getElementById('lastnameError');
    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passwordMatchError = document.getElementById('passwordMatchError');

    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;


    if (firstname.length === 0) {
        firstnameError.textContent = 'First Name is required.';
    }
    else {
        firstnameError.textContent = '';
    }

    if (lastname.length === 0) {
      lastnameError.textContent = 'Last Name is required.';
    }
    else {
        lastnameError.textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      emailError.textContent = 'Invalid email format.';
    }
    else {
        emailError.textContent = '';
    }

    if (!username) {
      usernameError.textContent = 'Username is required.';
    }
    else {
        usernameError.textContent = '';
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (!username.match(usernameRegex)) {
      usernameError.textContent = 'Username must contain at least 3 characters, consisting of letters, numbers, or underscores.';
    }
    else {
        usernameError.textContent = '';
    }

    if (!password || !passwordConfirm) {
        passwordMatchError.textContent = 'Password and Confirm Password are required.';
      }
     else if (password !== passwordConfirm) {
        passwordMatchError.textContent = 'Passwords do not match.';
      }
      else {
        passwordMatchError.textContent = '';
    }

    clearErrorMessageOnInput(firstnameInput, firstnameError);
    clearErrorMessageOnInput(lastnameInput, lastnameError);
    clearErrorMessageOnInput(emailInput, emailError);
    clearErrorMessageOnInput(usernameInput, usernameError);
    clearErrorMessageOnInput(passwordInput, passwordMatchError);
    clearErrorMessageOnInput(passwordConfirmInput, passwordMatchError);

    emailInput.addEventListener('input', function() {
        validateEmail(email, emailError);
    });
    
    passwordInput.addEventListener('input', function() {
        validatePassword(password, passwordConfirm, passwordMatchError);
    });
    
    passwordConfirmInput.addEventListener('input', function() {
        validatePassword(password, passwordConfirm, passwordMatchError);
    });

    const registerButton = document.getElementById('register');

    registerButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (
        firstnameError.textContent === '' &&
        lastnameError.textContent === '' &&
        emailError.textContent === '' &&
        usernameError.textContent === '' &&
        passwordMatchError.textContent === ''
    ) {
        console.log('Before redirecting to successpage.html');
        window.location.href = 'successpage.html';
    }
});

}

const translations = {
    en: {
        formHeaderLabel: 'Registration form',
        firstNameLabel: 'First name:',
        lastNameLabel: 'Last name:',
        emailLabel: 'Email:',
        usernameLabel: 'Username:',
        passwordLabel: 'Password:',
        confirmPasswordLabel: 'Confirm password:',
        termsLabel: 'I accept Terms and Conditions.',
        register: 'Register'
    },
    mne: {
        formHeaderLabel: 'Registraciona forma',
        firstNameLabel: 'Ime:',
        lastNameLabel: 'Prezime:',
        emailLabel: 'Email:',
        usernameLabel: 'Korisničko ime:',
        passwordLabel: 'Lozinka:',
        confirmPasswordLabel: 'Potvrda lozinke:',
        termsLabel: 'Prihvatam uslove korišćenja.',
        register: 'Registruj se'
    }
};


function applyTranslations(language) {
    const translation = translations[language];
    if (translation) {
        document.getElementById('formHeaderLabel').textContent = translation.formHeaderLabel;
        document.getElementById('firstNameLabel').textContent = translation.firstNameLabel;
        document.getElementById('lastNameLabel').textContent = translation.lastNameLabel;
        document.getElementById('emailLabel').textContent = translation.emailLabel;
        document.getElementById('usernameLabel').textContent = translation.usernameLabel;
        document.getElementById('passwordLabel').textContent = translation.passwordLabel;
        document.getElementById('confirmPasswordLabel').textContent = translation.confirmPasswordLabel;
        document.getElementById('termsLabel').textContent = translation.termsLabel;
        document.getElementById('register').textContent = translation.register;
    }
}


function changeLanguageAndLoad(language) {
    applyTranslations(language);
}


const englishButton = document.getElementById('english');
const montenegrinButton = document.getElementById('montenegrin');

englishButton.addEventListener('click', function() {
    changeLanguageAndLoad('en');
});

montenegrinButton.addEventListener('click', function() {
    changeLanguageAndLoad('mne');
});





