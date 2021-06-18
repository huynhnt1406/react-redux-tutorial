import React from 'react'

function TodoItem({id,title}) {
    return (
        <div>
            <p>{title}<button>Delete</button><input type="checkbox"/></p>
        </div>
    )
}

export default TodoItem
