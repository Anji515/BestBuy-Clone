import axios from 'axios';
import { PRODUCTS_FAILURE, PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS, GET_PRODUCTS_SUCCESS } from './actiontypes';

export const addProduct = (data) => (dispatch) =>{
    dispatch({type: PRODUCTS_REQUEST})

    axios.post("https://backend-for-gadgetvault-qf1o.onrender.com/Products" , data).then(() =>{
        dispatch({type:ADD_PRODUCTS_SUCCESS})
    }).catch(() =>{
        dispatch({type:PRODUCTS_FAILURE})
    })
}


export const getproducts = (id) => (dispatch) =>{
    dispatch({type:PRODUCTS_REQUEST})

    axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?_limit=7&&_page=${id}`).then((res)=>{
        dispatch({type:GET_PRODUCTS_SUCCESS , payload: res.data})
    }).catch(() =>{
        dispatch({type:PRODUCTS_FAILURE})
    })
}

export const DeleteProduct = (id) =>{
   return axios.delete(`https://backend-for-gadgetvault-qf1o.onrender.com/Products/${id}`)
}