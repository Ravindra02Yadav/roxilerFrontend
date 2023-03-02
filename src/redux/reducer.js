import * as types from './actionTypes';

const initialState = {
    table : [],
    user : []
}
const reducer = (state=initialState, action) =>{
    const {type, payload} = action;
switch(type){
    case types.GET_TABLE_DATA_SUCCESS : {
        return {
            ...state,table:payload
        }
    }
    case types.GET_USER_DATA_SUCCESS : {
        return {
            ...state,user:payload
        }
    }
    default :return state;
}

}
export {reducer}