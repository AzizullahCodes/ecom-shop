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
console.log('remaing orders are...',currentOrders)
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
                     <MDBBtn onClick={()=>deleteItem(product.productId
)} >Delete Item</MDBBtn>
                   </MDBCardBody>
                 </MDBCard>
               </MDBCol>
             ))}
           </MDBRow>
         ) : (
           <h1>No product found</h1>
         )}
         {/* button for proceed */}
          <div className="d-grid gap-2 col-6 mx-auto">
         <MDBBtn >Proceed</MDBBtn>
         
       </div>
       </div>
       
     );
  
}

export default YourCart