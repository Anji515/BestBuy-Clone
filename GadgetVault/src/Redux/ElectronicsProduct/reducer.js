import { GET_PRODUCTS_DATA, PRODUCTS_DATA_FAILURE, PRODUCTS_DATA_REQUEST } from "./actionType"

const initial={
     ElectricProducts:[],
     isLoading:false,
     isError:false
}

export const reducer=(state=initial,{type,payload})=>{
    
    switch (type) {
        case PRODUCTS_DATA_REQUEST:{
            return {...state, isLoading:true}
        }

        case GET_PRODUCTS_DATA:{
            return {...state, isLoading:false, isError:false,  ElectricProducts:[...payload]}
        }

        case PRODUCTS_DATA_FAILURE:{
            return {...state, isError:true}
        }
    
        default:{
            return state
        }
            
    }

}