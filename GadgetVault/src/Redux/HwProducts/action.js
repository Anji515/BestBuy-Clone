import axios from 'axios';
import { GET_PRODUCTS_DATA, GET_PRODUCTS_EAT_WELL, GET_PRODUCTS_ELECTRONICS, GET_PRODUCTS_LAPTOP, GET_PRODUCTS_MOBILES, PRODUCTS_DATA_FAILURE, PRODUCTS_DATA_REQUEST } from './actionType';

export const getHwProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?type=fitness band`,paramObj)
    .then((res)=>dispatch({type:GET_PRODUCTS_DATA,payload:res.data}))
    .catch(()=>dispatch({type:PRODUCTS_DATA_FAILURE}))
}

export const getEwProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?type=eatwell`,paramObj)
    .then((res)=>dispatch({type:GET_PRODUCTS_EAT_WELL,payload:res.data}))
    .catch(()=>dispatch({type:PRODUCTS_DATA_FAILURE}))
}


export const getLaptopProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?type=Laptop`,paramObj)
    .then((res)=>dispatch({type:GET_PRODUCTS_LAPTOP,payload:res.data}))
    .catch(()=>dispatch({type:PRODUCTS_DATA_FAILURE}))
}

export const getMobileProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?type=Mobile`,paramObj)
    .then((res)=>dispatch({type:GET_PRODUCTS_MOBILES,payload:res.data}))
    .catch(()=>dispatch({type:PRODUCTS_DATA_FAILURE}))
}

