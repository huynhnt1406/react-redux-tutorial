import React, { useState } from 'react'

function TodoItem() {

    const [title , setTitle] = useState('')

    return (
        <form>
            <input type="text" value={title} placeholder="add todo..."/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoItem
