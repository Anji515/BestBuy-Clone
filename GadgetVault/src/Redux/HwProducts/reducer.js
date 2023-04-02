import { GET_PRODUCTS_DATA, GET_PRODUCTS_EAT_WELL, GET_PRODUCTS_LAPTOP, GET_PRODUCTS_MOBILES, PRODUCTS_DATA_FAILURE, PRODUCTS_DATA_REQUEST } from "./actionType"


const initial={
     HwProducts:[],
     EwProducts:[],
     Electronics:[],
     Mobiles:[],
     isLoading:false,
     isError:false
}

export const reducer=(state=initial,{type,payload})=>{
    
    switch (type) {
        case PRODUCTS_DATA_REQUEST:{
            return {...state, isLoading:true}
        }

        case GET_PRODUCTS_DATA:{
            return {...state, isLoading:false, isError:false, HwProducts:[...payload]}
        }

        case PRODUCTS_DATA_FAILURE:{
            return {...state, isError:true}
        }
        
        case GET_PRODUCTS_EAT_WELL:{
            return {...state, isLoading:false, isError:false, EwProducts:[...payload]}
        }

        case GET_PRODUCTS_LAPTOP:{
            return {...state, isLoading:false, isError:false, Electronics:[...payload]}
        }
       
        case GET_PRODUCTS_MOBILES:{
            return {...state, isLoading:false, isError:false, Mobiles:[...payload]}
        }
        default:{
            return state
        }
            
    }

}