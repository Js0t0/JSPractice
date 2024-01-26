

window.onload = function() {
	
	var borrar = document.getElementById('borrar');
	borrar.addEventListener("click", borrando);
	
	var nombre = document.getElementById('nombre');
	nombre.addEventListener("input", campoNombre);
	
	var correo = document.getElementById('correo');
	correo.addEventListener("input", campoCorreo);
	
	var asunto = document.getElementById('asunto');
	asunto.addEventListener("input", campoAsunto);
	
	var mensaje = document.getElementById('mensaje');
	mensaje.addEventListener("input", campoMensaje);
	
}

function campoNombre() {
	var usuarioNombre = document.getElementById('nombre').value;
	
	if (usuarioNombre) {
		document.getElementById('nombre_error').innerHTML = " ";
		document.getElementById('nombre').style.outline = "1px solid #000";
	}
}

function campoCorreo() {
	var usuarioCorreo = document.getElementById('correo').value;
	
	if (usuarioCorreo) {
		document.getElementById('correo_error').innerHTML = " ";
		document.getElementById('correo').style.outline = "1px solid #000";
	}
}

function campoAsunto() {
	var usuarioAsunto = document.getElementById('asunto').value;
	
	if (usuarioAsunto) {
		document.getElementById('asunto_error').innerHTML = " ";
		document.getElementById('asunto').style.outline = "1px solid #000";
	}
}

function campoMensaje() {
	var usuarioMensaje = document.getElementById('mensaje').value;
	
	if (usuarioMensaje) {
		document.getElementById('mensaje_error').innerHTML = " ";
		document.getElementById('mensaje').style.outline = "1px solid #000";
	}
}

function borrando() {
	document.location.reload(true);
}

function validacion() {
	var expUsuario = /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/;
	var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
	var usuarioNombre = document.getElementById('nombre').value;
	var usuarioCorreo = document.getElementById('correo').value;
	var usuarioAsunto = document.getElementById('asunto').value;
	var usuarioMensaje = document.getElementById('mensaje').value;
	var nombreError = document.getElementById('nombre_error');
	var correoError = document.getElementById('correo_error');
	var asuntoError = document.getElementById('asunto_error');
	var mensajeError = document.getElementById('mensaje_error');
	var campoNombre = document.getElementById('nombre');
	var campoCorreo = document.getElementById('correo');
	var campoAsunto = document.getElementById('asunto');
	var campoMensaje = document.getElementById('mensaje');
	
	if (!usuarioNombre) {
		var mensajeErrorNombre = "Su Nombre Completo es Requerido!";
		nombreError.innerHTML = mensajeErrorNombre;
		campoNombre.style.outline = "2px solid #f00";
		return false;
	} else if (!expUsuario.test(usuarioNombre)) {
		var mensajeInvalidoNombre = "Su Nombre Completo es Invalido!";
		nombreError.innerHTML = mensajeInvalidoNombre;
		campoNombre.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioCorreo) {
		var mensajeErrorCorreo = "Su Correo Electronico es Requerido!";
		correoError.innerHTML = mensajeErrorCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	} else if (!expCorreo.test(usuarioCorreo)) {
		var mensajeInvalidoCorreo = "Su Correo Electronico es Invalido!";
		correoError.innerHTML = mensajeInvalidoCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioAsunto) {
		var mensajeErrorAsunto = "El Tema del Asunto es Requerido!";
		asuntoError.innerHTML = mensajeErrorAsunto;
		campoAsunto.style.outline = "2px solid #f00";
		return false;
	} else if (!isNaN(usuarioAsunto)) {
		var mensajeNumerosAsunto = "No se permite Numeros en el Asunto!";
		asuntoError.innerHTML = mensajeNumerosAsunto;
		campoAsunto.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioMensaje) {
		var mensajeErrorMensaje = "Por favor escriba su Mensaje!";
		mensajeError.innerHTML = mensajeErrorMensaje;
		campoMensaje.style.outline = "2px solid #f00";
		return false;
	} else if (usuarioMensaje.length >= 255) {
		mensajeLargo = "Su Mensaje es demasiado Largo!";
		mensajeError.innerHTML = mensajeLargo;
		campoMensaje.style.outline = "2px solid #f00";
		return false;
	} 
}

//-->