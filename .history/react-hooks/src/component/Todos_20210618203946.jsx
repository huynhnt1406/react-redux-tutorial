import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

function Todos() {
    const tododata = useContext(TodosContext)
    console.log(tododata)
    return (
        <div>
           <h3>hello</h3>
        </div>
    )
}

export default Todos
