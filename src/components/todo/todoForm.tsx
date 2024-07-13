import { useContext } from "react"
import { todoContext } from "../../context/todoProvider"


const TodoForm = () => {
    const {todoTitle} = useContext(todoContext)
  return (
    <div>
      <h1>{todoTitle}</h1>
    </div>
  )
}

export default TodoForm
