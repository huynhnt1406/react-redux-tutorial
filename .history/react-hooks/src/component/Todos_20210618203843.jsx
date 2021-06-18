import React, { useContext } from 'react'
import { todosContext } from '../context/todosContext'

function Todos() {
    const tododata = useContext(todosContext)
    console.log(tododata)
    return (
        <div>
            {
                todos.map(todo => (
                    <p key={todo.id}>{todo.title}</p>
                ))
            }
        </div>
    )
}

export default Todos
