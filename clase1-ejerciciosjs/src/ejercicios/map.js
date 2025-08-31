import { personas } from './personas';

// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique
 * si puede entrar o no en un casino
 */

function setAllowed(persona) {
  return {
    ...persona, //spread operator para clonar la lista orignial
    allowed: persona.age >= 18, //agrego el atributo allowed que es true si la persona es mayor de edad
  };
}

function puedenEntrar(personas) {
  return personas.map(setAllowed);
}


console.log('map');
const personasConAllowed = puedenEntrar(personas); //siempre tengo que asignar el resultado a una variable nueva
console.log(personasConAllowed);
