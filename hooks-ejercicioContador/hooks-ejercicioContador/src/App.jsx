import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Control from './components/control'
import Cronometro from './components/Cronometro'
import { IniciadoProvider } from './hooks/useIniciado'

function App() {
  const [count, setCount] = useState(0)

  //este esado necesito compartirlo entre Control y Cronometro
  //entra el hook llamado context
  //lo interesante es que una data la podemos pasar contextualizada en ditintos componentes de la app
  //siempre y cuando esten declarados dentro del provider
  // el provider es un componente que provee la data a los componentes hijos
  //el provider tiene un value que es la data que quiero compartir
  //los componentes que quieran consumir esa data tienen que estar dentro del provider
  //y tienen que usar el hook useContext
  //el useContext recibe como parametro el contexto que quiero consumir
  //y me devuelve la data que esta en el value del provider
  //asi puedo compartir data entre componentes sin tener que pasarla por props
  const [estaIniciado, setEstaIniciado] = useState(false);

  return (
    <>
    <IniciadoProvider>
    <Control />
    <Cronometro />
    </IniciadoProvider>
    </>
  )
}

export default App
