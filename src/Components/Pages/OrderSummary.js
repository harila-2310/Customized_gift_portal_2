import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderSummary.css';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
  const [product, setProduct] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('gpay');
  const navigate = useNavigate();
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


  const handleOrderSummary = () => {
    const orderSummaryData = {
      productId: product.gid,
    };
    setOrderSummary(orderSummaryData);
  };


const handlePaymentMethodChange = (e) => {
  const paymentMethod = e.target.value;
  setPaymentMethod(paymentMethod);
};
const handlePlaceOrder = () => {
    const orderData = [{
      type_of_delivery: paymentMethod,
      cust_id: 1,
    }];
    
    axios
      .post('http://127.0.0.1:8080/neworder', orderData)
      .then((response) => {
        axios.get('http://127.0.0.1:8080/fillname')
        console.log('Order placed successfully');
        
      })
      .catch((error) => {
        console.log('Error placing order: ', error);
      });
      navigate('/home') 
  };
  
  
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Order Summary</h1>  
      {product && (
          <div className='order-summary'>
          <span><h2>Product Name: </h2>{product.gname}</span>
          <h2>Price: </h2><p>${product.gprice}</p>
          <h2>Payment Method : </h2>
          <div>
    <input type="radio" name="paymentMethod" value="gpay" checked={paymentMethod === 'gpay'} onChange={handlePaymentMethodChange} />
    <label for="gpay">GPay</label>
  </div>
  <div>
    <input type="radio" name="paymentMethod" value="paytm" checked={paymentMethod === 'paytm'} onChange={handlePaymentMethodChange} />
    <label for="paytm">Paytm</label>
  </div>
  <div>
    <input type="radio" name="paymentMethod" value="phonepe" checked={paymentMethod === 'phonepe'} onChange={handlePaymentMethodChange} />
    <label for="paytm">PhonePe</label>
  </div>
  <div>
    <input type="radio" name="paymentMethod" value="COD" checked={paymentMethod === 'COD'} onChange={handlePaymentMethodChange} />
    <label for="COD">Cash on Delivery</label>
  </div><br/>
          <button className="buy-now-button" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
