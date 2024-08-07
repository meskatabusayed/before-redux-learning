/* eslint-disable react-refresh/only-export-components */

import { ReactNode, createContext, useReducer } from "react";
export const todoContext = createContext<{state : TTodo[] , dispatch : React.Dispatch<TAction> } | undefined>(undefined);

/* //dispatch : React.Dispatch<TAction> ata  othoba state : TTodo[] type to show korlo na...... */

type todoProviderProps = {
    children : ReactNode
}
type TTodo = {
    id : string;
    title : string;
    isCompleted : boolean;
}
type TAction = {
    type : "addTodo" | "taskComplete";
    payload : TTodo | string
}


const initialState : TTodo[] = [];

const typeConstants = {
    ADD_TODO : "addTodo",
    TASK_COMPLETE : "taskComplete"
}
    
const reducer = (currentSate : TTodo[] , action : TAction) => {
    switch (action.type) {
        case typeConstants.ADD_TODO:
            return [...currentSate , action.payload];
        case typeConstants.TASK_COMPLETE:
            return currentSate.map((item) => item.id == action.payload ? {...item , isCompleted : !item.isCompleted} : item)
        default:
            currentSate;
    }
}

const TodoProvider = ({children} : todoProviderProps) => {
    const [state , dispatch] = useReducer(reducer , initialState);
    
    const values = {
       state,
       dispatch
    }
  return <todoContext.Provider value = {values}>{children}</todoContext.Provider>
}

export default TodoProvider;




