import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link, Button, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import { getElectricProducts } from '../Redux/ElectronicsProduct/action'
import { PRODUCTS_DATA_REQUEST } from '../Redux/ElectronicsProduct/actionType'
import Electric_Card from '../Components/Electric_Card'
//import Electric_list from '../Components/Electric_list'
const Electronics = () => {
  const [pro,setpro]=useState([])
  const dispatch=useDispatch()
  const data=useSelector((store)=>{
    return store.ElectricProducts 
  })
  //console.log(data)
useEffect(()=>{
     
      dispatch(getElectricProducts).then((res)=>{
        setpro(res.data)
      })
},[])
//console.log(pro)
  return (
    <Wrapper className='wrapper' >
      <div className='container grid grid-filter-column'>
        <div className='filtersection'>
          <input className='input' type="text" placeholder='SEARCH' />

          <h2 className='highlight'>Category</h2>
          <br />

          <Box className='btn'>
            <Button>All</Button>
            <Button>Mobile</Button>
            <Button>Laptop</Button>
            <Button>Computer</Button>
            <Button>Accessories</Button>
            <Button>Watch</Button>
          </Box>
          <h2 className='highlight'>Company</h2>
          <br />
          <select name="" id="" className='select'>
            <option value="">All</option>
            <option value="">LG</option>
            <option value="">Videocon</option>
            <option value="">Samsung</option>
          </select>
          <h2 className='highlight'>Price</h2>
          <br />
          <Slider aria-label='slider-ex-1' defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <br />
          <br />
          <div className='clear_filter'>
            <button>CLEAR FILTERS</button>
          </div>

        </div>
        <section className='product-view-sort'>
          <div className='sort-filter'>
            <div>
                 hello
            </div>
            <div>
              <select name="" id=""className='price'>
                <option value="">Price(a-z)</option>
                <option value="">Low To High</option>
                <option value="">High To Low</option>
              </select>
            </div>
          </div>
          <div className='main-product'>
           
            {
              pro.length>0 && pro.map((item,index)=>{
                return <Electric_Card key={item.id} {...item}/>
              })
            }
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default Electronics;

const Wrapper = styled.section`
   height:auto;
   width:100%;
   border:1px solid red;
  
   .container{
    height:auto;
    width:100%;
    border:1px solid black;
    margin:auto;
    display:flex;
    
   }
   .filtersection{
    height:auto;
    width:20%;
    border:1px solid green
   }
   .product-view-sort{
    height:auto;
    width:80%;
    border:1px solid pink
   }
   .sort-filter{
    height:50px;
    width:100%;
    border:1px solid yellow;
    display:flex;
    justify-content:space-around;
    align-items:center
   }
   .btn {
    display:flex;
    flex-direction:column;
    background-colour:white;
   }
  .clear_filter{
    height:40px;
    width:80%;
    border:1px solid red;
    background-color:rgb(232,30,37);
    margin:auto;
    align-item:center
  }
  .input{
    border:1px solid black;
    margin-top:20px
  }
  .highlight{
    text-size:bold;
    margin-top:20px
  }
  .select{
    border:1px solid blue
  }
  .price{
    border:1px solid blue
  }
  .main-product{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:10px;
    margin-left:10px;
    margin-top:10px;
    margin-bottom:10px
  }
  @media screen and (max-width: 500px) {
    .main-product{
      grid-template-columns: repeat(1, 1fr);
    }
    .container{
      flex-direction:column;
     width:100%
    }
    .filtersection{
      width:100%
    }
    .sort-filter{
      width:100%
    }
    .product-view-sort{
      width:100%
    }
    .wrapper{
      width:100%
    }
  }

  @media screen and (max-width: 800px) and (min-width: 500px) {
    .main-product{
      grid-template-columns: repeat(2, 1fr);
    }
    .container{
      flex-direction:column;
       width:100%
    }
    .filtersection{
      width:100%
    }
    .sort-filter{
      width:100%
    }
    .product-view-sort{
      width:100%
    }
    .wrapper{
      width:100%
    }
  }
`