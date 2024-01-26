/*FUNCIONES PARA VALIDAR CAMPOS DE FORMULARIOS

is_null(valor)						//Valida que el campo no sea nulo
validateName(name)					//Valida que un campo contenga solo letras (como nombre o apellido)

validateZipCode(num) 				//Valida el formato del Codigo Postal (5 dígitos)
validatePhone(num)					//Valida el formato del Telefono (10 dígitos)
validateAge(num)					//Valida el formato de la Edad (1 a 99 años)
correct_children					//Verifica que el número de hijos sea un número entero entre 1 y 99

validateDates(day, month, year)		//Valida que la fecha sea correcta
validateDateFormat(date)			//Valida formato de fecha dd/mm/aaaa en un texto
correct_day(day)					//Valida que el día sea un entero entre 1 y 31
correct_month(month)				//Valida que el mes sea un entero entre 1 y 12

validateEmails(email)				//Valida formato del email

validatePasswords(password)			//Valida seguridad del password (Mayusc, Minusc, Número, Símbolo)
matchPasswords(pass1, pass2)		//Valida que 2 cadenas de texto coincidan

*/

//---------------------CAMPOS DE TEXTO------------------------------------------------------------

//Valida que el campo no sea nulo
function is_null(valor)
{
	return (valor.length > 0);
}

//valida campo username, letras, numeros,  punto y guiones
function validateUsername(username)
{
	var patt=new RegExp("^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ_.-]{2,45}$");
	
	return (patt.test(username));
	
}

//Valida que un campo contenga solo letras (como nombre o apellido)
function validateName(name)
{
	var patt=new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ\ ]{1,256}$");
	
	return (patt.test(name));
}


//---------------------NUMEROS------------------------------------------------------------

//Valida el formato del Codigo Postal (5 dígitos)
function validateZipCode(num)
{
	var patt=new RegExp("^([1-9]{2}|[0-9]?[1-9]|[1-9][0-9])[0-9]{3}$");
	//RegExPattern = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;    
	return (patt.test(num)) ? true : false;
}

//Valida el formato del Telefono (10 dígitos)
function validatePhone(num)
{
	var patt=new RegExp("^[0-9()-\ ]{8,25}$");
	return (patt.test(num)) ? true : false;
}

//Valida formato de la Edad (de 1 a 99)
function validateAge(num)	
{
	var patt=new RegExp("^[1-9]?[0-9]$");
	return (patt.test(num)) ? true : false;
}

//Verifica que el número de hijos sea un número entero entre 1 y 99
function correct_children(children)
{
	return (children >= 0 && children <= 99);
}

function isInteger(text)
{
   var numbers="0123456789";
   for(i=0; i<text.length; i++){
      if (numbers.indexOf(text.charAt(i),0) == -1){
         return false;
      }
   }
   return true;
}

function allowOnlyNum(e) { // 1
	tecla = (document.all) ? e.keyCode : e.which; // 2
	if (tecla==8) return true; // 3
	if (tecla==9) return true; // 3
	if (tecla==11) return true; // 3
	patron = /[0-9]+/; // 4
 
	te = String.fromCharCode(tecla); // 5
	return patron.test(te); // 6
}

//---------------------FECHAS------------------------------------------------------------

//Valida que la fecha sea correcta
function validateDates(day, month, year)
{
	//Expresiones Regulares para validar la entrada de los campos 
	var patt_day=new RegExp("^[0-2][0-9]|[3][0-1]$");
	if (!patt_day.test(day)) return false;

	var patt_month=new RegExp("^[0-1][0-9]|[1][0-2]$");
	if (!patt_month.test(month)) return false;

	var patt_year=new RegExp("^[1-2][0-9][0-9][0-9]$");
	if (!patt_year.test(year)) return false;

	day == parseInt(day);
	month == parseInt(month);
	year == parseInt(year);

	//Verifica que el dia este entre 1 y 31, el mes entre 1 y 12 y el año entre 1900 y 2100
	if ( (day <= 0 || day > 31) || (month <= 0 || month > 12) || (year <= 1900 || year >= 2100))
	{
		return false;
	}
	//Verifica que Feb, Abr, Jun, Sep y Nov NO tengan 31 días
	else if ( day == 31 && ( month == 2 || month == 4 || month == 6 || month == 9 || month == 11 ))
	{ 
		return false;
	}
	//Verifica que Febrero no tenga 30 días
	else if ( day == 30 && month == 2 )
	{
		return false;
	}
	//Verifica que Febrero solo pueda tener 29 días en un año bisiesto
	else if ( day == 29 && month == 2 && !isLeapYear(year) )
	{
		return false;
	}
	else
	{
		return true;
	}
	
}

//Valida formato de fecha dd/mm/aaaa en un texto
function validateDateFormat(date)
{
	
	//var patt=new RegExp("^\d{1,2}\/\d{1,2}\/\d{2,4}$");
	var patt=new RegExp("^[0-3][0-9]\/[0-1][0-9]\/[1-2][0-9][0-9][0-9]$"); // \/\d{1,2}\/\d{2,4}
	
	if (patt.test(date))
	{ 
		day = date.substring(0,2);
		month = date.substring(3,5);
		year = date.substring(6,10); 
		
		return validateDates(day, month, year);
	}
	else
	{
		return false;
	}
}

