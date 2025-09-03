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
  completed: true
},
{
  id: 2,
  content: "Mi segunda tarea",
  completed: true
},
{
  id: 3,
  content: "Mi tercera tarea",
  completed: false
},
{  id: 4,
  content: "Mi cuarta tarea",
  completed: false
},
{  id: 5,
  content: "Mi quinta tarea",
  completed: true
}

])


const addTask = () =>{
  console.log("Add Task")
  const id = new Date().getTime();
  const task = {
    id: id,
    content: prompt("Enter new task"),
    completed: false
  }
  console.log("Task added")
  setTasks(...tasks, task)
}



  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <Counter totalTask={tasks.length} completedTasks={tasks.filter(task => !task.completed).length}/>
        <Button className={"button center"} text={"Add Task"} callback={() => {addTask}}/>
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