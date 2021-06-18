import React from 'react'
import { useDispatch } from 'react-redux'
import { archiveTodo } from '../store/reducer/todoReducer'



function TodoItem({id, title}) {
    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        dispatch(archiveTodo(id))
    }
    return (
        <div>
            <h3>{title}<button onClick = {deleteTodo.bind(this,id)}>Delete</button><input type="checkbox"/></h3>
        </div>
    )
}

export default TodoItem
