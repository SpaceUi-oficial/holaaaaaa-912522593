document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, ingrese un email válido.';
    } else {
        emailError.textContent = '';
    }

    // Validar Contraseña
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (!validatePassword(password)) {
        passwordError.textContent = 'La contraseña no cumple con los requisitos.';
    } else {
        passwordError.textContent = '';
    }

    // Validar Teléfono
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (!validatePhone(phone)) {
        phoneError.textContent = 'Por favor, ingrese un número de teléfono válido.';
    } else {
        phoneError.textContent = '';
    }

    // Validar Tarjeta de Crédito
    const creditCard = document.getElementById('creditCard').value;
    const creditCardError = document.getElementById('creditCardError');
    if (!validateCreditCard(creditCard)) {
        creditCardError.textContent = 'Por favor, ingrese un número de tarjeta válido.';
    } else {
        creditCardError.textContent = '';
    }

    // Validar Fecha Expiración
    const expiryDate = document.getElementById('expiryDate').value;
    const expiryDateError = document.getElementById('expiryDateError');
    if (!validateExpiryDate(expiryDate)) {
        expiryDateError.textContent = 'Formato incorrecto. Ingrese MM/AA.';
    } else {
        expiryDateError.textContent = '';
    }

    // Validar CVV
    const cvv = document.getElementById('cvv').value;
    const cvvError = document.getElementById('cvvError');
    if (!validateCVV(cvv)) {
        cvvError.textContent = 'El CVV debe tener 3 dígitos.';
    } else {
        cvvError.textContent = '';
    }

    // Validar Código Postal
    const postalCode = document.getElementById('postalCode').value;
    const postalCodeError = document.getElementById('postalCodeError');
    if (!validatePostalCode(postalCode)) {
        postalCodeError.textContent = 'Por favor, ingrese un código postal válido.';
    } else {
        postalCodeError.textContent = '';
    }
    // Validar Fecha de Nacimiento
    const birthdate = new Date(document.getElementById('birthdate').value);
    const birthdateError = document.getElementById('birthdateError');
    const currentYear = new Date().getFullYear();
    if (birthdate.getFullYear() > currentYear) {
        birthdateError.textContent = 'La fecha de nacimiento no puede ser en el futuro.';
    } else {
        birthdateError.textContent = '';
    }

    // Validar Género
    const genderError = document.getElementById('genderError');
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderError.textContent = 'Por favor, seleccione su género.';
    } else {
        genderError.textContent = '';
    }

    // Validar Términos y Condiciones
    const terms = document.getElementById('terms').checked;
    const termsError = document.getElementById('termsError');
    if (!terms) {
        termsError.textContent = 'Debe aceptar los términos y condiciones.';
    } else {
        termsError.textContent = '';
    }
});

// Funciones de validación
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/; // Sin carácter especial
    return re.test(password);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function validateCreditCard(number) {
    return number.length === 16 && !isNaN(number);
}

function validateExpiryDate(date) {
    const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/AA
    return re.test(date);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}

function validatePostalCode(code) {
    return /^\d{4,6}$/.test(code);
}
