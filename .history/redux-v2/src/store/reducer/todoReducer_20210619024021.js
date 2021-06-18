import {createSlice} from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[
            {
                id:1,
                title:'viec 1',
                completed:false
            },
            {
                id:2,
                title:'viec 3',
                completed:false
            },
            {
                id:3,
                title:'viec 3',
                completed:false
            },
        ]
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },
        archiveTodo: (state,action) => {
            state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state => state.todosReducer.todos

export const {addTodo} = todosSlice.actions
export const {archiveTodo} = todosSlice.actions

export default todosReducer

