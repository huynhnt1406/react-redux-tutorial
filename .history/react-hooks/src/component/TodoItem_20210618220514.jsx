import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'
import './TodoItem.css'
function TodoItem({id, title, completed}) {

    const {archiveTodo, markCompleted} = useContext(TodosContext)
    return (
        <div>
            <p className={completed ? 'completed' : ''}>{title}<button onClick={() => archiveTodo(id)}>Delete</button><input type="checkbox" onChange={markCompleted.bind(this, id)}/></p>
        </div>
    )
}

export default TodoItem
