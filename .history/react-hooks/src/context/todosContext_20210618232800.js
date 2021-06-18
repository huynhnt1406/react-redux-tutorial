import { createContext,useReducer,useEffect} from "react";
import { todosReducer } from "../reducer/todosReducer";
import { GET_TODOS, SAVE_TODOS} from "../reducer/types";



export const TodosContext = createContext()


const TodosContextProvider = ({children}) => {

    const [todos, dispatch] = useReducer(todosReducer,[])


    useEffect(() => {
        dispatch({
            type:GET_TODOS,
            payload:null
        })
    }, [])

    useEffect(() => {
        dispatch({
            type:SAVE_TODOS,
            payload:{todos}
        })
    }, [])


    /*const [todos, setTodos] = useState([])
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
    }*/
    const todosContextData = {
        todos,
        dispatch
    }
    return(
        <TodosContext.Provider value={todosContextData}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider