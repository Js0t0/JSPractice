let nombreJuguete = prompt("Ingrese el nombre del juguete");

let precioJuguete;

//Identificar el precio del juguete
switch(nombreJuguete){
    case 'Monopolio':
        precioJuguete = 70.99;
        break;
    case 'Ajedrez':
        precioJuguete = 78.99;
        break;
    case 'Lego':
        precioJuguete = 100.99;
        break;
    case 'Dama':
        precioJuguete = 58.50;
        break;
    case 'Laberinto':
        precioJuguete = 35.00;
        break;
    default:
        nombreJuguete = 'No reconocido';
        precioJuguete = 0;
        break;
}

const cantidadJuguete = parseInt(prompt("Ingrese la cantidad de juguetes que desea comprar"));

//Se identifica el porcentaje de descuento
if(cantidadJuguete <10){
    porcentajeDescuento = 0.035;
} else if(cantidadJuguete >= 10 && cantidadJuguete <= 20){
    porcentajeDescuento = 0.07;
} else if(cantidadJuguete > 20){
    porcentajeDescuento = 0.095;
}else{
    porcentajeDescuento = 0;
}


//Calcular el importe del descuento
let importeDescuento = cantidadJuguete * precioJuguete * porcentajeDescuento;
//Calcular el importe de la compra
let importeCompra = cantidadJuguete * precioJuguete;
//Calcular el importe a pagar
let importePago = importeCompra - importeDescuento;

//Pintamos el resultado
document.getElementById("resultado").innerHTML = ''+
'Resultado '+ 
'<br>Juguete comprado: ' + nombreJuguete + 
'<br>Precio del juguete comprado: ' + precioJuguete + 
'<br>Cantidad del juguete comprado: ' + cantidadJuguete + 
'<br>Importe de compra: ' + importeCompra +
'<br>Importe de descuento: ' + importeDescuento +
'<br>Importe de pago: ' + importePago;''

