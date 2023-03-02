import axios from 'axios';
import * as types from './actionTypes';

const getTableData =(params) => (dispatch) =>{
dispatch({type: types.GET_TABLE_DATA_REQUEST})
axios.get(`https://jsonplaceholder.typicode.com/todos?_sort=id&_order=${params}`)
.then((res)=>{
    dispatch({type: types.GET_TABLE_DATA_SUCCESS, payload:res.data})
})
.catch((err)=>{
    dispatch({type : types.GET_TABLE_DATA_FAILURE})
})
}
const getUsereData = (dispatch) =>{
    dispatch({type: types.GET_USER_DATA_REQUEST})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        dispatch({type: types.GET_USER_DATA_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type : types.GET_USER_DATA_FAILURE})
    })
    }

export {getTableData, getUsereData}