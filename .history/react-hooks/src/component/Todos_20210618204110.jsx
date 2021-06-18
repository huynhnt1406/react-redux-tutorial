import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

function Todos() {
    const tododata = useContext(TodosContext)
    const {todos} = tododata
    console.log(todos)
    return (
        <div>
           <h3>Todos</h3>
           {

           }
        </div>
    )
}

export default Todos
