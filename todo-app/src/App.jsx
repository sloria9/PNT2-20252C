import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Counter from './components/counter.jsx'
import Button from './components/button.jsx'
import Task from './components/Task.jsx'
function App() {

const[tasks, setTasks] = useState([
  {
  id: 1,
  content: "Mi primera tarea",
  completed: false
},
{
  id: 2,
  content: "Mi segunda tarea",
  completed: false
},
{
  id: 3,
  content: "Mi tercera tarea",
  completed: false
}

])

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <Counter/>
        <Button className={"button center"} text={"Add Task"} callback={() => {console.log("Add Task")}}/>
        <ul id="todo-list" className="todo-list">
          {
            tasks.map((task) =>{
              return (
                <Task key={task.id} task={task} />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App


//linea 24 paso como prop el estado tarea al componente Task (el estado tiene cargado lo que le haya metido el usuario)