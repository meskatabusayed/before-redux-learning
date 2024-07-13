import { FormEvent, useContext, useState } from "react"
import { todoContext } from "../../context/todoProvider"


const TodoForm = () => {
    const {state , dispatch} = useContext(todoContext);
    console.log(state);
    const [task , setTask] = useState(" ");
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        const todo = {
            id : Math.random().toString(36).substring(2,7),
            title : task,
            isCompleted : false,
        }
        dispatch({type : "addTodo" , payload : todo});
    }
  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Task</label>
      <input className="border border-red-500"
       onChange={(e) => setTask(e.target.value)} type="text" name="todo" id="todo"/>
      <button className="bg-purple-800 p-2 text-white rounded-md" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
