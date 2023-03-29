import React from 'react';
import { Box } from '@chakra-ui/react';
import HwSideBar from './../../Components/H&WProductsComponents/HW_SideBar';
import HwProductList from '../../Components/H&WProductsComponents/HwProductList';


const HwPrdoucts = () => {
  return (
    <Box display={'flex'} >
      <HwSideBar />
      <HwProductList/>
    </Box>
  )
}

export default HwPrdoucts