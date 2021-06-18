import { ADD_TODO, ARCHIVE_TODO, GET_TODOS, MARK_COMPLETED} from "./types";


export const todosReducer = (state, action) => {

    const {type, payload} = action
    switch(type){
        case GET_TODOS:
            const todos = localStorage.getItem('todos')
            if(todos) state = JSON.parse(todos)
            return state
        case ADD_TODO:
            return [...state, payload.todo]
        case ARCHIVE_TODO:
            return state.filter(todo => todo.id !== payload.id)
        case MARK_COMPLETED:
            return state.filter(todo => {
                if(todo.id === payload.id) 
                console.log(todo)
                return todo
            })
        default:
            return state
    }

}