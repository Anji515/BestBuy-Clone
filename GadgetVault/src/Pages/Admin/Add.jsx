import { Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addProduct } from '../../Redux/AdminADDProduct/action'

const intialstate = {
    image : "",
    title:"",
    price:"",
    brand:"",
    discount:"",
    category:""
}

const Add = () => {
    const [product , setproduct] = useState(intialstate)
    
    const dispatch = useDispatch()

    const handlechange = (e) =>{
        const {name , value} =  e.target;
        setproduct( prev =>{
            return {...prev , [name]:value}
        })
    }

    const handlesubmit = (e) =>{
        e.preventDefault()
        dispatch(addProduct(product))
        setproduct(intialstate)
    }

  return (
    <div>
  <Heading as="h2" size="lg" mb="1">ADD PRODUCT</Heading>
  <form onSubmit={handlesubmit}>
    <FormControl mb="1" isRequired>
      <FormLabel>Image</FormLabel>
      <Input type="text" value={product.image} onChange={handlechange} name="image" placeholder='Image' />
    </FormControl>
    <FormControl mb="1" isRequired>
      <FormLabel>Title</FormLabel>
      <Input type="text" value={product.title} onChange={handlechange} name="title" placeholder='Title' />
    </FormControl>
    <FormControl mb="1" isRequired>
      <FormLabel>Price</FormLabel>
      <Input type="number" value={product.price} onChange={handlechange} name="price" placeholder='Price'/>
    </FormControl>
    <FormControl mb="1" isRequired>
      <FormLabel>Brand</FormLabel>
      <Input type="text" value={product.brand} onChange={handlechange} name="brand" placeholder='Brand' />
    </FormControl>
    <FormControl mb="1" isRequired>
      <FormLabel>Discount</FormLabel>
      <Input type="number" value={product.discount} onChange={handlechange} name="discount" placeholder='Discount'/>
    </FormControl>
    <FormControl mb="1" isRequired>
      <FormLabel>Category</FormLabel>
      <Select name="category" id="category" value={product.category} onChange={handlechange} placeholder='Select Category'>
        <option value="watches">Watches</option>
        <option value="blender">Blender</option>
        <option value="exercise">Exercise</option>
      </Select>
    </FormControl>
    <Button type='submit' colorScheme='blue'>Submit</Button>
  </form>
</div>
  )
}


export default Add
