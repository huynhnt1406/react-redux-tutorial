const initialState = {
    todos:[]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO': 
            return{
                ...state,
                todos:[
                    ...state.todos,
                    action.payload
                ]
            }
        case 'ARCHIVE_TODO':
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'MARK_COMPLETED':
            return {
                ...state,
                todos:state.todos.filter(todo => {
                    if(todo.id === action.payload) todo.completed = !todo.completed
                    console.log(todo)
                    return todo
                })
            }
        default:
            return state
    }
}

export default postReducer