import React from 'react'
import {connect} from 'react-redux'
import {archiveTodo} from '../store/action/todoAction'
function TodoItem({title}) {
    return (
        <div>
            <p>{title}<button>Delete</button></p>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{archiveTodo})(TodoItem)
