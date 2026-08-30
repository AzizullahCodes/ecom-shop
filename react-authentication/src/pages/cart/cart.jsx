import React, { useEffect } from 'react';
import { useState } from 'react';

const YourCart = () => {
  

  //useEffect 
  useEffect(()=>{
    let getData = localStorage.getItem('YourOrders')
    if(getData){
      let jsonData = JSON.parse(getData);
      console.log(jsonData)
    }
    else{
      localStorage.setItem('YourOrders', JSON.stringify([]))
    }

  },[])
  return (
    <div>cart</div>
  )
}

export default YourCart