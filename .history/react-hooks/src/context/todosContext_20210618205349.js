import { createContext, useState } from "react";


export const TodosContext = createContext()


const TodosContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos,todo])
    }
    const archiveTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !==id))
    }
    const todosContextData = {
        todos,
        addTodo,
        archiveTodo
    }
    return(
        <TodosContext.Provider value={todosContextData}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider