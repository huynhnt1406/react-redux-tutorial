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
        default:
            return state
    }
}

export default postReducer