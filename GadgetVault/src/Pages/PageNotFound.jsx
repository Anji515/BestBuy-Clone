import { Box, Button, Center,  Heading,  Image } from '@chakra-ui/react'
import React from 'react'
import { Link as Goto } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
            <Button marginLeft={'250px'} _hover={{
                bg:'teal.800'
            }} marginTop={'20px'} bg={'teal'} color={'white'}><Goto to='/'>Go to Home</Goto></Button>
    <Center padding={'10px'} margin={'auto'}>
        <Heading color={'teal.500'}>Page Not Found</Heading>
        <Image width={'50%'} src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10029.jpg?size=626&ext=jpg&ga=GA1.1.2137096606.1680448413&semt=ais' alt='Not Found' color={'red'} />
    </Center>
    </>

  )
}

export default PageNotFound