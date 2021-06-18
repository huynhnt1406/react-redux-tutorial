import React from 'react'

function TodoItem({title}) {
    return (
        <div>
            <p>{title}<button>Delete</button></p>
        </div>
    )
}

export default TodoItem
