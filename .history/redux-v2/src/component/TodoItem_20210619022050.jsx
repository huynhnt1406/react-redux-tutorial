import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducer/todoReducer'


function TodoItem() {

    const todos = useSelector(todosSelector)
    return (
        <div>
            {
                todos.map(todo => (
                    <p key={todo.id}>{todo.title}</p>
                ))
            }
        </div>
    )
}

export default TodoItem
