const Button  = ({callback, text, className}) => {
    return(
        //funciones que se pasan como argumentos a otra funcion, y se ejecutan dentro de esa funcion
        <button className= {className} onClick ={callback}>{text}</button>
    )
}
//cuando apriete el boton se va a ejecutar algo, el callback es una funcion que se ejecuta cuando se aprieta el boton
export default Button