import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
function TodoForm() {

    const [title , setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            const newTodo = {
                id:uuidv4(),
                title,
                completed:false
            }
            console.log(newTodo)
        }
    }
    return (
        <form>
            <input type="text" value={title} placeholder="add todo..." onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
