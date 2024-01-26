
//Funcion que captura el numero ingresado y genera la tabla de multiplicar del numero
function mostrarTablaMultiplicar(){
    const numero = parseInt(prompt("Ingrese numero: "));
    generarTablaMultiplicar(numero);
}

//Funcion que genera la tabla de multiplicar del numero indicado
function generarTablaMultiplicar(numero){
    
    let resultado = "";

    for(var i=1; i<=12; i++){
        resultado = resultado + i + " (por) " + numero +" = " + (i*numero) + "\n";
    }

    alert(resultado);
}

//Funcion que captura los numeros y el operador ingresado y realiza la operacion
function operarNumeros(){

    const numero1 = parseInt(document.getElementById("txtOperacionNumero1").value);
    const numero2 = parseInt(document.getElementById("txtOperacionNumero2").value);
    const operador = document.getElementById("cboOperador").value;

    let resultado = 0;

    //Validamos que los numeros ingresados sean correctos
    if(isNaN(numero1) || isNaN(numero2)){
        resultado = "Error";
    }else{
        switch(operador){
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                resultado = numero1 / numero2;
                break;
            default:
                resultado = "Error";
                break;
        }
    }
    
    document.getElementById("txtOperacion").value = "El resulado es: " + resultado;
}

function determinarNumeroPrimo(numero){

    let resultado = "Si es primo";

    if(isNaN(numero)){
        resultado = "Error";
    }else{

        for(var i=2; i<numero;i++){
            
            if(numero%i==0){
                resultado = "No es primo";
                break;
            }

        }

    }

    document.getElementById("txtResultadoNumeroPrimo").value = "El resulado es: " + resultado;

}

function determinarPalindroma(palabra){
    
    const arregloOrdenOriginal = palabra.split('');
    /* texto palabra = abccd */
    /* arregloOrdenOriginal = ['a','b','c','c','d']*/


    const arregloOrdenCambiado = palabra.split('').reverse();
    /* texto palabra = abccd */
    /* arregloOrdenOriginal = ['a','b','c','c','d']*/
    /* reverse => arregloOrdenCambiado = ['d','c','c','b','a']*/

    let resultado = "Si es palindroma";

    for(var i=0; i<arregloOrdenOriginal.length; i++){
        
        if(arregloOrdenOriginal[i] != arregloOrdenCambiado[i]){
            resultado = "No es palindroma";
            break;
        }
    }

    document.getElementById("txtResultadoPalindroma").value = "El resulado es: " + resultado;

}

function validarPermiso(edad){

    let resultado = "No tienes permiso";

    if(isNaN(edad)){
        resultado = "Error";
    }else{
        if(edad<18){
            resultado = "Eres menor de edad, no tienes permiso";
        }else{
            if(confirm("Solicitaste permiso a tus padres?")){
                resultado = "Si tienes permiso";
            }else{
                resultado = "No tienes permiso";
            }
        }
    }

    document.getElementById("txtPermiso").value = "El resulado es: " + resultado;
}