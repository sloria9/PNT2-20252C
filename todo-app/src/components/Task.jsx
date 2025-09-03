            //porque esto lo declare como const y no como function?
import Button from "./button";  

function Task({ task }) {
  return (
    <li className="todo-container">
      <input type="checkbox" checked={task.completed}/>
      <span>{task.content}</span>
      <Button text={"X"} callback={() => {
        console.log("delete task" + task.id)
        }}/>
    </li>
  );
}

export default Task;