const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');



const expression = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{10,30}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "name":
			validarCampo(expression.nombre, e.target, 'name');
		break;

		case "user":
			validarCampo(expression.usuario, e.target, 'user');
		break;

		case "email":
			validarCampo(expression.correo, e.target, 'email');
		break;

		case "password":
			validarCampo(expression.password, e.target, 'password');
			validarPassword();

			
		break;

		case "repetpassword":
			// validarCampo(expression.password, e.target, 'repetpassword');
			validarPassword();
			
		break;
	}
}


const validarCampo = (expresion, input, campo) =>{
	if(expresion.test(input.value)){

		document.getElementById(`main__container-input-${campo}`).classList.remove('main__container-input-incorrecto');
		document.getElementById(`main__container-input-${campo}`).classList.add('main__container-input-correcto');
		document.querySelector(`#main__container-input-${campo} span`).classList.remove('fa-times-circle');
		document.querySelector(`#main__container-input-${campo} span`).classList.add('fa-check-circle');
		document.querySelector(`#main__${campo} .main__input-error`).classList.remove('main__input-error-activo');

	}else{
		document.getElementById(`main__container-input-${campo}`).classList.add('main__container-input-incorrecto');
		document.querySelector(`#main__container-input-${campo} span`).classList.remove('fa-check-circle');
		document.querySelector(`#main__container-input-${campo} span`).classList.add('fa-times-circle');
		document.querySelector(`#main__${campo} .main__input-error`).classList.add('main__input-error-activo');
	}
}


const validarPassword = () => {
	const password1 = document.getElementById('password')
	const password2 = document.getElementById('repetpassword')

	if(password1.value !== password2.value){
		document.getElementById(`main__container-input-repetpassword`).classList.add('main__container-input-incorrecto');
		document.querySelector(`#main__container-input-repetpassword span`).classList.remove('fa-check-circle');
		document.querySelector(`#main__container-input-repetpassword span`).classList.add('fa-times-circle');
		document.querySelector(`#main__repetpassword .main__input-error`).classList.add('main__input-error-activo');
	}else{
		document.getElementById(`main__container-input-repetpassword`).classList.remove('main__container-input-incorrecto');
		document.getElementById(`main__container-input-repetpassword`).classList.add('main__container-input-correcto');
		document.querySelector(`#main__container-input-repetpassword span`).classList.remove('fa-times-circle');
		document.querySelector(`#main__container-input-repetpassword span`).classList.add('fa-check-circle');
		document.querySelector(`#main__repetpassword .main__input-error`).classList.remove('main__input-error-activo');
		
	}
}


inputs.forEach((input)=>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
	e.preventDefault();
});


