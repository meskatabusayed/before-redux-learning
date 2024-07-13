/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import { todoContext } from "../../context/todoProvider"
type TTodo = {
    id : string;
    title : string;
    isCompleted : boolean;
}

const TodoList = () => {
    const {state , dispatch} = useContext(todoContext);
  return (
    <div>
      {state.map((item : TTodo) => (
        <p onClick={() => dispatch({type : "taskComplete" , payload : item.id})} className={`cursor-pointer ${item.isCompleted ? "line-through" : ''}`}>{item.title}</p>
      ))}
    </div>
  )
}

export default TodoList;
