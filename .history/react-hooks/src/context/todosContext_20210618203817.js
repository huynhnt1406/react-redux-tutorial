import { createContext, useState } from "react";


export const todosContext = createContext()


const TodosContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {
            id:1,
            title:'viec 1',
            completed:false
        },
        {
            id:2,
            title:'viec 2',
            completed:false
        },
        {
            id:3,
            title:'viec 3',
            completed:false
        }
    ])
    const todosContextData = {
        todos,
    }
    return(
        <todosContext.Provider value={todosContextData}>
            {children}
        </todosContext.Provider>
    )
}

export default TodosContextProvider