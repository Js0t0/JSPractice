function calcularImportes(){

    //MANEJO DE DOM - Elementos de HTML
    const jugueteSeleccionado = document.getElementById("cboJuguete");
    const precioJuguete = parseFloat(jugueteSeleccionado.value);
    const nombreJuguete = jugueteSeleccionado.options[jugueteSeleccionado.selectedIndex].text;
    const cantidadJuguete = parseInt(document.getElementById("txtCantidadJuguetes").value);

    let porcentajeDescuento = 0;

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
    '<br>Importe de pago: ' + importePago;
    
}