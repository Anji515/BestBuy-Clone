import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { Box, Input, Button, SimpleGrid, Heading, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const HwSideBar = () => {
      const [searchParam,setSearchParam]=useSearchParams();
      const initialRating=searchParam.getAll('rating').map(Number);
      const initialColor=searchParam.getAll('color');
      const initialBrand=searchParam.getAll('brand');
      const initialOrder=searchParam.get('order');

      const [order,setOrder]=useState(initialOrder || '')
      const initialSearch=searchParam.get('q')
      const [s,setS]=useState('')
      const [search,setSearch]=useState(initialSearch)
      const [rating,setRating]=useState(initialRating || [])
      const [color,setColor]=useState(initialColor || [])
      const [brand,setBrand]=useState(initialBrand || [])

      const {HwProducts}=useSelector((state)=>state.HwReducer);

      const handleRating=(e)=>{
        const newRating=[...rating] ;
        const value=+(e.target.value) ;
        if(newRating.includes(value)){
          newRating.splice(newRating.indexOf(value),1)
        }else {
          newRating.push(value)
        }
        setRating(newRating)
      }

      const handleColor=(e)=>{
        const newColor=[...color] ;
        const value=(e.target.value) ;
        if(newColor.includes(value)){
          newColor.splice(newColor.indexOf(value),1)
        }else {
          newColor.push(value)
        }
        setColor(newColor)
      }

      const handleBrand=(e)=>{
        const newBrand=[...brand] ;
        const value=(e.target.value) ;
        if(newBrand.includes(value)){
          newBrand.splice(newBrand.indexOf(value),1)
        }else {
          newBrand.push(value)
        }
        setBrand(newBrand)
      }
      // console.log('handleColor:', color.includes('Black'))


      const handleChange=(e)=>{
        const value=e.target.value ;
        setS(value);
      }

      const handleSearch=()=>{
        setSearch(s)
      }

      const handleSort=(e)=>{
        const value=e.target.value ;
        setOrder(value);
      }

      useEffect(()=>{
        const params={
          rating,
        }
        order && (params.order = order)
        search && (params.q = search)
        color && (params.color=color)
        brand && (params.brand=brand)
        setSearchParam(params)
      },[rating,order,search,color,brand])

  return (
    <Box width={['45%','38%','32%','22%']} marginTop={'12px'} padding={'5px'} marginRight={'6px'} borderRight={'1px solid orange'}>
      <Heading align='center' color={'gray'} fontSize={'22px'}>Filter Here</Heading>
      <br />
      <Box boxShadow= ' rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' borderRadius={'16px'}  border={'0px solid grey'} p='5px' marginRight={'2px'} align='left'  marginLeft='10px'>
      <Heading color={'orange'} fontSize={'15px'} textDecoration={'underline'} >Filter by Rating</Heading>
        <input value={1} onChange={handleRating} checked={rating.includes(1)} type="checkbox" />
        <label >{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input value={2} onChange={handleRating} checked={rating.includes(2)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input value={3} onChange={handleRating} checked={rating.includes(3)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input value={4} onChange={handleRating} checked={rating.includes(4)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input value={5} onChange={handleRating} checked={rating.includes(5)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </Box>
      <br />

      <Box boxShadow= ' rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' borderRadius={'16px'} p='5px' marginRight={'2px'} align='left'  marginLeft='10px'onChange={handleSort}>
      <Heading textDecoration={'underline'} color={'orange'} fontSize={'15px'} >Sort By Year</Heading>
        <input name="order" checked={order.includes('asc')}  value={'asc'} type="radio" />
        <label fontSize={['10px','12px','15px']}>Ascending</label>
        <br />
        <input  name="order" checked={order.includes('desc')} value={'desc'} type="radio" />
        <label fontSize={['10px','12px','15px']}>Descending</label>
      </Box>

     <br />
      <Flex  direction={['column','column','column','row']} justifyContent={'left'} border={'0px solid orange'} p='0px' marginRight={'2px'} marginLeft='10px'>
      <Input onChange={handleChange}  width={['100%','80%','50%']} height={'35px'} marginRight={'10px'} isInvalid errorBorderColor='black' focusBorderColor='lime'  placeholder='Search here' />
      <Button onClick={handleSearch} width={['80%','60%','40%']} >Enter</Button>
      </Flex>
      <br />
      <Box boxShadow= ' rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' borderRadius={'16px'} border={'0px solid grey'}  p='5px' marginRight={'2px'} align='left'  marginLeft='10px'>
      <Heading textDecoration={'underline'} color={'orange'} fontSize={'15px'}>Filter by Color</Heading>


        <input  value={'Black'} onChange={handleColor} checked={color.includes('Black')} type="checkbox" />
        <label>Black</label>
        <br />
        <input value={'Gray'} onChange={handleColor} checked={color.includes('Gray')} type="checkbox" />
        <label>Gray</label>
        <br />
        <input value={'Silver'} onChange={handleColor} checked={color.includes('Silver')} type="checkbox" />
        <label>Silver</label>
        <br />
        <input value={'Green'} onChange={handleColor} checked={color.includes('Green')} type="checkbox" />
        <label>Green</label>
        <br />
        <input value={'Blue'} onChange={handleColor} checked={color.includes('Blue')} type="checkbox" />
        <label>Blue</label>
        <br />
        <input value={'Red'} onChange={handleColor} checked={color.includes('Red')} type="checkbox" />
        <label >Red</label>
        <br />
        <input value={'Gold'} onChange={handleColor} checked={color.includes('Gold')} type="checkbox" />
        <label >Gold</label>
        <br />
        <input value={'Graphite'} onChange={handleColor} checked={color.includes('Graphite')} type="checkbox" />
        <label >Graphite</label>
        <br />
        <input value={'carbon'} onChange={handleColor} checked={color.includes('carbon')} type="checkbox" />
        <label >carbon</label>
        <br />
      </Box>

<br />
      <Box boxShadow= ' rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' borderRadius={'16px'} border={'0px solid grey'}  p='5px' marginRight={'2px'} align='left' marginLeft='10px'>
   <Heading textDecoration={'underline'} color={'orange'} fontSize={'15px'}>Filter by Brand</Heading>

        {/* <SimpleGrid >
           {HwProducts && HwProducts.map((el)=>(
           <>
            <input  value={el.color} onChange={handleColor} checked={color.includes(el.color)} type="checkbox" />
            <label>{el.color}</label>
           </>
        ))}
        </SimpleGrid> */}

        <input value={'Samsung'} onChange={handleBrand} checked={brand.includes('Samsung')} type="checkbox" />
        <label>Samsung</label>
        <br />
        <input  value={'Fitbit'} onChange={handleBrand} checked={brand.includes('Fitbit')} type="checkbox" />
        <label>Fitbit</label>
        <br />
        <input value={'NEXT'} onChange={handleBrand} checked={brand.includes('NEXT')} type="checkbox" />
        <label >NEXT</label>
        <br />
        <input value={'Withings'} onChange={handleBrand} checked={brand.includes('Withings')} type="checkbox" />
        <label>Withings</label>
        <br />
        <input value={'Garmin'} onChange={handleBrand} checked={brand.includes('Garmin')} type="checkbox" />
        <label>Garmin</label>
        <br />
        <input value={'Goli'} onChange={handleBrand} checked={brand.includes('Goli')} type="checkbox" />
        <label>Goli</label>
        <br />
      </Box>

    </Box>
  );
};

export default HwSideBar

const DIV = styled.div`
  width: 35%;
  border-right: 1px solid gray;
`
;
