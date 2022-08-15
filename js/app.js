import { valida } from "./validaciones.js";
// selecciona todos los inputs del DOM y los guarda en la variable "inputs", que la convierte en un arreglo.
const inputs = document.querySelectorAll("[data-tipo]");


// recorre el arreglo, un elemento a la vez y le añade un escuchador de evento, que captura el evento cuando el usuario deja de hacer focus en el input.
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    //  se envia a la funcion valida el input exacto donde se disparo el evento con la propiedad .target
    valida(input.target);
  });
});
