function setDefaults() {
    document.getElementById("nombre-js").onkeyup = validateName;
    document.getElementById("apellido-js").onkeyup = validateSurname;
    document.getElementById("edad-js").onkeyup = validateAge;
    document.getElementById("email-js").onkeyup = validateEmail;
    document.getElementById("password-js").onkeyup = validatePassword;
    document.getElementById("aceptar-terminos-js").onchange = validateAceptarTerminos;
}

function setFullName() {
    document.getElementById("nc-js").value = document.getElementById("nombre-js").value + " " + document.getElementById("apellido-js").value;
}

function validateName(event) {
    setFullName();
    let nameElement = document.getElementById("nombre-js");
    let name = nameElement.value;
    let errorElement = document.getElementById("nombre-js-error");
    if (name == "" || !name) {
        errorElement.innerText = "El campo nombre es requerido";
        nameElement.className = "form-control invalid";
        return false;
    } else if (name.length < 2) {
        errorElement.innerText = "El nombre debe ser mayor de 2 caracteres";
        nameElement.className = "form-control invalid";
        return false;
    } else if (name.length > 30) {
        errorElement.innerText = "El nombre debe ser menor de 30 caracteres";
        nameElement.className = "form-control invalid";
        return false;
    } else if (!(/^[a-zA-Z ]{2,30}$/.test(name))) {
        errorElement.innerText = "El nombre solo puede contener letras mayúsculas y minúsculas";
        nameElement.className = "form-control invalid";
        return false;
    } else {
        errorElement.innerText = "";
        nameElement.className = "form-control valid";
        return true;
    }
}

function validateSurname(event) {
    setFullName();
    let surnameElement = document.getElementById("apellido-js");
    let surname = surnameElement.value;
    let errorElement = document.getElementById("apellido-js-error");
    if (surname == "" || !surname) {
        errorElement.innerText = "El campo apellido es requerido";
        surnameElement.className = "form-control invalid";
        return false;
    } else if (surname.length < 2) {
        errorElement.innerText = "El apellido debe ser mayor de 2 caracteres";
        surnameElement.className = "form-control invalid";
        return false;
    } else if (surname.length > 30) {
        errorElement.innerText = "El apellido debe ser menor de 30 caracteres";
        surnameElement.className = "form-control invalid";
        return false;
    } else if (!(/^[a-zA-Z ]{2,30}$/.test(surname))) {
        errorElement.innerText = "El apellido solo puede contener letras mayúsculas y minúsculas";
        surnameElement.className = "form-control invalid";
        return false;
    } else {
        errorElement.innerText = "";
        surnameElement.className = "form-control valid";
        return true;
    }
}

function validateAge(event) {
    let ageElement = document.getElementById("edad-js");
    let age = ageElement.value;
    let errorElement = document.getElementById("edad-js-error");
    if (isNaN(age)) {
        errorElement.innerText = "Ingrese un número";
        ageElement.className = "form-control invalid";
        return false;
    } else if (age < 0) {
        errorElement.innerText = "La edad no puede ser menor que 0 años";
        ageElement.className = "form-control invalid";
        return false;
    } else if (age > 150) {
        errorElement.innerText = "La edad no puede ser mayor que 150 años";
        ageElement.className = "form-control invalid";
        return false;
    } else {
        errorElement.innerText = "";
        ageElement.className = "form-control valid";
        return true;
    }
}

function validateEmail(event) {
    let emailElement = document.getElementById("email-js");
    let email = emailElement.value;
    let errorElement = document.getElementById("email-js-error");
    if (email == "" || !email) {
        errorElement.innerText = "El campo email es requerido";
        emailElement.className = "form-control invalid";
        return false;
    } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase()))) {
        errorElement.innerText = "Ingrese un correo válido";
        emailElement.className = "form-control invalid";
        return false;
    } else {
        errorElement.innerText = "";
        emailElement.className = "form-control valid";
        return true;
    }
}

function validatePassword(event) {
    let passwordElement = document.getElementById("password-js");
    let password = passwordElement.value;
    let errorElement = document.getElementById("password-js-error");
    if (password == "" || !password) {
        errorElement.innerText = "El campo password es requerido";
        passwordElement.className = "form-control invalid";
        return false;
    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password))) {
        errorElement.innerText = "El password debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial, adicionalmente debe tener 8 caracteres o más";
        passwordElement.className = "form-control invalid";
        return false;
    } else {
        errorElement.innerText = "";
        passwordElement.className = "form-control valid";
        return true;
    }
}

function validateAceptarTerminos(event) {
    let aceptarTerminosElement = document.getElementById("aceptar-terminos-js");
    let aceptarTerminos = aceptarTerminosElement.checked;
    let errorElement = document.getElementById("aceptar-terminos-js-error");
    if (!aceptarTerminos) {
        errorElement.innerText = "Debe aceptar términos y condiciones para continuar";
        return false;
    } else {
        errorElement.innerText = "";
        return true;
    }
}

function enviarFormulario() {
    if (!validateName() || !validateSurname() || !validateAge() || !validateEmail() || !validatePassword() || !validateAceptarTerminos())
        alert("Revise el formulario, hay campos erroneos");
    else 
        alert("Felicidades, ha llenado correctamente el formulario, el mismo fue enviado...");
}

setDefaults();