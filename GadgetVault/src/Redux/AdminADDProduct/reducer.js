import { PRODUCTS_FAILURE, PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS, GET_PRODUCTS_SUCCESS } from "./actiontypes"


const initialstate={
     products:[],
     isLoading:false,
     isError:false
}

export const reducer=(state=initialstate,{ type , payload })=>{
    switch (type) {
        case PRODUCTS_REQUEST:
            return {...state , isLoading:true}
        case ADD_PRODUCTS_SUCCESS:
            return {...state , isLoading:false}
        case PRODUCTS_FAILURE:
            return {...state , isLoading:false , isError:true}
        case GET_PRODUCTS_SUCCESS:
            return {...state , isLoading:false , products:payload}
        default:
            return state
        }
            
    }

