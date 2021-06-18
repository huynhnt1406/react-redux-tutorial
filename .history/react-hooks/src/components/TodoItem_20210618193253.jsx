import React from 'react'

function TodoItem({id,title, archiveTodo}) {
    return (
        <div>
            <p>{title}<button onClick={() => archiveTodo(id)}>Delete</button><input type="checkbox"/></p>
        </div>
    )
}

export default TodoItem
