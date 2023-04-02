import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
  Table,
  Tbody,
  Td,
  Tr,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
  Center,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export const SingleProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const toast = useToast;
  const { id } = useParams();
  let { auth } = useSelector((store) => store.AuthReducer);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(id);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://backend-for-gadgetvault-qf1o.onrender.com/Products?id=${id}`
      )
      .then((res) => {
        setData(res.data[0]);
        setMainImage(res.data[0].image[0]);
        setLoading(false);
      });
  }, []);

  let localstorageData = JSON.parse(localStorage.getItem("Cart"));

  const handleCart = () => {
    if (auth) {
      data.count = 1;
      localstorageData.push(data);
      localStorage.setItem("Cart", JSON.stringify(localstorageData));
      alert("success");
      // toast({
      //   title: "Added to Cart",
      //   status: "success",
      //   isClosable: true,
      // });
    } else {
      alert("login to continue");

      // toast({
      //   title: "Please Login",
      //   status: "error",
      //   isClosable: true,
      // });
    }
  };

  return loading ? (
    <Center m={"auto"}>
      <Spinner
        mt={200}
        mb={500}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Center>
  ) : (
    <DIV>
      <Flex direction={["column", "column", "row", "row"]}>
        <Flex
          direction={"column"}
          className="imgdiv"
          gap={5}
          w={["80%", "80%", "40%", "40%"]}
        >
          <Box className="main-image-div">
            <img className="main-image" src={mainImage} alt="" />
          </Box>
          <Flex justifyContent={"space-evenly"} className="images-box" gap={5}>
            {data.image &&
              data.image.map((curElm, index) => {
                return (
                  <Img
                    w={"15%"}
                    height={"20"}
                    src={data.image[index]}
                    // className="box-image--style"
                    key={index}
                    onClick={() => setMainImage(curElm)}
                  />
                );
              })}
          </Flex>
        </Flex>

        <Box mt={10} w={["100%", "100%", "40%", "40%"]} p={5}>
          <Heading fontSize={25} textAlign={"left"}>
            {data.name}
          </Heading>
          <Text color={"gray.600"} textAlign={"left"}>
            {data.brand}
          </Text>
          <br />
          <Flex alignItems={"center"} gap="10px">
            <Button
              bg={data.rating > 3 ? "green.700" : "orange.500"}
              color={"white"}
              size="sm"
              _hover={{ bg: data.rating > 3 ? "green.700" : "orange.500" }}
            >
              ★ {data.rating}
            </Button>
            <Text color={"blackAlpha.700"} fontSize="sm">
              {data.reviews > 40 ? data.reviews - 27 : data.reviews} Ratings &{" "}
              {data.reviews} Reviews
            </Text>
          </Flex>
          <br />
          <Divider border={"1px solid gray"} width="100%" />
          <Flex alignItems={"center"} gap={2} mt="4">
            <Heading size={"lg"} color={"blackAlpha.800"}>
              $ {data.price - data.saving}
            </Heading>
            <span className="was">was</span>
            <Text
              color={"blackAlpha.700"}
              textDecoration={"line-through"}
              mt={1}
              textDecorationColor="GrayText"
            >
              {data.price}
            </Text>
          </Flex>
          <Text
            color={"blackAlpha.800"}
            fontSize={"sm"}
            mt="2"
            textAlign={"left"}
          >
            You Saved : ${data.saving}
          </Text>
          <Divider border={"1px solid gray"} width="100%" mt={3} />
          <Box mt={3} textAlign={"left"}>
            <Text color={"blackAlpha.800"} fontSize="14px">
              Emi Starts at ${Math.floor(data.price / 12 - 1)}/month. No Cost
              EMI Available
            </Text>
            <Text color={"blackAlpha.800"} fontSize="14px">
              1 Year Warranty
            </Text>
            <Text color={"blackAlpha.800"} fontSize="14px">
              7 Days Easy Replacement
            </Text>
          </Box>
          <Divider border={"1px solid gray"} width="100%" mt={3} />
          <Box textAlign={"left"}>
            <Text
              mt={3}
              color={data.available > 50 ? "green.700" : "red.600"}
              fontSize="18px"
              fontWeight={700}
            >
              {data.available > 50 ? "In Stock" : "A few Left Hurry Up!"}
            </Text>
            <Flex gap={10} mt="5">
              <Button
                color={"white"}
                bg={"blue.600"}
                _hover={{ color: "white", bg: "blue.500" }}
              >
                Buy Now
              </Button>
              <Button
                color={"white"}
                bg={"green.700"}
                _hover={{
                  bg: "white",
                  color: "green.700",
                  border: "1px solid green",
                }}
                onClick={handleCart}
              >
                Add To Cart
              </Button>
            </Flex>
          </Box>
          <Divider border={"1px solid gray"} width="100%" mt={3} />
          <Box mt={5}>
            <Heading fontSize={"20px"} color="blackAlpha.800" fontWeight={500}>
              Key Specs
            </Heading>

            <Box mt={3} ml="-4">
              <TableContainer>
                <Table variant={"unstyled"} size="sm">
                  <Tbody>
                    <Tr>
                      {data.brand && <Td>Brand :</Td>}
                      {data.brand && <Td>{data.brand}</Td>}
                    </Tr>
                    <Tr>
                      {data.Model && <Td>Model :</Td>}
                      {data.Model && <Td>{data.Model} </Td>}
                    </Tr>
                    <Tr>
                      {data.color && <Td>Color :</Td>}
                      {data.color && <Td>{data.color}</Td>}
                    </Tr>
                    <Tr>
                      {data.ram2 && <Td>RAM :</Td>}
                      {data.ram2 && <Td>{data.ram2} GB</Td>}
                    </Tr>
                    <Tr>
                      {data.storage2 && <Td>Storage :</Td>}
                      {data.storage2 && <Td>{data.storage2} GB</Td>}
                    </Tr>
                    <Tr>
                      {data.processor2 && <Td>Processor :</Td>}
                      {data.processor2 && <Td>{data.processor2}</Td>}
                    </Tr>
                    <Tr>
                      {data.network && <Td>Network :</Td>}
                      {data.network && <Td>{data.network} </Td>}
                    </Tr>
                    <Tr>
                      {data.battery && <Td>Battery :</Td>}
                      {data.battery && <Td>{data.battery} </Td>}
                    </Tr>

                    <Tr>
                      {data.material && <Td>Material :</Td>}
                      {data.material && <Td>{data.material} </Td>}
                    </Tr>
                    <Tr>
                      {data.max_capacity && <Td>Max-Capacity :</Td>}
                      {data.max_capacity && <Td>{data.max_capacity} </Td>}
                    </Tr>
                    <Tr>
                      {data.voltage && <Td>Voltage :</Td>}
                      {data.voltage && <Td>{data.voltage} </Td>}
                    </Tr>
                    <Tr>
                      {data.basket_capacity && <Td>Voltage :</Td>}
                      {data.basket_capacity && <Td>{data.basket_capacity} </Td>}
                    </Tr>
                    <Tr>
                      {data.type && <Td>Product Type :</Td>}
                      {data.type && <Td>{data.type} </Td>}
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Accordion defaultIndex={[0]} allowMultiple mb={10}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="2" fontWeight={"bold"} textAlign="left">
                Specifications
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant={"unstyled"} size="sm">
                <Tbody>
                  <Tr>
                    {data.name && <Td>Product Name :</Td>}
                    {data.name && <Td>{data.name}</Td>}
                  </Tr>
                  <Tr>
                    {data.brand && <Td>Brand :</Td>}
                    {data.brand && <Td>{data.brand}</Td>}
                  </Tr>
                  <Tr>
                    {data.color && <Td>Color :</Td>}
                    {data.color && <Td>{data.color}</Td>}
                  </Tr>
                  <Tr>
                    {data.network && <Td>Network :</Td>}
                    {data.network && <Td>{data.network} </Td>}
                  </Tr>
                  <Tr>
                    {data.battery && <Td>Battery :</Td>}
                    {data.battery && <Td>{data.battery} </Td>}
                  </Tr>
                  <Tr>
                    {data.os && <Td>OS :</Td>}
                    {data.os && <Td>{data.os} GB</Td>}
                  </Tr>
                  <Tr>
                    {data.Processor && <Td>Processor :</Td>}
                    {data.Processor && <Td>{data.Processor} GB</Td>}
                  </Tr>
                  <Tr>
                    {data.graphics && <Td> Graphic :</Td>}
                    {data.graphics && <Td>{data.graphics}</Td>}
                  </Tr>
                  <Tr>
                    {data.camera && <Td> Camera :</Td>}
                    {data.camera && <Td>{data.camera}</Td>}
                  </Tr>
                  <Tr>
                    {data.memory && (
                      <Td>
                        Memory <br /> & Storage :
                      </Td>
                    )}
                    {data.memory && <Td>{data.memory} </Td>}
                  </Tr>
                  <Tr>
                    {data.display && <Td>Display :</Td>}
                    {data.display && <Td>{data.display} </Td>}
                  </Tr>
                  <Tr>
                    {data.special_features && <Td>Special Features :</Td>}
                    {data.special_features && <Td>{data.special_features} </Td>}
                  </Tr>
                  <Tr>
                    {data.Model && <Td>Model :</Td>}
                    {data.Model && <Td>{data.Model} </Td>}
                  </Tr>
                  <Tr>
                    {data.material && <Td>Material :</Td>}
                    {data.material && <Td>{data.material} </Td>}
                  </Tr>
                  <Tr>
                    {data.max_capacity && <Td>Max-Capacity :</Td>}
                    {data.max_capacity && <Td>{data.max_capacity} </Td>}
                  </Tr>
                  <Tr>
                    {data.voltage && <Td>Voltage :</Td>}
                    {data.voltage && <Td>{data.voltage} </Td>}
                  </Tr>
                  <Tr>
                    {data.basket_capacity && <Td>Basket Capacity :</Td>}
                    {data.basket_capacity && <Td>{data.basket_capacity} </Td>}
                  </Tr>
                  <Tr>
                    {data.ingridients && <Td>Ingredients :</Td>}
                    {data.ingridients && <Td>{data.ingridients} </Td>}
                  </Tr>
                  <Tr>
                    {data.serving && <Td>Serving :</Td>}
                    {data.serving && <Td>{data.serving} </Td>}
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </DIV>
  );
};

const DIV = styled.div`
  width: 80%;
  margin: auto;

  * {
    font-family: inter, sans-serif;
    font-weight: 500;
  }

  .was {
    margin-top: 5px;
    color: gray;
  }

  .imgdiv {
    /* width: 30%; */
    margin: auto;
  }
  .main-image-div {
    width: 90%;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 30px;
    /* text-align: center; */
  }

  .main-image {
    width: 80%;
    display: block;
    /* justify-content: center; */
    max-height: 500px;
  }
`;
