import { GET_TODOS, SAVE_TODOS } from "./types";


export const todosReducer = (state, action) => {
    switch(action.type){
        case GET_TODOS:
        const todos = localStorage.getItem('todos')
        if(todos) state = JSON.parse(todos)
        return state

        case SAVE_TODOS:
        localStorage.setItem('todos',JSON.stringify(todos))
        return state
        default:
            return state
    }

}