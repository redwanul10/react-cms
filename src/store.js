const todoState = {
    todoList:[],
    item:['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
}

export const todoReducer = (state=todoState,action)=>{
    switch(action.type){
        case "CREATE_TODO":
            return {
                ...state,
                todoList:[action.payload,...state.todoList]
            };
            // return state.todoList
        
        case "DELETE_TODO":
            return state.todoList.filter(item => item.id !== action.id)
        
        default :
            return state
    }

}

export const modalReducer = (state= false,action)=>{
    switch(action.type){
        case 'ACTIVATE_MODAL':
            return state = true;
        case 'CLOSE_MODAL' :
            return state = false;
        case 'TOGGLE_MODAL' :
            return !state;
        default:
            return state
    }
}

export const api = (state= [],action)=>{
    switch(action.type){
        case 'FETCHED':
            return action.payload;
        case 'FAILED' :
            return state ;
        default:
            return state
    }
}

