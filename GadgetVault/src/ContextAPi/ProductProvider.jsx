import { useState } from "react";
import { createContext } from "react";
export const Product=createContext();

export const ProductProvider=({children})=>{
    const [type,setType]=useState('Laptop')


   return(
       <Product.Provider value={{type,setType}}>{children}</Product.Provider>
   )
}