import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

function TodoItem({id, title}) {

    const {archiveTodo} = useContext(TodosContext)
    return (
        <div>
            <p >{title}<button onClick={() => archiveTodo(id)}>Delete</button><input type="checkbox"/></p>
        </div>
    )
}

export default TodoItem
