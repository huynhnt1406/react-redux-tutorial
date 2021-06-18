import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { archiveTodo, todosSelector } from '../store/reducer/todoReducer'


function TodoItem() {
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    return (
        <div>
            {
                todos.map(todo => (
                    <p key={todo.id}>{todo.title}<button onClick={() => 
                        dispatch(archiveTodo(todo.id))
                    }>Delete</button></p>
                ))
            }
        </div>
    )
}

export default TodoItem
