import React ,{useState}from 'react'
import TodoItem from './TodoItem'

function Todos() {

    const [todos, setTodos] = useState([
        {
            id:1,
            title:'viec 1',
            completed:false
        },
        {
            id:2,
            title:'viec 2',
            completed:false
        },
        {
            id:3,
            title:'viec 3',
            completed:false
        },
    ])

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

export default Todos
