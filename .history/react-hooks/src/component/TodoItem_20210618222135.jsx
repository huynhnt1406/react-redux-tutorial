import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'
import { ARCHIVE_TODO } from '../reducer/types'
import './TodoItem.css'
function TodoItem({id, title, completed}) {

    const {dispatch} = useContext(TodosContext)
    return (
        <div>
            <p className={completed ? 'completed' : ''}>{title}<button onClick={() => 
                dispatch({
                    type:ARCHIVE_TODO,
                    payload:{
                        id
                    }
                })
        }>Delete</button></p>
        </div>
    )
}

export default TodoItem
