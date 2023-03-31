
import axios from 'axios';
import { GET_PRODUCTS_DATA, PRODUCTS_DATA_FAILURE, PRODUCTS_DATA_REQUEST } from './actionType';

export const getElectricProducts=async(dispatch)=>{
    dispatch({type:PRODUCTS_DATA_REQUEST}) ;
    return await axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Products?type=Laptop`)
    
}