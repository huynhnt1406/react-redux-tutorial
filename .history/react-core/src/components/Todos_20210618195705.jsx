import React ,{useState}from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function Todos() {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos,todo])
    }

    const archiveTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const markCompleted = (id) => {
        setTodos(todos.filter(todo => {
            if(todo.id === id) todo.completed = !todo.completed 
            return todo
        }))
    }
    return (
        <div>
            <h1>Todos</h1>
            <TodoForm addTodo={addTodo}/>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} archiveTodo={archiveTodo} markCompleted={markCompleted}/>
                ))
            }
        </div>
    )
}

export default Todos
