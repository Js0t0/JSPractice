const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{6,14}$/ // 7 a 14 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	password2: false,
	correo: false,
	telefono: false,
	slcbox: false

}

const validarForm = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case 'slcbox':
			if(e.target.value !==''){
                document.getElementById('grupo_slcbox').classList.remove('formulario_grupo_incorrecto');
                document.getElementById('grupo_slcbox').classList.add('formulario_grupo_correcto');
				document.querySelector(`#grupo_slcbox .formulario_input_error`).classList.remove('formulario_input_error_activo');
				campos['slcbox'] = true;
				
            } else {
                document.getElementById('grupo_slcbox').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_slcbox').classList.add('formulario_grupo_incorrecto');
				document.querySelector(`#grupo_slcbox .formulario_input_error`).classList.add('formulario_input_error_activo');
                campos['slcbox'] = true;
            }
		break;
	}
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error_activo');
		campos[campo] = true;
		
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error_activo');
		campos[campo] = false;
		
	}
}

const validarPassword2 = ()=>{
		const inputPassword1 = document.getElementById('password')
		const inputPassword2 = document.getElementById('password2')
		if (inputPassword1.value !== inputPassword2.value){
			document.getElementById(`grupo_password2`).classList.add('formulario_grupo_incorrecto');
			document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_correcto');
			document.querySelector(`#grupo_password2 i`).classList.add('fa-times-circle');
			document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
			document.querySelector(`#grupo_password2 .formulario_input_error`).classList.add('formulario_input_error_activo');
			campos['password2'] = false;
		}else{
			document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_incorrecto');
			document.getElementById(`grupo_password2`).classList.add('formulario_grupo_correcto');
			document.querySelector(`#grupo_password2 i`).classList.remove('fa-times-circle');
			document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
			document.querySelector(`#grupo_password2 .formulario_input_error`).classList.remove('formulario_input_error_activo');
			campos['password'] = true;
		}	

}

inputs.forEach((input)=>{
	input.addEventListener("keyup",validarForm);
	input.addEventListener("blur",validarForm);
	
});

selects.forEach((select)=>{
	console.log(select);
	select.addEventListener("blur",validarForm);
	
});

const jsConfetti = new JSConfetti();

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const terminos = document.getElementById('terminos');
	
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked && campos.slcbox ){
		formulario.reset();
		document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje_activo');
		document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');
		jsConfetti.addConfetti();
		setTimeout(() => {
			document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo');
		}, 5000);

		document.querySelectorAll('.formulario_grupo_correcto').forEach((icono) => {
			icono.classList.remove('formulario_grupo_correcto');
		});
	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_activo');
	}
});