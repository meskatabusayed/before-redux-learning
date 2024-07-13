/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useReducer } from "react";
type todoProviderProps = {
    children : ReactNode
}
type TTodo = {
    id : string;
    title : string;
    isCompleted : boolean;
}
type TAction = {
    type : string;
    payload : TTodo
}
export const todoContext = createContext<{state : TTodo[] , dispatch : React.Dispatch<TAction> } | undefined>(undefined);
//dispatch : React.Dispatch<TAction> ata  othoba state : TTodo[] type to show korlo na......
const initialState : TTodo[] = [];
const reducer = (currentSate : TTodo[] , action : TAction) => {
    switch (action.type) {
        case "addTodo":
            return [...currentSate , action.payload];
            
    
        default:
            currentSate;
    }
}

const TodoProvider = ({children} : todoProviderProps) => {
    const {state , dispatch} = useReducer(reducer , initialState);
    const values = {
       state,
       dispatch
    }
  return <todoContext.Provider value = {values}>{children}</todoContext.Provider>
}

export default TodoProvider;




