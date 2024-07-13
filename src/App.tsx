// import CounterWithClass from "./components/counterWithClassComponent"
// import CounterWithFuncComponent from "./components/counterWithFuncComponent"
// import { useState } from "react";

import TodoForm from "./components/todo/todoForm";
import TodoProvider from "./context/todoProvider";

// import UserinfoWithUseReducer from "./components/UserInfoWithUseReducer"





// import UserinfoWithUsestate from "./components/UserinfoWithUsestate"

function App() {
  // const [count , setCount]  = useState(0);

  return (
    <TodoProvider>
    <div>
     {/* <CounterWithClass/> */}
     {/* <h1>Count = {count}</h1>
     <CounterWithFuncComponent count = {count} setCount = {setCount}/> */}
     {/* <UserinfoWithUsestate/> */}
     {/* <UserinfoWithUseReducer/> */}
     <TodoForm/>
    </div>
    </TodoProvider>
  )
}
 
export default App
