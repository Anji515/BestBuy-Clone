import React from "react";
import { Route, Routes } from "react-router";
import { About } from "../Pages/Admin/About";
import Add from "../Pages/Admin/Add";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Sidebar from "../Components/AdminDashboard/Sidebar";


export const AdminRouting = () => {
  return (
    <div>
      <Sidebar>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Add />} />
      </Routes>
      </Sidebar>
    </div>
  );
};
