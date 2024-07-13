// import CounterWithClass from "./components/counterWithClassComponent"
import CounterWithFuncComponent from "./components/counterWithFuncComponent"
import { useState } from "react";

function App() {
  const [count , setCount]  = useState(0);

  return (
    <div className="border border-purple-500 p-10 m-10">
     {/* <CounterWithClass/> */}
     <h1>Count = {count}</h1>
     <CounterWithFuncComponent count = {count} setCount = {setCount}/>
    </div>
  )
}
 
export default App
