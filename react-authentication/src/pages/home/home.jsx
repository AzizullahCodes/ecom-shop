
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
import { use } from 'react';

const Home = () => {
  const [fetchProducts, setFetchProducts] = useState([]);
  //fetch loggedInUser from local storage 
  const [authUser,setAuthUser] = useState(null)
  //use state for orders handling 
  const [bucket,setBucket] = useState([])
  //funtion for addItemToShoppingCart
  const addItemToShoppingCart = (product)=>{
  
   if(!authUser){
    alert('You are not authenticated \n plz login first')
   }
   else{
     console.log(product)
     //validation part 
      let checking = bucket.some((item)=>{
        return item.productId == product.productId
      })
      console.log(checking)
     //validation part end
     let bucketClone = [...bucket];
     if(checking){
      alert(`This product  is already added in cart`)
      
     }
    
     else {
      //  console.log(bucketClone)
     bucketClone.push(product);
    //  console.log('updated bucket is....', bucketClone)
     setBucket(bucketClone);
     }
     
   }
  }
  console.log('final bucket is ....', bucket)

  useEffect(() => {
    let get = localStorage.getItem('productList');
    if (get) {
      let jsonData = JSON.parse(get);
      jsonData && setFetchProducts(jsonData);
      //fetching loggedInUser from local storage 
      let user = localStorage.getItem('loggedInUser');
      // console.log('user....',user)
      if(user){
        let jsonUser = JSON.parse(user);
        // console.log(jsonUser) 
        jsonUser && setAuthUser(jsonUser)
      }
    }
  }, []);
  // console.log('auth user is...', authUser)
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
                  <MDBBtn onClick={()=>addItemToShoppingCart(product)}>Add to cart</MDBBtn>
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