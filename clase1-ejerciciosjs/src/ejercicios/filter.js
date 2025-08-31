import { personas } from './personas';

//Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 *
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */

function isAdult(persona) {
  // persona es un objeto con la forma { firstName, lastName, age }
  return persona.age >= 18;
}

function validateAgeForCasino(personas) {
  // Filtramos el array original
  const personasQuePuedenEntrar = personas.filter(isAdult); //el filter lo que hace es devolver un nuevo array con los elementos que cumplen la condicion
  return personasQuePuedenEntrar;
}

console.log('filter');
const puedenEntrar = validateAgeForCasino(personas); //siempre tengo que asignar el resultado a una variable nueva
console.log(puedenEntrar);

/**
 * Podriamos haber definido la funcion isAdult dentro de personas.js y exportarla
 * para luego importarla y usarla en este archivo
 * isAdult corresponderia a una funcion callback, y tambien es un 'comportamiento' de personas por ende tiene sentido que viva en personas.js
 */