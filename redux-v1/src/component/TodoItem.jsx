import React from 'react'
import {connect} from 'react-redux'
import {archiveTodo, markCompleted} from '../store/action/todoAction'
import './TodoItem.css'
function TodoItem({id, title, archiveTodo, markCompleted, completed}) {
    return (
        <div>
            <p  className={completed ? 'completed' : ''}>{title}<button onClick={() => {archiveTodo(id)}}>Delete</button><input type="checkbox" onChange={markCompleted.bind(this,id)}/></p>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{archiveTodo, markCompleted})(TodoItem)
