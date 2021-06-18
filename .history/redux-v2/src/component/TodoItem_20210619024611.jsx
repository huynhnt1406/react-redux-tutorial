import React from 'react'
import { archiveTodo } from '../store/reducer/todoReducer'



function TodoItem({id, title}) {

    const dispatch = useDispatch()
    return (
        <div>
            <h3>{title}<button onClick = {() => {dispatch(archiveTodo(id))}}>Delete</button></h3>
        </div>
    )
}

export default TodoItem
