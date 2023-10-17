import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GiftHome.css';
import { Link } from 'react-router-dom';
import Home from './Sub-Pages-Home/Home';

function GiftProductList() {
  const [giftProducts, setGiftProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/show')
      .then((response) => {
        const giftProductsData = response.data;
        setGiftProducts(giftProductsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const navbar = (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><a href="#products">Products</a></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </nav>
  );

  return (
    <div>
      {navbar}
      <Home/>
      <section id="products">
      <h1 style={{textAlign:'center',background:"pink"}}>Gift Products</h1>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="gift-card-container">
          {giftProducts.map((product) => (
            <div key={product.gid} className="gift-card">
              <h2>{product.gname}</h2>
              <p>{product.gdesc}</p>
              <p>Price: Rs.{product.gprice}</p>
              <a href={`/cust/${product.gid}`}>
                <button className="buy-now-button">Customize</button>
              </a>
            </div>
          ))}
        </div>
      )}
      </section>
      
    </div>
  );
}

export default GiftProductList;
