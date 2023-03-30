import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const HwSideBar = () => {
      const [searchParam,setSearchParam]=useSearchParams();
      const initialRating=searchParam.getAll('rating').map(Number);
      const initialOrder=searchParam.get('order')
      const [order,setOrder]=useState(initialOrder || '')
      const [rating,setRating]=useState(initialRating || [])

      const handleRating=(e)=>{
        const newRating=[...rating] ;
        const value=+(e.target.value) ;
        if(newRating.includes(value)){
          newRating.splice(newRating.indexOf(value),1)
        }else {
          newRating.push(value)
        }
        setRating(newRating)
      }

      const handleSort=(e)=>{
        const value=e.target.value ;
        setOrder(value);
      }

      useEffect(()=>{
        const params={
          rating,
        }
        order && (params.order = order)
        setSearchParam(params)
      },[rating,order])

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input  value={1} onChange={handleRating} checked={rating.includes(1)} type="checkbox" />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input value={2} onChange={handleRating} checked={rating.includes(2)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input value={3} onChange={handleRating} checked={rating.includes(3)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input value={4} onChange={handleRating} checked={rating.includes(4)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input value={5} onChange={handleRating} checked={rating.includes(5)} type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input name="order" value={'asc'} type="radio" />
        <label>Ascending</label>
        <br />
        <input  name="order" value={'desc'} type="radio" />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

export default HwSideBar

const DIV = styled.div`
  width: 20%;
  border-right: 1px solid gray;
`
;
