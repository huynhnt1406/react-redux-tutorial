
import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './reducer/todoReducer'


const store = configureStore({
    todosReducer : todosReducer
})

export default store