export default function(state={}, action){

    switch(action.type){
        case 'FETCHING_BOOKS':
        return{...state,booksList:action.payload}
        default:
        return state;
    }
}