
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