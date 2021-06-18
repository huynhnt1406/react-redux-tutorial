import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {connect} from 'react-redux'
function TodoForm({addTodo}) {

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
            addTodo(newTodo)
            console.log(newTodo)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="add todo..." onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

const mapStateToProps = () => {}

export default connect(mapStateToProps,{addTodo})(TodoForm)
