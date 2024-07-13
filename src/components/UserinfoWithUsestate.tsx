/* user  = {name  =  Meskat , age =  23 , hobbies =  ["football" , "gardening" , "watching movies"]} */

import { useState } from "react"

function UserinfoWithUsestate() {
    const [user , setUser] = useState({name : "" , age : " " , hobbies: []});
    console.log(user)
  return (
    <form>
        <input onChange={(e) => setUser({ ...user , name : e.target.value})} 
        className="border border-purple-600 m-10" type="text" name="name" id="name" placeholder="name"/>
        <input onChange={(e) => setUser({ ...user , age : e.target.value})} className="border border-purple-600 m-10" type="number" name="age" id="age" placeholder="age"/>
        <input onBlur={(e) => setUser({ ...user , hobbies : [...user.hobbies, e.target.value]})}
        className="border border-purple-600 m-10" type="text" name="hobbies" id="hobbie" placeholder="Hobbie"/>
        <button className="bg-purple-800 p-2 text-white rounded-md" type="submit">
            Submit
        </button>
    </form>
  )
}

export default UserinfoWithUsestate
