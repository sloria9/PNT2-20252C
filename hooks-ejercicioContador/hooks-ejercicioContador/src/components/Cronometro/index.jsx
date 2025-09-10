import { useEffect, useRef, useState } from "react";
import { useIniciado } from "../../hooks/useIniciado";


const Cronometro = () => {

    const {estaIniciado} = useIniciado()
    const [segundos, setSegundos] = useState(0);
    const intervalo = useRef(null)

    useEffect(() => {
        console.log('estaIniciado', estaIniciado)

        if(estaIniciado){
            intervalo.current = setInterval(() =>{
                setSegundos((valorPrevio) => {
                    console.log('valorPrevio', valorPrevio)
                    return valorPrevio + 1
                })
            },1000)
        }else{
            clearInterval(intervalo.current)
        }
    }, [estaIniciado])


  return (
    <div>
      <h2>{segundos}</h2>
    </div>
  );
}
export default Cronometro;