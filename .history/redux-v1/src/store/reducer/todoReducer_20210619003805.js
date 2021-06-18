const initialState = {
    todos:[
        {
            id:1,
            title:'viec 1',
            completed:false
        },
        {
            id:2,
            title:'viec 2',
            completed:false
        },
        {
            id:3,
            title:'viec 3',
            completed:false
        },
    ]
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
        default:
            return state
    }
}