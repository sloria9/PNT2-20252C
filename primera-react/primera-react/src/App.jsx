import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo.jsx'

function App() {

//  const curso = "NT2 C"

  const  [curso, setCurso] = useState("PNT2")
//array primer elemento es el valor, el segundo es la funcion callback que modifica el valor


function cambiarCurso() {
  const nuevoCurso = prompt("Ingrese el nuevo curso") //prompt es un cuadro de dialogo
  setCurso(nuevoCurso)
}

  return (
    <>
      <div>
        <Saludo name="Sofia" />
        <h1>Hello World {curso} </h1>
        <Saludo name={curso}  />
      
      <button onClick={cambiarCurso}>Cambiar Curso</button>
      
      </div>
    </>
  )
}

export default App
