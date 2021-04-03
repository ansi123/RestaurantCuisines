import {FETCH_REST_DATA,FETCH_FILTER_DATA} from "./actionType";
import restData  from '../../jsonfile/restaurants.json';
import cuisineData from '../../jsonfile/cuisines.json';
const fetchData = (res,cus) =>{
    console.log("restData",res);
    return{
        type:FETCH_REST_DATA,
        payloadx:res,
        payloady:cus,
    };
};

export const fetchFilter = (dataFilter) =>{
    return{
        type:FETCH_FILTER_DATA,
        payload:dataFilter,
    };
};

 


export const fetchSuccess = () =>{
    return(dispatch)=>{
        console.log('restData',restData[0].data);
        dispatch(fetchData(restData[0].data, cuisineData[0].data))
    };
};
