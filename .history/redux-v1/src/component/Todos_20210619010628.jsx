import Reactfrom 'react'
import TodoItem from './TodoItem'
import {connect}from 'react-redux'
function Todos({todosData}) {

    return (
        <div>
            <h1>Todos</h1>
            {
                todosData.map(todo => (
                   <TodoItem key={todo.id} id={todo.id} title={todo.title}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) =>({
    todosData : state.todos.todos
})

export default connect(mapStateToProps,{})(Todos)
