import React, { useEffect, useState } from 'react' ;
import { Box, SimpleGrid, Heading, Flex, Input, Image, CircularProgress, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { getHwProducts } from '../../Redux/HwProducts/action';
// import HwProductCard from './HwProductCard';
import { shopByImages } from './HwImages';
import {Button, Text } from '@chakra-ui/react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Spinner } from '@chakra-ui/react'
import spinner from './Spinner1.gif'
import { useSearchParams } from 'react-router-dom';

const HwProductList = () => {
  //  Store Data
  const {HwProducts,isLoading}=useSelector((state)=>state.HwReducer)
  const dispatch=useDispatch();
  // Cart and Wishlist
  const [cart,setCart]=useState([])
  const [wishList,setWishList]=useState([])

  // Search Params
  const [searchParam]=useSearchParams();
  const paramObj={
   params:{ 
    rating:searchParam.getAll('rating'),
    _sort: searchParam.get('order')&&"price",
    _order:searchParam.get('order')
  }
  }

  const handleCart=(item)=>{
    let exist = false;
    const updatedCart = cart.map((data)=>{
    if(data.id === item.id){
          //  console.log(item.id)
           exist = true;
           return {...data}
          }
       return data
    });
     if(!exist){
      setCart([...updatedCart,{...item,count:1}]);
     }
}

const handleWishList=(item)=>{
    let exist = false;
 const updatedWish = wishList.map((wish)=>{
    if(wish.id === item.id){
        exist = true;
        return {...wish, count:wish.count+1}
    }
    return wish
     });

   if(!exist){
    setWishList([...updatedWish,{...item,count:1}]);
    } else {
    setWishList(updatedWish)
    }
  }  
  
  useEffect(()=>{
    const jsonData=localStorage.getItem('Cart')
    jsonData == null ? setCart([]) : setCart(JSON.parse(jsonData))
  },[])


  useEffect(()=>{
    dispatch(getHwProducts(paramObj))
  },[searchParam])

  useEffect(()=>{
    window.localStorage.setItem('Cart',JSON.stringify(cart))
  },[cart])

  return (
    <Flex width={['100%','85%','85%','72%']} flexDirection={'column'}>
        <Heading align='left' p={'5px'} fontSize={'22px'} borderBottom='0px solid gray'>Shop by type</Heading>
               <SimpleGrid width={['100%','85%','100%','100%']} border='0px solid red' gap={'5px'} columns={[4,4,4,4]}>
        {shopByImages && shopByImages?.map((item)=>(
                <Box height={['30vh','45vh','50vh','50vh']} border='0px solid grey' _hover={{textDecoration:'underline',color:'blue'}} cursor='pointer' align='center' width={'100%'} key={item.id}>
                <Image height={['25vh','35vh','40vh']} borderRadius={'50%'} width={['100%','100%']} src={item.image} alt={item.name}/>
                <Heading color='#0457c8' noOfLines={1} fontSize={'14px'}>{item.name}</Heading>
               </Box>)
             )}
        </SimpleGrid>
        <br />
        <Flex justifyContent={'space-between'}>
        <Heading fontSize={'14px'} marginLeft='10px' color={HwProducts.length ? "black":"red"} >{HwProducts && HwProducts.length} items</Heading>
        <Input  width={'30%'} isInvalid errorBorderColor='black' focusBorderColor='lime'  placeholder='Search here' />
        </Flex>
        { !isLoading ?  <SimpleGrid width={'100%'} marginTop='25px'>
        { HwProducts && HwProducts?.map((el)=>(
          // <HwProductCard handleCart={handleCart} key={el.id} {...el} />
      <Box width={'100%'} border='0px solid red' key={el.id}>
    <Flex border='0px solid blue'>
    <Box width={['100%','100%','100%','60%']} padding='10px' align={'center'}>
    <Image height={'200px'} width={['100%','60%','70%','50%']} src={el.image[1]} alt={el.brand}/>
    </Box>

    <Box textAlign={'left'} width={['40%','80%','80%']} border='0px solid green' >
    <Text color={'blue'}>{el.name}</Text>
    <Heading color={'yellow.700'} fontSize='20px'>{new Array(el.rating).fill(0).map((_,i)=>'\u2605')}</Heading>
    <h1>{el.category}</h1>
    <h1>{el.brand}</h1>
    <p>{el.color}</p>
    <Button _hover={{
      bg:'whatsapp.400',
      color:'white'
    }} width={['100%','85%','65%','40%']} bg={'orange'} gap='10px' onClick={()=>handleWishList(el)}><FiHeart/><Text>Add To WishList</Text></Button>
          </Box>

    <Box  width={['35%','40%','40%','50%']} >
    <Heading textAlign={'left'} fontSize='28px'>${el.price}</Heading>
    <Flex width={'100%'} gap='10px' direction={['column','row']} border={'0px solid grey'}>
    {el.saving &&  <Button color={'black'} height='30px' _hover={{
      bg:'grey',
      color:'white'
    }} bg='whatsapp.300' disabled={true} width={['100%','85%','65%','35%']} fontSize='14px'>Savings : $ {el.saving}</Button>}
    <Heading width={['100%','85%','65%','30%']} borderRadius={'16px'} align='center' marginTop={'10px'} bg='grey' color={'orange.300'} fontSize={'14px'} >Was ${el.price+el.saving}</Heading>
    </Flex>
    <br />
    <Button _hover={{
      bg:'whatsapp.400',
      color:'white'
    }} width={'95%'} bg={'yellow'} gap='10px' onClick={()=>handleCart(el)}><FiShoppingCart/><Text>Add To Cart</Text></Button>
    </Box>
    </Flex>
  </Box>
    ))}
  </SimpleGrid>: 
  <Center> <Image width={'200px'} height='200px'  marginTop='20px' bg={'black'} align='center' src={spinner} alt='loading'/> </Center>
  // <CircularProgress align='center' thickness='5px'  width={'250px'}height='250px' emptyColor='gray.200' isIndeterminate color='green.300' />
  // <Center m={"auto"}>
  //           <Spinner
  //             thickness="4px"
  //             speed="0.65s"
  //             emptyColor="gray.200"
  //             color="green.500"
  //             size="xl"
  //           />
  //         </Center>
  // <Center>
  //   <Spinner align='center' thickness='5px' speed='0.75s' emptyColor='gray.200' color='blue.300' width={'200px'}height='200px' />
  // </Center>
  }
     </Flex>
  )
}

export default HwProductList