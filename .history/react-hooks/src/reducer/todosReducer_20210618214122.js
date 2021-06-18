import { GET_TODOS } from "./types";


export const todosReducer = (state, action) => {
    switch(action.type){
        case GET_TODOS:
        const todos = localStorage.getItem('todos')
        if(todos) state = JSON.parse(todos)
        return state
    }

}