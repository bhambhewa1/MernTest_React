import { FETCH_ERROR, SET_WEATHER_DATA } from "../../action/actionCreator";

const weather = ( data = [], action ) => {

    switch(action.type){
        case SET_WEATHER_DATA:
            // console.log("Reducer called", action);
            return [action.data]
        case FETCH_ERROR:
            // console.log("Reducer called", action);
            return [action.error]
        default:
            return data;
    }

}

export default weather;