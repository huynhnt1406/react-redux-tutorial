import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

function TodoItem({id, title}) {

    const {archiveTodo} = useContext(TodosContext)
    return (
        <div>
            <p onClick={() => archiveTodo(id)}>{title}</p>
        </div>
    )
}

export default TodoItem
