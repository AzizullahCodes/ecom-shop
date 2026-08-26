//AddProducts.jsx 
import React, { useState } from 'react'

const AddProducts = () => {
    const [productName,setProductName] = useState('');
    const [productImage,setProductImage] = useState('');
    const [productDescription,setProductDescription] = useState('');
    const [productPrice,setProductPrice] = useState('');

    //addProductsHandler 
    const addProductsHandler = ()=>{
        console.log(productName);
        console.log(productImage)
        console.log(productDescription);
        console.log(productPrice)
    }
  return (
   <div>
    <h1>Add Products Page</h1>
    <div> 
        <label>
            ProductName : 
            <input
            type='text'
            placeholder='Enter product name' 
            value={productName}
            autoComplete='new-productName'
            onChange={(e)=>setProductName(e.target.value)}/>
        </label><br/>

         <label>
            Product Image : 
            <input
            type='text'
            placeholder='upload Image' 
            value={productImage}
            autoComplete='new-productImage'
            onChange={(e)=>setProductImage(e.target.value)}/>
        </label><br/>

         <label>
            Product Description : 
            <input
            type='text'
            placeholder='Enter product description' 
            value={productDescription}
            autoComplete='new-productDescription'
            onChange={(e)=>setProductDescription(e.target.value)}/>
        </label><br/>

         <label>
            Product Price : 
            <input
            type='text'
            placeholder='Enter product price' 
            value={productPrice}
            autoComplete='new-productPrice'
            onChange={(e)=>setProductPrice(e.target.value)}/>
        </label><br/>

        <button onClick={addProductsHandler}>Add product</button>
    </div>
   </div>
  )
}

export default AddProducts