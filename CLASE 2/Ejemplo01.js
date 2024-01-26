//Obtiene la fecha actual del sistema local (de la PC o dispositivo)
const fechaActual = new Date();

//Arreglos para escribir en letras los meses y dias
const arregloMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const arregloDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//Prueba de ejecucion de lineas de codigo
console.log('El flujo de ejecucion paso por aqui');

function mostrarFechaYHora(){
    document.getElementById("txtFechaYHora").value = fechaActual.toLocaleString();
}

function mostrarAnio(){
    document.getElementById("txtAnio").value = fechaActual.getFullYear();
}

function mostrarMes(){
    document.getElementById("txtMes").value = arregloMeses[fechaActual.getMonth()];
}

function mostrarDia(){
    document.getElementById("txtDia").value = arregloDiasSemana[fechaActual.getDay()];
}

function mostrarFechaEnLetras(){
    document.getElementById("txtFechaEnLetras").value = arregloDiasSemana[fechaActual.getDay()] + ", " + fechaActual.getDate() + " de " + arregloMeses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear();
}

/*
    mostrarFechaYHora();
    mostrarAnio();
    mostrarMes();
    mostrarDia();
    mostrarFechaEnLetras();
*/
