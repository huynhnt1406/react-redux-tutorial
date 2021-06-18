import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'
import TodoItem from './TodoItem'

function Todos() {
    const tododata = useContext(TodosContext)
    const {todos} = tododata
    return (
        <div>
           <h3>Todos</h3>
           {
                todos.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={completed}/>
                ))
           }
        </div>
    )
}

export default Todos
