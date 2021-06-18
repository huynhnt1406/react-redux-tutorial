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
    }
})

const todosReducer = todosSlice.reducer
const state = useSelector(state => state.state)

export const todosSelector = state => state.todosReducer.todos