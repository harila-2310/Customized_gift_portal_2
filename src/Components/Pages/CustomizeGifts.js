import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomizeGift.css';

function CustomizeGifts() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    const id = parseInt(window.location.pathname.split('/')[2]);
    axios
      .get(`http://127.0.0.1:8080/show/${id}`)
      .then((response) => {
        const productData = response.data;
        setProduct(productData);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the selected image, e.g., store it in state
    setSelectedImage(file);
  };

  const handleOrderSummary = () => {
    const orderSummaryData = {
      productId: product.gid,
      image: selectedImage,
    };
    setOrderSummary(orderSummaryData);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Customize Gift</h1>
      {product && (
        <div className='card'>
           <h2>{product.gname}</h2>
          <p>{product.gdesc}</p>
          <p><h2>Price:</h2> Rs.{product.gprice}</p>
          <h2>Upload</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} /><br/><br/>
         <a href={`/order/${product.gid}`}> <button className="buy-now-button" onClick={handleOrderSummary}>Place Order</button></a>
        </div>
      )}
    </div>
  );
}

export default CustomizeGifts;
