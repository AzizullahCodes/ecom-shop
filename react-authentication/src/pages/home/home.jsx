// import React, { useEffect, useState } from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';

// const Home = () => {
//   const [fetchProducts,setFetchProducts] = useState([]);

//   useEffect(()=>{
//     let get = localStorage.getItem('productList');
//     if(get){
//       let jsonData = JSON.parse(get);
//       // console.log(jsonData)
//       jsonData && setFetchProducts(jsonData)
//     }

//   },[])
//   console.log(fetchProducts)
//   return (
//     <div>
//       <h1>Products screen</h1>
    
//         {
//           (fetchProducts && fetchProducts.length >0)
//           ?
//   ( fetchProducts?.map((product,index)=>{
//     return (
//       <MDBRow>
//         < MDBCol sm='6'>
//       <MDBCard key={index}>
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src={product.productImage} fluid alt={product.productName} 
//         style={{
//           height : 100,
//           width : 80,
//           objectFit : 'contain'
//         }}/>
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>
//           {product.productName}
//         </MDBCardTitle>
//         <MDBCardText>
//           {product.productDescription}
//         </MDBCardText>
//         <MDBBtn href='#'>Add to cart</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     </MDBCol>
//     </MDBRow>
//     )
//   })
    
//   )
//           :
//          (<h1>No product found</h1>)
//         }
      
//     </div>
//   )
// }

// export default Home

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

const Home = () => {
  const [fetchProducts, setFetchProducts] = useState([]);

  useEffect(() => {
    let get = localStorage.getItem('productList');
    if (get) {
      let jsonData = JSON.parse(get);
      jsonData && setFetchProducts(jsonData);
    }
  }, []);

  return (
    <div>
      <h1>Products screen</h1>

      {(fetchProducts && fetchProducts.length > 0) ? (
        <MDBRow>
          {fetchProducts.map((product, index) => (
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
                  <MDBBtn href='#'>Add to cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      ) : (
        <h1>No product found</h1>
      )}
    </div>
  );
};

export default Home;