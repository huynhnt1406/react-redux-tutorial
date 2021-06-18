import React from 'react'

function TodoItem({title}) {
    return (
        <div>
            <p>{title}</p><button>Delete</button>
        </div>
    )
}

export default TodoItem
