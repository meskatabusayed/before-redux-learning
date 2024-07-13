/* user  = {name  =  Meskat , age =  23 , hobbies =  ["football" , "gardening" , "watching movies"]} */

import { ChangeEvent, useReducer } from "react"
type TAction = {
    type : string;
    payload : string;
}
const initialState = {
    name : "",
    age : "",
    hobbies : [] as string[]
}

const reducer = (currentSate : typeof initialState, action : TAction) => { //dispatch go to action .... dispatch --- action ,
    //reducer means business logic
    //business logic hobe action ar oporee vitti koree

    switch (action.type) {
        case "addName":
            return {...currentSate , name : action.payload}
        case "addAge":
            return {...currentSate , age : action.payload}
        case "addHobbies":
            return {...currentSate , hobbies : [...currentSate.hobbies , action.payload]}
            //hobbies ar name change korlee doita array ashsee ar karon ki?
    
        default:
            return currentSate;
    }

}


function UserinfoWithUseReducer() {
   const [state , dispatch] = useReducer(reducer , initialState);
  
   //dispatch ---> send
   //reducer --> it is a function.called reducer function

   const handleSubmit = (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
   }
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => dispatch({type : "addName" , payload : e.target.value})} 
        className="border border-purple-600 m-10" type="text" name="name" id="name" placeholder="name"/>
        <input onChange={(e) => dispatch({type : "addAge" , payload : e.target.value})}  className="border border-purple-600 m-10" type="number" name="age" id="age" placeholder="age"/>
        <input onBlur={(e) => dispatch({type : "addHobbies" , payload : e.target.value})}
        className="border border-purple-600 m-10" type="text" name="hobbies" id="hobbie" placeholder="Hobbie"/>
        <button className="bg-purple-800 p-2 text-white rounded-md" type="submit">
            Submit
        </button>
    </form>
  )
}

export default UserinfoWithUseReducer
