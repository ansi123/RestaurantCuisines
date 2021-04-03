import {FETCH_REST_DATA,FETCH_FILTER_DATA} from "../action/actionType";
const initialData={
    restaurantData:[],
    cuisineData:[],
    filterRestData:[],
}


const reducer = (state=initialData,action) => {
    switch(action.type){
        case FETCH_REST_DATA:
            return {
                ...state,
                restaurantData: [...action.payloadx],
                cuisineData: [...action.payloady],
                
            };
        case FETCH_FILTER_DATA:
            return {
                ...state,
                filterRestData: [...action.payload],
            };
        default:
            return state;

    }
    
};

export default reducer;