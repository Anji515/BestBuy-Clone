import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/Homepage";

import HwHome from "./../Pages/Health&Wellness/H&W_Home";
import HwPrdoucts from "./../Pages/Health&Wellness/H&W_Prdoucts";
import { Login } from "../Components/Login/Login";
import { SingleProduct } from "../Pages/SingleProductPage/SingleProduct";
import { Cart } from "../Pages/Cart/Cart";
import { PrivateRoute } from "./PrivateRoute";
import Bestdeal from "../Pages/Bestdeal";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hwhome" element={<HwHome />} />
        <Route path="/HwPrdoucts" element={<HwPrdoucts />} />
        <Route
          path="/login"
          element={
            <HomePage>
              <Login />
            </HomePage>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/bestdeal" element={<Bestdeal/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
