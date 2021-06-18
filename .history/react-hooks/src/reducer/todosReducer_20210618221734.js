import { ADD_TODO, ARCHIVE_TODO, GET_TODOS, SAVE_TODOS } from "./types";


export const todosReducer = (state, action) => {

    const {type, payload} = action
    switch(type){
        case GET_TODOS:
            const todos = localStorage.getItem('todos')
            if(todos) state = JSON.parse(todos)
            return state
        case SAVE_TODOS:
            localStorage.setItem('todos', JSON.stringify(todos))
            return state
        default:
            return state
    }

}