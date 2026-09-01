import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
const YourCart = () => {
  
  const [currentOrders,setCurrentOrders] = useState([])
  const [price,setPrice] = useState(0)

  //useEffect 
  useEffect(()=>{
    let getData = localStorage.getItem('YourOrders')
    if(getData){
      let jsonData = JSON.parse(getData);
      console.log(jsonData)
      jsonData && setCurrentOrders(jsonData)
    }
    else{
      localStorage.setItem('YourOrders', JSON.stringify([]))
    }

  },[])
  
//delete item function 
const deleteItem = (deleteItemId)=>{
  let allOrders = [...currentOrders]
  console.log('allorders......',allOrders)
  let needeItem = '';
  // for(let i = 0;i < allOrders.length;i++){
  //   console.log(allOrders[i].productId == deleteItemId)
  //   needeItem = needeItem + allOrders[i].productId;
  
  // }
  let findIndexNumber = allOrders.findIndex((item)=>{
    return item.productId === deleteItemId
  })
  console.log(`index is ..... ${findIndexNumber}`)
  
  allOrders.splice(findIndexNumber,1)
  // console.log('allorder after splicing.....',allOrders)
setCurrentOrders(allOrders)
  
//set database in localstorage also 
localStorage.setItem('YourOrders',JSON.stringify(allOrders))
}

//total price calculating function 

const totalPrice = (currentOrders)=>{
  let arr = []
  for(let i = 0;i < currentOrders.length;i++){
    arr.push(Number(currentOrders[i].productPrice))
  }
  console.log(arr)
  let requiredArray = [...arr]
  console.log('required array....',requiredArray)
  let tot = requiredArray.reduce((prev,next)=>{
    return prev + next
  },0)
  console.log(tot)
  tot && setPrice(tot)
}
// increment decrement function for setting product quantity 
//incrementQuantity Function 
const increment = ()=>{
  console.log('increment')
}

//decrementQuantity Function 
const decrement = ()=>{
  console.log('decrement')
}
console.log('price in state is ......', price)
  return (
   <div>
         <h1>Orders screen</h1>
   
         {(currentOrders && currentOrders.length > 0) ? (
           <MDBRow>
             {currentOrders.map((product, index) => (
               <MDBCol sm='4' key={index} className="mb-4">
                 <MDBCard>
                   <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                     <MDBCardImage
                       src={product.productImage}
                       fluid
                       alt={product.productName}
                       style={{
                         height: 100,
                         width: 80,
                         objectFit: 'contain'
                       }}
                     />
                     <a>
                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                   </MDBRipple>
                   <MDBCardBody>
                     <MDBCardTitle>{product.productName}</MDBCardTitle>
                     <MDBCardText>{product.productDescription}</MDBCardText>
                     <MDBCardText> Price : {product.productPrice} PKR</MDBCardText>
                    <MDBBtn onClick={increment}>+</MDBBtn>
                     <MDBBtn onClick={decrement} >-</MDBBtn>
                    <MDBCardText>Quantity : 0</MDBCardText>
                     <MDBBtn onClick={()=>deleteItem(product.productId)} >Delete Item</MDBBtn>
                   </MDBCardBody>
                 </MDBCard>
               </MDBCol>
             ))}
           </MDBRow>
         ) : (
           <h1>No product found</h1>
         )}
         <hr/>
         <div>
          <h2>Total : {price} </h2>
         </div>
         {/* button for proceed */}
          <div className="d-grid gap-2 col-6 mx-auto">
         <MDBBtn onClick={()=>totalPrice(currentOrders)} >Total</MDBBtn>
         
       </div>
       </div>
       
     );
  
}

export default YourCart