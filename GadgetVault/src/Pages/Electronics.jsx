import React, { useState } from 'react'
import styled from "styled-components"



const Electronics = () => {
 

 
  return (
    <Div>
      <div className='clockdiv'>
          <div className='deal'>
           
              <H1><span className='red'>Deal</span> of the Day.</H1>
              <h4 style={{color:'white'}}>Great new deals. Every day.</h4>
               <a style={{color:"yellow"}}>See Deal of the Day FAQs</a>
          </div>
          <div>
              clock
          </div>
      </div>
      <div className='top_deal'>
           <div className='top_deal_1'>
                <span>Top Deals</span>
           </div>
           <div className='top_deal_2'>
            <p>Top Deals
Today’s featured deals and top tech. Valid through 4/2/23.*</p>
           </div>
      </div>
      <hr/>
      <div className='sliderdiv'>
     
      </div>
     
    </Div>
  )
}

export default Electronics

const Div=styled.div`
   height:100vh;
   width:100%;
   border:1px solid red;
  
   
   .red{
    height:80px;
    width:150px;
    border:1px solid red;
    background-color:rgb(232,30,37)
   }
  .clockdiv{
    height:130px;
    width:100%;
    border:1px solid blue;
    display:flex;
    justify-content: space-around;
    background-color:blue;
    align-items : center;
    margin-top:120px;
  }   
   .deal{
    text-align: justify;
   
   }
   .top_deal{
    height:60px;
    width:100%;
    border:1px solid white;
    display:flex;
    align-items : center;
   }
   .top_deal_1{
    height:100%;
    width:20%;
    background-color:rgb(232,30,37);
    font-size:30px;
 color:white
   }
   .top_deal_2{
    margin-left:20px
   }
   .sliderdiv{
    height:300px;
    width:100%;
    border:1px solid black
   }
`

const H1=styled.h1`
 font-size:40px;
 color:white
`

const Item=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`