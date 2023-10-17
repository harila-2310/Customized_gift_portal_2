import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className='cont-home'>
            <div className="home">
        <h1>CustomizeGifts</h1>
        <p>The Best Gift Shop available in the town</p>
      <a href='#products'><button>Shop Now</button></a>
      </div>
        </div>
      
    );
  }
}

export default Home;
