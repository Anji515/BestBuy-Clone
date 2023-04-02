import {
  Box,
  Heading,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Img,
  Text,
  Center,
  Button,
  useToast,
  Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Checkout from "./Checkout";

export const Cart = () => {
  const toast = useToast();
  let [cartItems, setCart] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(cartData);
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  }, [cartItems]);

  let incrementQunatity = (el) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === el.id) {
        return { ...cartItem, count: cartItem.count + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(newCartItems);
  };

  let decrementQunatity = (el) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === el.id && cartItem.count > 1) {
        return { ...cartItem, count: cartItem.count - 1 };
      } else {
        return cartItem;
      }
    });
    setCart(newCartItems);
  };

  let removeItem = (item) => {
    let newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCartItems);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const order = () => {
    toast({
      title: "Orderd Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setCart([]);
  };
  return (
    <Box width={"90%"} margin="auto">
      <Heading mt={5} textAlign={"center"}>
        Cart
      </Heading>
      <Flex
        mt="10"
        w={"100%"}
        margin="auto"
        justify={"space-between"}
        gap={10}
        direction={["column", "column", "row", "row"]}
      >
        <TableContainer
          m={"auto"}
          width={["90%", "90%", "70%"]}
          boxShadow={"xs"}
        >
          <Table variant="simple">
            <Thead>
              <Tr textAlign={"center"}>
                <Th textAlign={"center"}>Description</Th>
                <Th textAlign={"center"}>count</Th>
                <Th textAlign={"center"}>Remove</Th>
                <Th textAlign={"center"} isNumeric>
                  SubTotal
                </Th>
              </Tr>
            </Thead>
            <Tbody maxWidth={10}>
              {cartItems.map((el, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Flex>
                        <Center>
                          <Img mr={3} boxSize={"20"} src={el.image[0]} />
                          <Box>
                            <Text noOfLines={1}>
                              {el.name.substring(0, 20)}
                            </Text>
                            <Text
                              mt={2}
                              color="gray.500"
                              fontWeight="semibold"
                              letterSpacing="wide"
                              fontSize="xs"
                              textTransform="uppercase"
                              textAlign={"left"}
                            >
                              {el.brand.substring(0, 10)}
                            </Text>
                          </Box>
                        </Center>
                      </Flex>
                    </Td>

                    <Td>
                      <Center>
                        <Flex>
                          <Button
                            onClick={() => decrementQunatity(el)}
                            borderRadius={0}
                          >
                            -
                          </Button>
                          <Button
                            className="count"
                            _hover={{
                              bg: "white",
                            }}
                            borderRadius={0}
                            bg={"none"}
                          >
                            {el.count}
                          </Button>
                          <Button
                            borderRadius={0}
                            bg={"blackAlpha.800"}
                            _hover={{
                              color: "black",
                              bg: "blackAlpha.100",
                              border: "1px solid gray",
                            }}
                            onClick={() => incrementQunatity(el)}
                            color="white"
                          >
                            +
                          </Button>
                        </Flex>
                      </Center>
                    </Td>
                    <Td>
                      <Button
                        borderRadius={0}
                        bg={"blackAlpha.800"}
                        _hover={{
                          color: "black",
                          bg: "blackAlpha.100",
                          border: "1px solid gray",
                        }}
                        color="white"
                        onClick={() => removeItem(el)}
                      >
                        Remove
                      </Button>
                    </Td>
                    <Td fontWeight={500}>$ {parseInt(el.count * el.price)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          w={["100%", "50%", "25%", "25%"]}
          height={"100%"}
          p={10}
        >
          <Heading fontSize={"lg"} textAlign="center">
            Order Summary
          </Heading>
          <Divider border={"1px solid gray"} mt="2" />
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text>Original Price</Text>
              <Text>Saving</Text>
              <Text>Delivery</Text>
            </Box>
            <Box>
              <Text textAlign={"right"}>$ {cartTotal}</Text>
              <Text textAlign={"right"}>$ 20</Text>
              <Text textAlign={"right"}>$ 40</Text>
            </Box>
          </Flex>
          <Divider border={"1px solid gray"} mt="1" />
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={"bold"} fontSize="lg">
                Total
              </Text>
            </Box>
            <Box>
              <Text textAlign={"right"} fontWeight="bold" fontSize={"lg"}>
                ${cartTotal + 20 + 40}
              </Text>
            </Box>
          </Flex>
          <Button mt={5} bg={"yellow.300"} w="100%">
            <Link to="/payment">Checkout</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
