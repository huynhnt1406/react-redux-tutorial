
import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './reducer/todoReducer'


const store = configureStore({
    reducer:{
        todosReducer : todosReducer
    }
})

export default store