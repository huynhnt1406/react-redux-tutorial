import React, { useContext } from 'react'
import { todosContext } from '../context/todosContext'

function Todos() {
    const tododata = useContext(todosContext)
    console.log(tododata)
    return (
        <div>
           <h3>hello</h3>
        </div>
    )
}

export default Todos
