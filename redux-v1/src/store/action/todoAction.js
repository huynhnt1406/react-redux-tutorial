
export const addTodo = (newTodo) => dispatch =>  {
    dispatch({
        type:'ADD_TODO',
        payload:newTodo
    })
}

export const archiveTodo = (id) => dispatch => {
    dispatch({
        type:'ARCHIVE_TODO',
        payload:id
    })
}

export const markCompleted = (id) => dispatch => {
    dispatch({
        type:'MARK_COMPLETED',
        payload:id
    })
}