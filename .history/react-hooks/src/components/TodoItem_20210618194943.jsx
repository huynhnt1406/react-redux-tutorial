import React from 'react'
import'./TodoItem.css'
function TodoItem({id,title, archiveTodo,markCompleted}) {
    return (
        <div>
            <p >{title}<button onClick={() => archiveTodo(id)}>Delete</button><input type="checkbox" onChange={markCompleted.bind(this, id)}/></p>
        </div>
    )
}

export default TodoItem
