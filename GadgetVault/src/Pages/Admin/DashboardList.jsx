import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../Redux/AdminADDProduct/action";
import DashboardTable from "./DashboardTable";
import { Spinner, Button } from "@chakra-ui/react";
import styled from "styled-components";

const DashboardList = () => {
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (store) => store.addProductReducer
  );
  const [update, setupdate] = useState(false);

  const handleclick = (value) => {
    setpage((prev) => prev + value);
    dispatch(getproducts(page));
  };

  useEffect(() => {
    dispatch(getproducts);
  }, [update]);

  return (
    <div>
      {isLoading && <Spinner></Spinner>}
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
      </Table>

      {products.length > 0 &&
        products.map((el) => {
          return <DashboardTable key={el.id} {...el} setupdate={setupdate} />;
        })}

      <Button
      mt={5}
        isDisabled={page <= 1}
        color={"white"}
        background={"black"}
        _hover={{ bg: "black" }}
        onClick={() => handleclick(-1)}
      >
        Prev
      </Button>
      <Button mt={5}>{page}</Button>
      <Button
        mt={5}
        onClick={() => handleclick(1)}
        color={"white"}
        background={"black"}
        _hover={{ bg: "black" }}
      >
        Next
      </Button>
    </div>
  );
};
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #e8e8e8;
  font-family: sans-serif;

  th {
    background-color: #2d2d2d;
    color: #ffffff;
    font-size: 0.8em;
    padding: 10px 20px;
    text-align: center;
  }

  td {
    padding: 10px 20px;
    text-align: center;
  }

  tr {
    background-color: #ffffff;
  }

  tr:nth-child(2n) {
    background-color: #f7f7f7;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export default DashboardList;
