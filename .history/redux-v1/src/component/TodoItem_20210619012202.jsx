import React from 'react'
import {connect} from 'react-redux'
import {archiveTodo} from '../store/action/todoAction'
function TodoItem({id, title, archiveTodo}) {
    return (
        <div>
            <p>{title}<button onClick={() => {archiveTodo(id)}}>Delete</button></p>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{archiveTodo})(TodoItem)
