
function setDefaults() {
    setDefaultsFullName();
}

function setDefaultsFullName() {
    document.getElementById("nombre-html").onkeyup = setFullName;
    document.getElementById("apellido-html").onkeyup = setFullName;
}

function setFullName() {
    document.getElementById("nc-html").value = document.getElementById("nombre-html").value + " " + document.getElementById("apellido-html").value;
}

setDefaults();