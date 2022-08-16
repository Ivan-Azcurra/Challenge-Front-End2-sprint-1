export function valida(input) {
    // recibe el input donde se disparo el evento.
  const tipoDeInput = input.dataset.tipo;
//   la variable "tipoDeInput", guarda el input segun el valor del atributo data

//  cambio de estilos del input y muestra el mensaje correspondiente al error. 
  if(input.validity.valid/* accede a la propiedad validity.valid de los elementos input: si esta vacio se evual como "false" */){
    if(input.id == 'mensaje'){
      // la setencia if de arriba valida si el input es el textarea
      input.parentElement.querySelector(".mensaje-error").innerHTML = "";
      input.classList.toggle("form__textarea--error");
    }
      input.parentElement.querySelector(".mensaje-error").innerHTML = "";
      input.classList.toggle("form__input--error");
  } else if(input.id == 'mensaje'){
      input.classList.toggle("form__textarea--error");
      let span = input.parentElement.querySelector(".mensaje-error");span.classList.remove("oculto")
      span.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
      return
    } else {
      input.classList.toggle("form__input--error");
      let span = input.parentElement.querySelector(".mensaje-error");span.classList.remove("oculto")
      span.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    //   esta funcion devuelve el mensaje correspondiente al tipo de error que tiene el input.
  }
}

const tipoDeErroes = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "Debe completar el campo: Nombre",
  },
  email: {
    valueMissing: "Debe completar el campo: Email",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "Debe completar el campo: Asunto",
  },
  mensaje: {
    valueMissing: "Debe completar el campo: Mensaje",
  }
};


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErroes.forEach((error) => {
        // comprueba si el error que devuelve el forEach hace match con el error del input.
        if(input.validity[error]) {
            // si es true, accede al objeto "mensajesDeError". Primero a la llave que corresponde al tipo de input, y luego al valor de esa llave que es otro objeto, que contiene la llave con el nombre del error y retorna su valor.
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}