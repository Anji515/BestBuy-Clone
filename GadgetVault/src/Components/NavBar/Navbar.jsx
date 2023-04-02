import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import Logo from "../../Images/Logo.png";
import styled from "@emotion/styled";
import { Login } from "../Login/Login";
import { Link } from "react-router-dom";
import { Link as Goto } from "react-router-dom";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const UserName = useSelector((store) => store.AuthReducer.UserName);
  return (
    <DIV>
      <Flex id="main" justify={'space-between'} border={'0px solid red'}>
        <Box border={'1px solid green'} width={'30%'}> <Goto to='/' ><Image w={"40%"} src={Logo} alt="logo" /></Goto></Box>
        <FormControl border={'1px solid blue'} w={"30%"} marginLeft={'-20%'} display={["none", "none", "flex", "flex"]}>
          <Input type="text" bg={"white"} placeholder="Search GadgetVault" />
          <Button type="submit" ml={-2} size={"md"}>
            Search
          </Button>
        </FormControl>

        <Heading color="white" bg={"none"} fontWeight="600" fontSize={20}>
          <Link to={"/cart"}>Cart</Link>
        </Heading>

        {UserName ? (
          <Heading color="white" bg={"none"} fontWeight="600" fontSize={20}>
            Hello, {UserName}
          </Heading>
        ) : (
          <Login />
        )}
      </Flex>

      <Box id="buttons" border={'0px solid red'} width={'40%'}>
        <Flex width={'10%'}  justify={'space-evenly'} gap={'10px'}>
          <Link id="top" to="/bestdeal">
            Top Deals
          </Link>
          {/* <p id="top">Top Deals</p> */}
          <Link to="/hwhome" id="top">
            Health & Wellness
          </Link>
          <p id="deal">Deal of the Day</p>
          <p className="other other1">Credit Cards</p>
        </Flex>
        <Box display={["none", "none", "flex", "flex"]}>
          <select className="other" name="" id="">
            <option value="">Recently Viewed</option>
          </select>
          <select className="other" name="" id="">
            <option value="">Order Status</option>
          </select>
          <select className="other" name="" id="">
            <option value="">Saved Items</option>
          </select>
        </Box>
      </Box>
    </DIV>
  );
};

const DIV = styled.div`
  #main {
    height: 70px;
    background-color: #202020;
    display: flex;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    align-items: center;
    width:100%
  }

  /* Second div  */

  #buttons {
    height: 50px;
    width: 100%;
    border-top: 0.5px solid #606060;
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
  }
  #buttons > div {
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px;
  }
  #buttons > div:first-child {
    width: 52%;
    justify-content: space-around;
    margin-left: 2%;
  }
  #buttons > div:last-child {
    width: 37%;
    justify-content: space-between;
    margin-right: 3.5%;
  }
  #buttons select {
    background-color: #202020;
    color: white;
    font-size: 14px;
    border: none;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
  }
  #buttons p {
    cursor: pointer;
  }
  #buttons P:hover {
    text-decoration: underline;
  }

  .logolink{
    width=20px
  }
`;
