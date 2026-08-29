import React, { useEffect, useState } from 'react'

const Home = () => {
  const [fetchProducts,setFetchProducts] = useState([]);

  useEffect(()=>{
    let get = localStorage.getItem('productList');
    if(get){
      let jsonData = JSON.parse(get);
      // console.log(jsonData)
      jsonData && setFetchProducts(jsonData)
    }

  },[])
  console.log(fetchProducts)
  return (
    <div>
      <h1>Products screen</h1>
    
        {
          fetchProducts?.map((product,index)=>{
            return  <li>
    {/* <img src={product.productImage} alt={product.productName} /> */}
    <img src={product.productImage} alt={product.productImage} />
    <h3>{product.productName}</h3>
    <p>{product.productDescription}</p>
    <p>{product.productPrice}</p>
  </li>
          })
        }
      
    </div>
  )
}

export default Home