// Verificación de año bisiesto
function isLeapYear(anio)
{
  return (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0));
}

//Verifica que el día de una fecha sea un número entero entre 1 y 31
function correct_day(day)
{
	return (day >= 1 && day <= 31);
}

//Verifica que el mes de una fecha sea un número entero entre 1 y 12
function correct_month(month)
{
	return (month >= 1 && month <= 12);
}

//---------------------EMAIL------------------------------------------------------------

//Verifica si una cadena de texto que se pasa como parámetro contiene un formato de e-mail válido
function validateEmails(email)
{
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
		return false;
	return true;
}

//Verifica si dos cadenas de texto que se pasan como parámetros son iguales
function matchEmails(email1, email2)
{
	if ( email1 == email2 ) return true;
	
	return false;
}

//---------------------PASSWORD------------------------------------------------------------

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un número, una minúscula, 
//una mayúscula, un simbolo y una longitud mayor a 6 caracteres.s
function validatePasswords(password)
{
	if (haveNumbers(password) && haveLowercase(password) && haveUppercase(password) && haveSigns(password) && password.length >= 6)
		return true;	
	return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un número
function haveNumbers(text)
{
   var numbers="0123456789";
   for(i=0; i<text.length; i++){
      if (numbers.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un caracter en Minúscula
function haveLowercase(text)
{
   var letters="abcdefghyjklmnñopqrstuvwxyzáéíóú";   
   for(i=0; i<text.length; i++){
      if (letters.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un caracter en Mayúscula
function haveUppercase(text)
{
   var letters="ABCDEFGHYJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ";
   for(i=0; i<text.length; i++){
      if (letters.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un signo
function haveSigns(text)
{
   //signos que se deben incluir en el texto (No contiene " , < , > , / por seguridad)
   var signs = "!\"#$%&')(*+,-_./:;>=<?@][^}{|~\\";
   for(i=0; i<text.length; i++){
      if (signs.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si dos cadenas de texto que se pasan como parámetros son iguales
function matchPasswords(pass1, pass2)
{
	if ( pass1 == pass2 ) return true;
	
	return false;
}

//---------------------PRUEBAS------------------------------------------------------------

function validateUserForm()
{
	
	if ( !validateEmails(email.value) )
	{
		alert('El e-mail es incorrecto');
		email.focus();
		return false;
	}
	
	if ( !matchEmails(email.value, repite_email.value))
	{
		alert('Los E-mails no coinciden');
		repite_email.focus();
		return false;
	}

	if ( !validateUsername(username.value) )
	{
		alert('El nombre de usuario tiene formato incorrecto \nIntroduzca sólo caracteres alfa-numéricos, punto y guiones');
		username.focus();
		return false;
	}
	
	if ( !validatePasswords(password.value))
	{
		alert('El password es demasiado debil \nIntroduzca mínimo 6 caracteres, al menos un número, una minúscula, una mayúscula y un símbolo');
		password.focus();
		return false;
	}
	
	if ( !matchPasswords(password.value, confirmacion_password.value))
	{
		alert('Las contraseñas no coinciden');
		confirmacion_password.focus();
		return false;
	}

	
	if ( !validateName(nombre.value))
	{
		alert('Formato del Nombre no válido\nSólo letras');
		nombre.focus();
		return false;
	}
	
	if ( !validateName(apellido.value))
	{
		alert('Formato del Apellido no válido\nSólo letras');
		apellido.focus();
		return false;
	}
	
	if ( cp.value != "")
	{
		if ( !validateZipCode(cp.value) )
		{
			alert('Formato de Código Postal No valido');
			cp.focus();
			return false;
		}
	}

	if ( cp2.value != "")
	{
		if ( !validateZipCode(cp2.value) )
		{
			alert('Formato de Código Postal No valido');
			cp2.focus();
			return false;
		}
	}

	if ( telefono.value != "" )
	{
		if ( !validatePhone(telefono.value) )
		{
			alert('Formato de teléfono No valido\nIngrese 10 dígitos sin espacios ni guiones');
			telefono.focus();
			return false;
		}
	}

	if ( mobile.value != "" )
	{
		if ( !validatePhone(mobile.value) )
		{
			alert('Formato de teléfono No valido\nIngrese 10 dígitos sin espacios ni guiones');
			mobile.focus();
			return false;
		}
	}

	if ( fecha_mes.value != "" || fecha_dia.value != "" || fecha_ano.value != "")
	{
		if ( !validateDates(fecha_dia.value, fecha_mes.value, fecha_ano.value) )
		{
			alert('Formato de Fecha no válido');
			fecha_dia.focus();
			return false;
		}
	}

	if ( hijos.value != "" )
	{
		if ( !correct_children(hijos.value) )
		{
			alert('Introduzca un número entero');
			hijos.focus();
			return false;
		}
	}
	
}

//Funcion para probar las funciones anteriores
function test (value, message){
	if (!value)
		alert(message);
}

function mostrarFecha(day, month, year)
{
	alert(day);
	alert(month);
	alert(year);
}

function mostrarFecha(date)
{
	day = date.substring(0,2);
	month = date.substring(3,5);
	year = date.substring(6,10);
	
	alert(day);
	alert(month);
	alert(year);
}

function holaMundo()
{
	alert('Hola Mundo');
}