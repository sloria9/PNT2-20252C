const Counter = ({totalTask, uncompletedTasks}) => {
  return (
            <div className="flow-right controls">
          <span>Item count: <span id="item-count">{totalTask}</span></span>
          <span>Uncompleted count: <span id="unchecked-count">{uncompletedTasks}</span></span>
        </div>
  )
}

export default Counter 