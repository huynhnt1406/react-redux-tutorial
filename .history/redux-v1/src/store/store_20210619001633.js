import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const initialState = {}


const middlewares = [thunk]

const store = createStore(
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)