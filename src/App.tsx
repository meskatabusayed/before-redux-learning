// import CounterWithClass from "./components/counterWithClassComponent"
// import CounterWithFuncComponent from "./components/counterWithFuncComponent"
// import { useState } from "react";

import UserinfoWithUseReducer from "./components/UserInfoWithUseReducer"





// import UserinfoWithUsestate from "./components/UserinfoWithUsestate"

function App() {
  // const [count , setCount]  = useState(0);

  return (
    <div className="border border-purple-500 p-10 m-10">
     {/* <CounterWithClass/> */}
     {/* <h1>Count = {count}</h1>
     <CounterWithFuncComponent count = {count} setCount = {setCount}/> */}
     {/* <UserinfoWithUsestate/> */}
     <UserinfoWithUseReducer/>
    </div>
  )
}
 
export default App
