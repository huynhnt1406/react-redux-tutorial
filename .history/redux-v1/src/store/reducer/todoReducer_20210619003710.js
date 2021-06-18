const initialState = {
    todos:[]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO : 
            return{
                ...state,
                todos:[
                    ...state,
                    action.payload
                ]
            }
    }
}