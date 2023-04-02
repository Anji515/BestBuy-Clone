import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
// import logo from '../assets/logo.png'

export const About = () => {
  return (
    <Box textAlign="center">
      {/* <Image src={logo} alt="Gadget Vault Logo" maxW="100px" mb={4} /> */}
      <Heading as="h2" size="lg" mb={4}>Welcome to Gadget Vault</Heading>
      <Text fontSize="22px" mb={5}>We are an online store that provides a wide range of high-quality gadgets at affordable prices.</Text>
      <Text fontSize="26" fontWeight="bold" mb={4}>Our Mission</Text>
      <Text fontSize="22" mb={5}>To make the latest and greatest technology accessible to everyone, while providing exceptional customer service and a seamless shopping experience.</Text>
      <Text fontSize="26" fontWeight="bold" mb={4}>Shop with Confidence</Text>
      <Text fontSize="22" mb={5}>Our website is secure and easy to navigate, with detailed product descriptions and reviews from previous customers. We also offer fast and reliable shipping, easy returns, and a dedicated support team to assist you with any questionsor concerns.</Text>
      <Text fontSize="26" fontWeight="bold" mb={4}>Browse Our Selection</Text>
      <Text fontSize="22" mb={5}>From smartphones and laptops to smart home devices and gaming accessories, we have everything you need to stay connected and up-to-date with the latest technology trends.</Text>
    </Box>
  )
} 
