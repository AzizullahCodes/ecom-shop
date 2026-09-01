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
                     <MDBBtn >Add to cart</MDBBtn>
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