import { Heading , Button , Flex } from '@chakra-ui/react'
import React from 'react'
import DashboardList from './DashboardList'
import { useContext } from 'react'
import { AdminSide } from '../../ContextAPi/AdminProvider'






const AdminDashboard = () => {
  const {setAdmin} = useContext(AdminSide)
  return (
    <div>

      <Flex justifyContent={"space-between"} mb={5} >
          <Heading> 
            ADMIN DASHBOARD
            </Heading>
          
            <Button color={'white'} background={'black'} _hover={{ bg: "black" }} onClick={() => setAdmin(false)}>Logout</Button>
  
           
        </Flex>

       <DashboardList/>    
    </div>
  )
}



export default AdminDashboard