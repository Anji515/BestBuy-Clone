import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  const toast = useToast;
  // console.log(location);
  toast({
    title: `Login to Continue`,
    status: "error",
    isClosable: true,
  });

  return auth ? children : <Navigate to={"/"} state={location.pathname} />;
};
