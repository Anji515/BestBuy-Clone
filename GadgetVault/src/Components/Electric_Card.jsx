import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Electric_Card = ({ id, image, name, brand, rating, reviews, Processor, os, graphics, memory, display, price, color, saving, available, emi, ram2, processor2, storage2, category, type, special_features }) => {
    return (
        <Div className='div'>
            <img className='img' src={image[0]} alt="" />
            <p><Heading as='h5' size='sm'>{name.substring(0, 30)}</Heading></p>
            <p><Heading as='h5' size='sm'>{brand}</Heading></p>
            <p><Heading as='h5' size='sm'>Rs. {price}</Heading></p>

            <Button>Add To Cart</Button>
            &nbsp;&nbsp;
            <Button>See More...</Button>
        </Div>
    )
}

export default Electric_Card


const Div = styled.div`
height:400px;
width:300px;
border:1px solid black;

.img{
    
    height:280px;
    width:auto
}
@media only screen and (max-width: 500px)  {
.div{
    width:500px
}
}
@media screen and (max-width: 800px) and (min-width: 500px) {
    .div{
        width:auto
    }
}


`