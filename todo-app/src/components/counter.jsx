const Counter = ({totalTask, completedTasks}) => {
  return (
            <div className="flow-right controls">
          <span>Item count: <span id="item-count">{totalTask}</span></span>
          <span>Uncompleted count: <span id="unchecked-count">{completedTasks}</span></span>
        </div>
  )
}

export default Counter 