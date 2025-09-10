import { createContext } from "react";

const GlobalContext = createContext(false);
//el contexto lo que hace es crear un objeto que tiene dos componentes
//el provider y el consumer
//el provider es el que provee la data a los componentes hijos
//el consumer es el que consume la data del provider
//el provider tiene un value que es la data que quiero compartir
//los componentes que quieran consumir esa data tienen que estar dentro del provider
//y tienen que usar el hook useContext
//el useContext recibe como parametro el contexto que quiero consumir
//y me devuelve la data que esta en el value del provider
//asi puedo compartir data entre componentes sin tener que pasarla por props
export default GlobalContext;