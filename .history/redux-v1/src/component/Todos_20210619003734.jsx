import React, { useState } from 'react'
import TodoItem from './TodoItem'

function Todos() {

    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map(todo => (
                   <TodoItem key={todo.id} id={todo.id} title={todo.title}/>
                ))
            }
        </div>
    )
}

export default Todos
