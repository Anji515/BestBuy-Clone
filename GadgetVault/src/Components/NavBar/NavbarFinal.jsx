import { Box, Flex, Text, Button, Stack, Image, Input, useColorModeValue, useBreakpointValue, FormControl, Select, Heading } from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import {Link as Goto, Link, useNavigate, useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Login } from '../Login/Login';
import Logo from "../../Images/Logo.png";
import { FiShoppingCart } from 'react-icons/fi';

const getUrl=(url,search)=>{
   
  if(search){
      return (url=`${url}?q=${search}`)
  }
  return url;
}


export default function NavbarFinal() {
    
    const {isLoadig}=useSelector((state)=>state.HwReducer)
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
      <>
      <Box backgroundColor='#202020' borderBottom={'1px solid white'} position='sticky' top='0' bottom='0' zIndex={'1'} >
      <Flex backgroundColor='202020'
        direction={['column','column','column','row','row']}
        rowGap={['10px','10px','10px']}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Box width={['100%','100%','100%']}> <Goto to='/' ><Image w={"50%"} src={Logo} alt="logo" /></Goto></Box>
       <Box marginTop={'20px'}>
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
        <Input variant='filled' color={'white'} bg={"white"} width={['125px','250px','350px','450px','550px']}  placeholder='Search GadgetVault' />
        <Button type="submit" ml={-5} size={"md"}>Search <SearchIcon  width={'25px'} color={'black'}/></Button>
        
        <Stack
          flex={{ base: 1, md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          width={'5%'}
          spacing={6}
          border={'0px solid green'}>
        {UserName ? (
          <Button color="white" bg={"none"} fontWeight="600" fontSize={20}>
            Hello, {UserName}
          </Button>
        ) : (
          <Login />
        )}
          <Goto to='/cart'><Button background={'whatsapp.300'} color={'white'} width={'100px'}><FiShoppingCart/>  Cart</Button></Goto>
        </Stack>

      </Box>


      </Flex>
    </Box>


    <Flex direction={['column','column', 'row']} paddingBottom={'10px'} paddingTop='10px' bg={'#202020'} color={'white'} id="buttons" justifyContent={'space-around'} border={'0px solid red'} width={'100%'}>
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

        <Box align='center' width={'35%'} bg={'#202020'} display={["none", "none", "flex", "flex"]}>
          <Select bg={'#202020'} className="other" name="" id="">
            <option value="">Recently Viewed</option>
          </Select>
          <Select className="other" name="" id="">
            <option value="">Order Status</option>
          </Select>
          <Select className="other" name="" id="">
            <option value="">Saved Items</option>
          </Select>
        </Box>
      </Flex>
    </>
    );
  }