import { personas } from './personas';

// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los
 * contactos segun la primera letra de su nombre (nombre completo).
 * Esta seria la estructura esperada:
 *
 * {
 *
 *    M: [{}, {}, ..., {} ],
 *    C: [{}, {}, ..., {}]
 *    L: [{nombreCompleto: "Landa, Gabriel", edad: 48, telefono: "22-121-941"}, ..., {}]
 *
 * }
 *
 */

function agruparContactos(contactos) {
  return contactos.reduce((acumulador, contacto) => {
    //reduce recibe dos parametros, una funcion(callback) y un valor inicial
    // el acumulador es el valor que se va a ir modificando en cada iteracion
    // contacto es el elemento actual del array que se esta iterando

    const primeraLetra = contacto.lastName.charAt(0).toUpperCase(); //charAt(0) obtiene la primera letra del nombre completo y esta va a ser la clave del objeto
    if (!acumulador[primeraLetra]) {
      //si el acumulador no tiene la clave de la primera letra, se crea un array vacio
      acumulador[primeraLetra] = [];
    }
    acumulador[primeraLetra].push(contacto); //se agrega el contacto al array correspondiente a la primera letra
    return acumulador;
  }, {});
}

console.log('REDUCE');
const contactos = agruparContactos(personas);
console.log(contactos);
