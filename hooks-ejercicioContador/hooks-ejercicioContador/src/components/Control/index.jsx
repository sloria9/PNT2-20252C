    import { useIniciado } from '../../hooks/useIniciado';

const Control = () => {
    //aqui necesito consumir el estado que esta en el provider
    //para eso uso el hook useIniciado
    //asi puedo acceder al estado y a la funcion para cambiar el estado
    //y puedo usarlo en los botones
    const {estaIniciado} = useIniciado();



  return (
    <div className="card">
        <button> 
            {estaIniciado ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={() => setCount(0)}>Reiniciar</button>  
    </div>
  )
}
export default Control;