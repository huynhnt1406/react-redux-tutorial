import React, { useState } from 'react'
import TodoItem from './TodoItem'
import {connect}from 'react-redux'
function Todos({todosData}) {

    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map(todo => (
                   <TodoItem key={todo.id} id={todo.id} title={todo.title}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) =>{
    todosData : state.todos.todos
}

export default connect(mapStateToProps,{})(Todos)
