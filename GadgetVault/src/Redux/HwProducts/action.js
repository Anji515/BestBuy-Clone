
import axios from 'axios';
import { GET_PRODUCTS_DATA, PRODUCTS_DATA_FAILURE, PRODUCTS_DATA_REQUEST } from './actionType';

export const getHwProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Electronics`,paramObj)
    .then((res)=>dispatch({type:GET_PRODUCTS_DATA,payload:res.data}))
    .catch(()=>dispatch({type:PRODUCTS_DATA_FAILURE}))
}