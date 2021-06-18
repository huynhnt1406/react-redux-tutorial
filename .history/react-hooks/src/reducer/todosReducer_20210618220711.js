import { ADD_TODO, ARCHIVE_TODO, GET_TODOS, SAVE_TODOS } from "./types";


export const todosReducer = (state, action) => {

    const {type, payload} = action
    switch(type){
        case GET_TODOS:
        const todos = localStorage.getItem('todos')
        if(todos) state = JSON.parse(todos)
        return state

        case ADD_TODO:
            return [...state,payload.todo]
        case ARCHIVE_TODO:
            return state.todos.filter(todo => todo.id !== payload.id)
        default:
            return state
    }

}