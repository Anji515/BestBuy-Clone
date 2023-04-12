import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Flex,
  Input,
  Image,
  CircularProgress,
  Center,
  Grid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEwProducts,
  getHwProducts,
  getLaptopProducts,
  getMobileProducts,
} from "../../Redux/HwProducts/action";
// import HwProductCard from './HwProductCard';
import { shopByImages } from "./HwImages";
import { Button, Text } from "@chakra-ui/react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import spinner from "./Spinner1.gif";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const HwProductList = () => {
  //  Store Data
  const { HwProducts, Electronics,Mobiles, EwProducts, isLoading } = useSelector(
    (state) => state.HwReducer
  );
  console.log("EwProducts:", Electronics);

  const { pathname } = useLocation();
  // console.log("location:", pathname);

  let productsData;
  if (pathname == "/HwPrdoucts") {
    productsData = HwProducts;
  } else if (pathname == "/EwPrdoucts") {
    productsData = EwProducts;
  } else if (pathname == "/electronics") {
    productsData = Electronics;
  }  else if (pathname == "/Mobiles") {
    productsData = Mobiles;
  }
  // console.log("productsData:", productsData);

  const dispatch = useDispatch();

  // Cart and Wishlist
  const [cart, setCart] = useState([]);
  // const [wishList,setWishList]=useState([])

  // Search Params
  const [searchParam] = useSearchParams();

  const paramObj = {
    params: {
      rating: searchParam.getAll("rating"),
      _sort: searchParam.get("order") && "price",
      _order: searchParam.get("order"),
      q: searchParam.get("q"),
      color: searchParam.getAll("color"),
      brand: searchParam.getAll("brand"),
    },
  };

  const handleCart = (item, event) => {
    event.stopPropagation();
    let exist = false;
    const updatedCart = cart.map((data) => {
      if (data.id === item.id) {
        exist = true;
        return { ...data };
      }
      return data;
    });
    if (!exist) {
      setCart([...updatedCart, { ...item, count: 1 }]);
      alert("Product Added to the cart")
    }else{
      alert("Product already in the cart")
    }
  };

  // const handleWishList=(item)=>{
  //     let exist = false;
  //     const updatedWish = wishList.map((wish)=>{
  //     if(wish.id === item.id){
  //         exist = true;
  //         return {...wish, count:wish.count+1}
  //     }
  //     return wish
  //      });

  //    if(!exist){
  //     setWishList([...updatedWish,{...item,count:1}]);
  //     } else {
  //     setWishList(updatedWish)
  //     }
  //   }

  useEffect(() => {
    const jsonData = localStorage.getItem("Cart");
    jsonData == null ? setCart([]) : setCart(JSON.parse(jsonData));
  }, []);

  useEffect(() => {
    dispatch(getHwProducts(paramObj));
  }, [searchParam]);

  useEffect(() => {
    dispatch(getEwProducts(paramObj));
  }, [searchParam]);

  // getLaptopProducts
  useEffect(() => {
    dispatch(getLaptopProducts(paramObj));
  }, [searchParam]);

  useEffect(() => {
    dispatch(getMobileProducts(paramObj));
  }, [searchParam]);

  useEffect(() => {
    window.localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Flex width={["100%", "85%", "85%", "72%"]} flexDirection={"column"}>
      <br />
      <Flex justifyContent={"space-between"}>
        <Heading
          fontSize={"14px"}
          marginLeft="10px"
          color={productsData.length>0 ? "black" : "red"}
        >
          {productsData && productsData.length} items
        </Heading>
      </Flex>
      {!isLoading ? (
        <SimpleGrid width={"100%"} marginTop="25px">
          {productsData &&
            productsData?.map((el) => (
                <Flex border="0px solid blue" _hover={{
                  width:'102%',
                  bg:'whitesmoke'
                }} borderRadius={'16px'} boxShadow= ' rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;' marginBottom='15px' justifyContent={'space-around'}>
                  <Box
                    width={['100%','70%','60%','30%']}
                    padding="10px"
                    align={"center"}
                  >
                    <Link to={`/products/${el.id}`}>
                      <Image
                        height={"200px"}
                        // width={'50%'}
                        width={["70%", "70%", "70%", "50%"]}
                        src={el.image[0]}
                        alt={el.brand}
                      />
                    </Link>
                  </Box>
                  <Box  width={'100%'} display={'flex'} flexDirection={['column','column','row']}>
                  <Box
                    textAlign={"left"}
                    width={["80%", "80%", "60%"]}
                    border="0px solid green"
                  >
                    <Link to={`/products/${el.id}`}>
                      <Text color={"blue"}>{el.name}</Text>
                      <Heading color={"yellow.700"} fontSize="20px">
                        {new Array(el.rating).fill(0).map((_, i) => "\u2605")} (
                        {el.rating})
                      </Heading>
                      <h1>{el.brand}</h1>
                      <p>{el.color}</p>
                      <h1>{el.reviews} : Reviews</h1>
                      <Button
                        _hover={{
                          bg: "whatsapp.400",
                          color: "white",
                        }}
                        width={["100%", "85%", "65%", "40%"]}
                        bg={"orange"}
                        gap="10px"
                      >
                        <FiHeart />
                        <Text>Add To WishList</Text>
                      </Button>
                    </Link>
                  </Box>

                  <Box border={"0px solid grey"}  width={["80%", "85%", "40%"]}>
                    <Heading textAlign={"left"} fontSize="28px">
                      ${el.price}
                    </Heading>
                    <Flex 
                      width={["100%","100%","100%"]}
                      gap="10px"
                      direction={["column",'column','column', "row"]}
                      border={"0px solid grey"}
                    >
                      {el.saving && (
                        <Button
                          color={"black"}
                          height="30px"
                          _hover={{
                            bg: "grey",
                            color: "white",
                          }}
                          bg="whatsapp.300"
                          disabled={true}
                          width={["100%", "100%","100%","100%", "45%"]}
                          fontSize="14px"
                        >
                          Savings : $ {el.saving}
                        </Button>
                      )}
                      <Heading
                        width={["100%", "85%", "65%", "45%"]}
                        borderRadius={"16px"}
                        align="center"
                        marginTop={"10px"}
                        bg="grey"
                        color={"orange.300"}
                        fontSize={"14px"}
                      >
                        Was ${el.price + el.saving}
                      </Heading>
                    </Flex>
                    <br />
                    <Button
                      _hover={{
                        bg: "whatsapp.400",
                        color: "white",
                      }}
                      width={["95%","95%","95%"]}
                      bg={"yellow"}
                      gap="10px"
                      onClick={(e) => {
                        handleCart(el, e);
                      }}
                    >
                      <FiShoppingCart />
                      <Text>Add To Cart</Text>
                    </Button>
                  </Box>
                    </Box> 
                </Flex>    ))}
        </SimpleGrid>
      ) : (
        <Center>
          {" "}
          <Image
            width={"200px"}
            height="200px"
            marginTop="20px"
            bg={"black"}
            align="center"
            src={spinner}
            alt="loading"
          />{" "}
        </Center>
      )}
    </Flex>
  );
};

export default HwProductList;
