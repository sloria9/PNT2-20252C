//separar la logica de las vistas, la logica va en un hook
//la vista va en un componente
//asi podemos reutilizar la logica en distintos componentes
//y mantener la vista limpia y facil de entender
import { useState} from "react";
import { useContext } from "react";
import { createContext } from "react";

//creamos el contexto
//el contexto es un objeto que tiene dos componentes
//el provider y el consumer
const IniciadoContext = createContext();

//definimos si esta iniciado o no
//y la funcion para cambiar el estado
//el useState va dentro del provider
//asi cada vez que cambie el estado se actualiza la data en los componentes que consumen el contexto
export function IniciadoProvider({children}){

    const [estaIniciado, setEstaIniciado] = useState(false);

    return <IniciadoContext.Provider value={
        {estaIniciado, setEstaIniciado}
    }>
        {children}
    </IniciadoContext.Provider>
}


//hook propio para consumir el contexto
export function useIniciado(){
    
const estaIniciado = useContext(IniciadoContext);

if(!estaIniciado){
    throw new Error('iniciado debe estar dentro de un iniciadoProvider')
}
return estaIniciado;
}