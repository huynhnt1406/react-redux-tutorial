import React from 'react'
import TodoItem from './TodoItem'
import {connect}from 'react-redux'
function Todos({todosData}) {

    return (
        <div>
            <h1>Todos</h1>
            {
                todosData.map(todo => (
                   <TodoItem key={todo.id} id={todo.id} title={todo.title} completed = {todo.completed}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) =>({
    todosData : state.todos.todos
})

export default connect(mapStateToProps,{})(Todos)
