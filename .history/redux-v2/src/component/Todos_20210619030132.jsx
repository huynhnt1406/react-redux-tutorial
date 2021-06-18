import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducer/todoReducer'
import TodoItem from './TodoItem'

function Todos() {

    const todos = useSelector(todosSelector)
    return (
        <div>
            <h1>Todos</h1>  
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed = {todo.completed}/>
                ))
            }
        </div>
    )
}

export default Todos
