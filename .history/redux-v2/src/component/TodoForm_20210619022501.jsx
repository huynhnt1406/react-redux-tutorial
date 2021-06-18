import React from 'react'
import { useState } from 'react'

function TodoForm() {

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.vaue)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form>
            <input type="text" value={title} placeholder="add todo..." onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
