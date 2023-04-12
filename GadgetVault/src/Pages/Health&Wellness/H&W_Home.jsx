import React from 'react'
import {Box, Button, Flex, Heading, Image, SimpleGrid, Text,Breadcrumb,BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { helpInImages, homeImages, solutionImages } from '../../Components/H&WProductsComponents/HwImages' // Imported Images
import { Navigate, useNavigate } from 'react-router-dom'

const HwHome = () => {

  const navigate=useNavigate()

  const hanldePage=(id)=>{
    //  console.log('id:', id)
     if(id==1){
     navigate('/HwPrdoucts')
     }
     if(id==2){
      navigate('/EwPrdoucts')
      }
    if(id==3){
        navigate('/electronics')
        }
        if(id==4){
          navigate('/Mobiles')
          }
  }

  return (
    <div >
        <Box width={'62%'} align='left' m={'auto'}>
         <Breadcrumb color={'blue.400'} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
           <BreadcrumbLink href='/' color={'whatsapp.500'}>GadgetVault</BreadcrumbLink>
           </BreadcrumbItem>

             <BreadcrumbItem isCurrentPage>
             <BreadcrumbLink color={'whatsapp.800'}>Health & Wellness</BreadcrumbLink>
            </BreadcrumbItem>
         </Breadcrumb>
         <Heading fontSize={'25px'} color={'whatsapp.800'}>Health & Wellness Solutions</Heading>
        </Box>

        <br />

         {/* Health and wellness list of products. */}
        <Box width={'100%'} bg='#ebedf0' align='center' padding={10} margin={'auto'}>
        <Flex direction={'column'}>
         <Heading color={'whatsapp.800'}>Healthy living starts here.</Heading>
         <p>Shop the technology and solutions to help you stay fit and manage your family’s health.</p>
         </Flex>
         <br />
       <SimpleGrid columns={[2,2,3,3,6,6]} width={'72%'} justifyContent={'center'} p={10} gap='25px' alignItems={'center'} >
       {homeImages && homeImages?.map((item)=>(
                <Box onClick={()=>hanldePage(item.id)} _hover={{textDecoration:'underline',color:'blue'}} cursor='pointer' align='center' width={'100%'} key={item.id}>
                <Image borderRadius={'50%'} width='100%' src={item.image} alt={item.name}/>
                <Heading color='#0457c8' noOfLines={1} fontSize={'14px'}>{item.name}</Heading>
                {/* <Text noOfLines={2} fontSize={'16px'}>{item.body}</Text> */}
               </Box>)
             )}
         </SimpleGrid>
       </Box>

       <br />
       <Box w={'70%'} margin='auto'>
        <Flex direction={['column','column','row','row',]} padding='20px' bg='#5bb9e2' width={'90%'} m={'auto'} align='center' justifyContent={'center'} gap='18px'>
          <Image width={['65%','45%','35%','15%']} src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-91312_blue_shirt_training-600ad701-8963-4ae0-83a5-f8d56f9380e6.jpg;maxHeight=272;maxWidth=400' alt='storeVisit'/>
          <Heading color='#fffefd' fontSize={'25px'} >A Certified Personal Trainer 
            <br />
            wants to talk live with you.</Heading>
          <Button>Visit the Virtual Store</Button>
        </Flex>
       </Box>

        {/* Health and wellness Help. */}
       <Box width={'100%'} align='center' margin={'auto'}>
       <SimpleGrid columns={[1,2,3,3]} width={'68%'} justifyContent={'center'} p={10} gap='18px' >
                <Box align='center' width={'100%'} >
                <Image width='100%' src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-582402_pol_COPE_DER-be6a2b62-2559-4169-94a1-e0f4523707ed.jpg;maxHeight=416;maxWidth=612' alt='img1' />
                <Heading lineHeight={'30px'} color='#0457c8' noOfLines={2} fontSize={'22px'}>Save on select sleep solutions, including mattresses and more.</Heading>
               </Box>
                <Box align='center' width={'100%'} >
                <Image width='100%' src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/CO-106543_pol_COPE2_DER-b27f9d75-ee5c-4943-a533-321a850c29ac.jpg;maxHeight=416;maxWidth=612' alt='img2' />
                <Heading lineHeight={'30px'} color='#0457c8' noOfLines={2} fontSize={'22px'}>AliveCor health monitoring products.</Heading>
                <Text noOfLines={2} fontSize={'14px'}>EKG monitors let you easily track and share your heart rhythm from anywhere.</Text>
               </Box>
               <Box align='center' width={'100%'} >
                <Image width='100%' src='https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_top_deals-99079.jpg;maxHeight=416;maxWidth=612' alt='img3' />
                <Heading lineHeight={'30px'} color='#0457c8' noOfLines={2} fontSize={'22px'}>Health and wellness Top Deals.</Heading>
                <Text noOfLines={2} fontSize={'14px'}>Find great deals on technology designed to help you manage your health.</Text>
               </Box>
         </SimpleGrid>
       </Box>

       {/* Health and wellness solutions Component. */}
       <Heading align='center' color={'whatsapp.800'}>Health and wellness solutions.</Heading>
       <Box width={'100%'} align='center' margin={'auto'}>
       <SimpleGrid columns={[2,2,3,3]} width={'68%'} justifyContent={'center'} p={10} gap='25px' alignItems={'center'} >
       {solutionImages && solutionImages?.map((item)=>(
                <Box align='left' width={'100%'} key={item.id}>
                <Image  cursor='pointer' width='100%' src={item.image} alt={item.name}/>
                <Heading lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} color='#0457c8' noOfLines={1} fontSize={'22px'}>{item.name}</Heading>
                <Text noOfLines={2} fontSize={'16px'}>{item.body}</Text>
               </Box>)
             )}
         </SimpleGrid>
       </Box>

       <Heading align='center' color={'whatsapp.800'}>Health and wellness solutions.</Heading>
       <Box width={'100%'} align='center' margin={'auto'}>
       <SimpleGrid columns={[2,2,2,2]} width={['100%','68%','68%']} justifyContent={'center'} p={10} gap='25px' alignItems={'center'} >
       {helpInImages && helpInImages?.map((item)=>(
                <Box border={'1px solid gray'} p='20px' align='center' height={'40vh'} width={'100%'} key={item.id}>
                <Image  cursor='pointer' width={['100%','75%','75%','50%']} src={item.image} alt={item.name}/>
                <Heading align='left'  lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} color='#0457c8' noOfLines={1} fontSize={'18px'}>{item.name}</Heading>
                <Text align='left' noOfLines={2} fontSize={'16px'}>{item.body}</Text>
               </Box>)
             )}
         </SimpleGrid>
       </Box>
       
       <Box width={'63%'} border={'1px solid grey'} align='center' margin={'auto'}>
       <br />
           <Heading align='left' marginLeft={'20px'} fontSize={'24px'} color={'whatsapp.800'}>Prioritizing health and wellness.</Heading>
           <br />
           <Flex  width={'100%'} direction={['column','column','row','row']} borderTop={'1px solid grey'} >
                <Box  p='20px' align='center' width={'100%'} >
                <Heading align='left' lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} color='#0457c8' noOfLines={1} fontSize={'22px'}>Essentials for healthy living.</Heading>
                <Text align='left' fontSize={'16px'}> Today, we know even more about what it takes to live a healthy lifestyle, from exercise and eating a balanced diet to getting quality sleep and practicing mindfulness. Making health and wellness a priority may seem overwhelming, but, thanks to an abundance of innovative health solutions available at Best Buy, it’s easier than ever before. For instance, if you want to add new exercise equipment to your home gym, we carry a wide variety of fitness gear that wll help you stay active. Sometimes a new water bottle is all it takes to inspire you to get in your recommended eight glasses a day, so treat yourself to one from our wide selection. A great way to encourage healthy family habits is to start gardening together, either indoors or outdoors. Kids will love growing their own fruits and vegetables and will enjoy eating their harvest. Your whole family can take steps to a healthier life while having fun at the same time, and what could be better than that?</Text>
               </Box>

               
               <Box p='20px' align='center' width={'100%'} >
                <Heading align='left' lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} color='#0457c8' noOfLines={1} fontSize={'22px'}>Finding fitness inspiration.</Heading>
                <Text align='left' noOfLines={[20,null,null]} fontSize={'16px'}>Sometimes all you need to meet your personal health goals are motivating ideas and the right tools to help you achieve them. Connecting to online classes with smart health and fitness apps during workouts gives you access to a world of resources and fitness inspiration from professional instructors all around the globe, right in the comfort and convenience of your home. Watch live or saved recordings of cooking shows on your smart TV that help you prepare recipes for dinner that day, or assemble meals that you put in food storage containers to place in your freezer for future quick and healthy meals that are ready in advance. If you know someone who’s on a health and wellness journey, we have plenty of fitness gifts that are sure to be appreciated by anyone on the receiving end of such a thoughtful present. We also have great tips and ideas in our discover and learn center about finding the right yoga equipment and choosing the best type of personal fitness equipment. Best Buy is here with the health solutions to support your positive efforts.</Text>
               </Box>
           </Flex>
       </Box>
       <br />
          {/* Delivery Pattern */}
       <Box width={'100%'} textAlign='center' >
       <SimpleGrid columns={[1,2,3,3]} width={'63%'} border='0px solid red' margin={'auto'} p={10} gap='18px' >
                <Flex align='center'  gap={'5px'} width={'100%'} >
                <Image width='25%' src='https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-vpe-freeshippin_der1-206853.png;maxHeight=144;maxWidth=144' alt='img1' />
                <Flex direction={'column'}>
                <Heading lineHeight={'30px'} color='#68555a' noOfLines={2} fontSize={'18px'}>Free shipping</Heading>
                <Text noOfLines={2} fontSize={'13px'}>on orders $35 and up.</Text>
                </Flex>
               </Flex>

               <Flex align='center' gap={'5px'} width={'100%'} >
                <Image width='25%' src='https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-34525-app-vpe-storepickup1-206866.png;maxHeight=144;maxWidth=144' alt='img1' />
                <Flex direction={'column'}>
                <Heading lineHeight={'30px'} color='#68555a' noOfLines={2} fontSize={'18px'}>Ready in one hour</Heading>
                <Text  noOfLines={2} fontSize={'13px'}>with Store Pickup.</Text>
                </Flex>
               </Flex>

               <Flex align='center' gap={'5px'} width={'100%'} >
                <Image width='25%' src='https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-vpe-freeshippin_der1-206853.png;maxHeight=144;maxWidth=144' alt='img1' />
                <Flex direction={'column'}>
                <Heading lineHeight={'30px'} color='#68555a' noOfLines={2} fontSize={'18px'}>Same-day delivery.</Heading>
                <Text noOfLines={2} fontSize={'13px'}></Text>
                </Flex>
               </Flex>
                
         </SimpleGrid>
       </Box>


       <br />
       <br />
       {/* Desclosur Pattern */}
       <Box width={'63%'} align='center' margin={'auto'}>
           <Heading align='left' fontSize={'22px'}>Disclosures.</Heading>
           <br />
           <Flex  width={'100%'} direction={['column','column']} borderTop={'1px solid grey'} >
                <Box  align='center' width={'100%'} >
                <Heading align='left' lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} noOfLines={1} fontSize={'16px'}>HSA- and FSA-eligible products:</Heading>
                <Text align='left' fontSize={'13px'}> *Eligible products are reimbursable under your HSA or FSA. Contact your healthcare provider for a full list of eligible products.</Text>
               </Box>

               <Box align='center' width={'100%'} >
                <Heading align='left' lineHeight={'40px'} cursor='pointer' _hover={{textDecoration:'underline',color:'blue'}} fontSize={'16px'}>Continuous glucose monitors at Best Buy:</Heading>
                <Text align='left' fontSize={'13px'}>*By going to the secure YourHealth.BestBuy.com site, you are entering a site hosted and operated by Best Buy. Please review their Privacy Policy. All personal information you provide is subject to that Privacy Policy. Different terms and conditions may apply.</Text>
               </Box>
           </Flex>
       </Box>
       <br />
    </div>
  )
}

export default HwHome
