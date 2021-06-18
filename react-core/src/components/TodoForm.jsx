import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
function TodoForm({addTodo}) {

    const [title,setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            addTodo({
                id:uuidv4(),
                title
            })
            setTitle('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="add todo..." onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
