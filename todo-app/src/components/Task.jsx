            //porque esto lo declare como const y no como function?
import Button from "./button";  

function Task({ task }) {
  return (
    <li className="todo-container">
      <input type="checkbox" />
      <span>{task.content}</span>
      <Button text={"X"} callback={() => {console.log("task marked as completed")}}/>
    </li>
  );
}

export default Task;