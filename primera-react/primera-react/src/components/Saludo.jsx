const Saludo = ({name}) => {
    //el prop es un objeto que se le pasa al componente
    console.log(name);
    return( 
    <h1>Hola {name}</h1> 
) 
}

export default Saludo