function calImportes() {
  const slcJuguete = document.getElementById("slcJuguete");
  const prcJuguete = parseFloat(slcJuguete.value);
  const nombreJuguete = slcJuguete.options[slcJuguete.selectedIndex].text;
  const cantdJuguete = parseInt(
    document.getElementById("txtCantJuguete").value
  );

  let disc = 0;

    if ( cantdJuguete < 10 ){
        disc = 3.5/100;
    } else if (10 <= cantdJuguete && cantdJuguete <= 20){
        disc = 7.0/100;
    } else if ( cantdJuguete > 20 ){
        disc = 9.5/100;
    } else{
        disc = 0;
    }

  let discTotal = cantdJuguete * prcJuguete * disc;
  let payTotal = cantdJuguete * prcJuguete - discTotal;

  console.log('Juguete Elegido: ', nombreJuguete);
  console.log('Precio x Unidad: ', prcJuguete);
  console.log('Cantidad: ', cantdJuguete);
  console.log('Precio Total: ', cantdJuguete * prcJuguete);
  console.log('Porcentaje de Descuento: ', parseFloat(disc*100).toFixed(1), '%');
  console.log('Pago Total: ', payTotal);

  document.getElementById('resultado').innerHTML=''+
  'Juguete elegido: ' + nombreJuguete +
  '<br>Precio x Unidad: ' + prcJuguete +
  '<br>Cantidad: ' + cantdJuguete +
  '<br>Precio Total Sin Descuento : ' + cantdJuguete*prcJuguete  +
  '<br>Porcentaje de Descuento: ' + parseFloat(disc*100).toFixed(1) + '%' +
  '<br>Pago Total: ' + payTotal;
  
}
