import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/todosContext'
import {v4 as uuidv4} from 'uuid'
function TodoForm() {
    const {addTodo} = useContext(TodosContext)

    const [title,setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title !==''){
            addTodo({
                id:uuidv4(),
                title,
                completed:false
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
