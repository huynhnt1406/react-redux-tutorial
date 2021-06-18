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
    const markCompleted = (id) => {
        setTodos(todos.filter(todo => {
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        }))
    }
    const todosContextData = {
        todos,
        addTodo,
        archiveTodo,
        markCompleted
    }
    return(
        <TodosContext.Provider value={todosContextData}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider