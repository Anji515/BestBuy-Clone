import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
  FormControl,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { SignIn, SignUp } from "../../Redux/AuthReducer/action";
import { AdminSide } from "../../ContextAPi/AdminProvider";
import { FiLogIn } from "react-icons/fi";

export const Login = () => {
  const { setAdmin } = useContext(AdminSide);
  // User Data States
  const [content, setContent] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // redux
  const dispatch = useDispatch();
  let { auth, UserName } = useSelector((store) => store.AuthReducer);
  const navigate = useNavigate();
  const location = useLocation();

  // Refs for modal opening and closing
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();

  // Submit Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content === "Sign Up") {
      let userData = {
        name,
        email,
        password,
      };
      dispatch(SignUp(userData)).then(() => {
        setContent("Sign In");
        setName("");
        setPassword("");
        setEmail("");
        toast({
          title: `Signed Up Successfully`,
          status: "success",
          isClosable: true,
        });
      });
    } else if (content === "Sign In") {
      dispatch(SignIn(email, password)).then((res) => {
        if (res) {
          setName("");
          setPassword("");
          setEmail("");
          toast({
            title: `Signed In Successfully`,
            status: "success",
            isClosable: true,
          });
        } else {
          toast({
            title: `Invail Email or Password`,
            status: "error",
            isClosable: true,
          });
        }
      });
    } else if (content === "Login As Admin") {
      if (email === "admin@gmail.com" && password === "admin") {
        setAdmin(true);
        navigate("/about")
      } else {
        toast({
          title: `Invail Email or Password`,
          status: "error",
          isClosable: true,
        });
      }
    }
  };
  return (
    <Box>
      <Button
        onClick={onOpen}
        color="white"
        bg={"whatsapp.500"}
        _hover={{
          bg:'whatsapp.300'
        }}
      >
        <Link to="/login">Login</Link> <FiLogIn/>
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} fontWeight={700}>
            {content}
          </ModalHeader>
          <Link to="/">
            <ModalCloseButton />
          </Link>
          {content === "Login As Admin" ? (
            <ModalBody pb={6}>
              <FormControl mt={4} onSubmit={handleSubmit}>
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
          ) : content === "Sign Up" ? (
            <ModalBody pb={6}>
              <FormControl onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt={4}>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
          ) : (
            <ModalBody pb={6}>
              <FormControl mt={4} onSubmit={handleSubmit}>
                <FormLabel mt={4}>Email</FormLabel>
                <Input
                  type={"email"}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt={4}>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
          )}
          <ModalFooter margin={"auto"}>
            <Button colorScheme="blue" m={"auto"} onClick={handleSubmit}>
              {content}
            </Button>
          </ModalFooter>
          <Box textAlign={"center"} mb={5}>
            <Text
              cursor={"pointer"}
              onClick={() =>
                setContent(content === "Sign In" ? "Sign Up" : "Sign In")
              }
            >
              {content === "Sign In"
                ? "Not a Member? Sign Up"
                : "Already have a Account ? Sign In"}
            </Text>
            <br />
            {content !== "Login As Admin" ? (
              <Button
                bg={"white"}
                cursor={"pointer"}
                onClick={() => setContent("Login As Admin")}
              >
                {content !== "Login As Admin" ? "Login as Admin" : null}
              </Button>
            ) : null}
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};
