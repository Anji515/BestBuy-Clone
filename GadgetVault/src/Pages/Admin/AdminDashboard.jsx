import { Heading, Button, Flex } from "@chakra-ui/react";
import React from "react";
import DashboardList from "./DashboardList";
import { useContext } from "react";
import { AdminSide } from "../../ContextAPi/AdminProvider";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { setAdmin } = useContext(AdminSide);
  const navigate = useNavigate();
  return (
    <div>
      <Flex justifyContent={"space-between"} mb={5}>
        <Heading>ADMIN DASHBOARD</Heading>

        <Button
          color={"white"}
          background={"black"}
          _hover={{ bg: "black" }}
          onClick={() => {
            setAdmin(false);
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Flex>

      <DashboardList />
    </div>
  );
};

export default AdminDashboard;
