import React from 'react'
import { useDispatch } from 'react-redux'
import { archiveTodo, markCompleted } from '../store/reducer/todoReducer'



function TodoItem({id, title}) {
    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        dispatch(archiveTodo(id))
    }

    const markTodo = (id) => {
        dispatch(markCompleted(id))
    }
    return (
        <div>
            <h3>{title}<button onClick = {deleteTodo.bind(this,id)}>Delete</button><input type="checkbox" onChange={markTodo.bind(this,id)}/></h3>
        </div>
    )
}

export default TodoItem
