import React from 'react'
import { Button} from '@chakra-ui/react'
import styled from 'styled-components';
import { DeleteProduct } from '../../Redux/AdminADDProduct/action';

const DashboardTable = ({image,  name , price , brand, category , available ,id , setupdate }) => {

  const handleDelete =() =>{
    DeleteProduct(id).then(()=>{
      setupdate((prev)=>{
        return !prev
      })
    })
  }

  return (
    <div>
<Table>
  <tbody>
      <tr>
        <td><img src={image} alt="" /></td>
        <td>{name.substr(0,7)}</td>
        <td>${price}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td>{available}</td>
        <td><Button color={'white'} background={'black'} _hover={{ bg: "black" }} margin={'auto'} onClick={handleDelete} >Delete</Button></td>
      </tr>
  </tbody>
</Table>
    </div>
  )
}
const Table = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #E8E8E8;
font-family: sans-serif;

th {
  background-color: #2D2D2D;
  color: #FFFFFF;
  font-size: 0.8em;
  padding: 10px 20px;
  text-align: center;
}

td {
  padding: 10px 20px;
  text-align: center;
}

tr {
  background-color: #FFFFFF;
  text-align: center;
}

tr:nth-child(2n) {
  background-color: #F7F7F7;
}

img {
  width: 30px;
  height: 30px;
}
`;



export default DashboardTable