import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

function Todos() {
    const tododata = useContext(TodosContext)
    const {todos} = tododata
    console.log(todos)
    return (
        <div>
           <h3>Todos</h3>
           {
                todos.map(todo => (
                    <p key={todo.id}>{todo.title}</p>
                ))
           }
        </div>
    )
}

export default Todos
