import {createSlice} from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },
        archiveTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        markCompleted: (state, action) => {
            state.todos.filter(todo => {
                if(todo.id === action.payload) todo.completed = !todo.completed
                return todo
            })
        }
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state => state.todosReducer.todos

export const {addTodo} = todosSlice.actions
export const {archiveTodo} = todosSlice.actions
export const {markCompleted} = todosSlice.actions

export default todosReducer

