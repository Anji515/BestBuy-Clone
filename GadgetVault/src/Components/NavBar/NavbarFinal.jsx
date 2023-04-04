import { Box, Flex, Text, Button, Stack, Image, Input, useColorModeValue, useBreakpointValue, FormControl, Select, Heading } from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import {Link as Goto, Link, useNavigate, useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Login } from '../Login/Login';
import Logo from "../../Images/Logo.png";
import { FiLogOut, FiShoppingCart } from 'react-icons/fi';

const getUrl=(url,search)=>{
   
  if(search){
      return (url=`${url}?q=${search}`)
  }
  return url;
}


export default function NavbarFinal() {
    
    const {auth,isLoadig}=useSelector((state)=>state.HwReducer)
    const UserName = useSelector((store) => store.AuthReducer.UserName);


    // Search Functionality
//     let [searchParam,setSearchParam] = useSearchParams()
//     const [searchQuery,setSearchQuery] =useState('')
//     console.log('searchQuery:', searchQuery)



//      useEffect(()=>{
//       let apiUrl = getUrl(`https://royalrento.onrender.com/AllProducts`,
//       searchQuery
//     )
//      fetchdata(apiUrl)
//    },[searchQuery])

//     const [s,setS] = useState('')
//     console.log('s:', s)

//     const handleInput=(e)=>{
//         setS(e.target.value)

//     }

//     const handleSearch=()=>{
//         setSearchQuery(s);
//         navigate('/results')
//         setS('')
//     }


//     useEffect(()=>{
//         let objPar= {}
//         if (searchQuery){
//             objPar.q=searchQuery
//         }
//         setSearchParam(objPar);
//     },[searchQuery])

  
    return (
      <Box backgroundColor='#202020' position='sticky' top='0' bottom='0' zIndex={'1'}>
      <Box borderBottom={'1px solid white'}  >
      <Flex backgroundColor='202020'
        direction={['column','column','column','row','row']}
        rowGap={['10px','10px','10px']}
        minH={'60px'}

        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Box width={['100%','100%','100%']}> <Goto to='/' ><Image w={"50%"} src={Logo} alt="logo" /></Goto></Box>
       <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
        //   spacing={6}
          gap='10px'
          marginRight ='15px'
          alignItems={'center'}>
        <Input variant='filled' color={'white'} bg={"white"} width={['125px','250px','350px','450px','550px']}  placeholder='Search GadgetVault' />
        <Button type="submit" ml={-5} size={"md"}>Search <SearchIcon  width={'25px'} color={'black'}/></Button>
      </Box>
      </Flex>

      <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
        //   spacing={6}
          gap='10px'
          marginRight ='15px'
          alignItems={'center'}
          >        
        <Stack
          flex={{ base: 1, md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          width={'5%'}
          spacing={5}
          marginLeft={10}
          border={'0px solid green'}>
        {UserName ? (
          <Button color="white" bg={"none"} fontWeight="600" fontSize={20}>
            Hello, {UserName}
          </Button>
        ) : (          
        <Login />       
         )}
          <Goto to='/'><Button background={'#9a455b'} _hover={{
          bg:'#f40b49'
        }}  onClick={''} color={'white'} >Logout <FiLogOut/></Button> </Goto>
          <Goto to='/cart'><Button background={'orange.500'} _hover={{
          bg:'orange.600'
        }} color={'white'}  width={'100px'}><FiShoppingCart/>  Cart</Button></Goto>
        </Stack>

      </Box>


      </Flex>
    </Box>


    <Flex direction={['column','column', 'row']} paddingBottom={'2px'} paddingTop='2px' bg={'#202020'} color={'white'} id="buttons" justifyContent={'space-around'} border={'0px solid red'} width={'100%'}>
        <Flex align='center' width={'40%'} rowGap={'50px'} justifyContent={'space-between'} >
          <Link id="top" to="/bestdeal">
            Top Deals
          </Link>
          <Link to="/hwhome" id="top">
            Health & Wellness
          </Link>
          <p id="deal">Deal of the Day</p>
          <p className="other other1">Credit Cards</p>
        </Flex>

        <Box align='center' width={'25%'} height={'30px'} bg={'#202020'} display={["none", "none", "flex", "flex"]} gap={'4px'}>
          <Select bg={'#202020'} height={'20px'} fontSize={'10px'} className="other" name="" id="">
            <option value="">Recently Viewed</option>
          </Select>
          <Select className="other" height={'20px'} fontSize={'10px'} name="" id="">
            <option value="">Order Status</option>
          </Select>
          <Select className="other" height={'20px'} fontSize={'10px'} name="" id="">
            <option value="">Saved Items</option>
          </Select>
        </Box>
      </Flex>
    </Box>
    );
  }