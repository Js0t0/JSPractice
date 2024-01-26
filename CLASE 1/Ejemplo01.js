
//Funcion calcularEdad
function calcularEdad() {


    //var textoIngresado = prompt("Ingresa tu edad");
    //const edad = parseInt(textoIngresado);

    const edad = parseInt(prompt("Ingresa tu edad"));
    
    //MANEJO DE DOM / HTML
    //Se define un elemento separador
    const separador = document.createElement("hr");
    //Se define un elemento parrafo
    let titulo = document.createElement("p");
    titulo.textContent = "Respuesta: "
    //Se define un elemento parrafo de respuesta
    let respuesta = document.createElement("p");
    
    //Se evalua el valor de la edad ingresada
    if (edad >= 18 && edad <= 100) {
        respuesta.textContent = "Tienes " + edad + " años, eres mayor de edad!";
    } else if (edad < 18 && edad >= 0) {
        respuesta.textContent = "Tienes " + edad + " años, eres menor de edad!";
    } else {
        respuesta.textContent = "Tienes " + edad + " años, tu edad es sospechosa!";
    }

    document.body.appendChild(separador);
    document.body.appendChild(titulo);
    document.body.appendChild(respuesta);
}

//Se llama a la funcion calcularEdad
//Se ejecuta al finalizar la carga del archivo JS
//calcularEdad();