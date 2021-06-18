import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import { addTodo } from '../store/reducer/todoReducer'
function TodoForm() {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !==''){
            const newTodo = {
                id:uuidv4(),
                title,
                completed:false
            }
            dispatch(addTodo(newTodo))
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
