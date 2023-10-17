  import React, { useState } from 'react';
  import {  Link, useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import "./Register.css";

  function Register (){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    
    const navigate = useNavigate();
    const handleSubmit = () => {
      const data = [{
        name,
        address,
        mobile_no,
        password,
      }];
      try {
        axios.post('http://127.0.0.1:8080/register', data);
        navigate('/login')
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };

    return (
      <div className="form-container">
        <div className='Container-1'>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <p>UserName</p>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p>Adress</p>
            <input
              type="text"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <p>Mobile No :</p>
            <input
              type="text"
              placeholder="Enter mobile number"
              onChange={(e) => setMobileNo(e.target.value)}
              value={mobile_no}
            />
            <button type="submit">Register</button>
          </form>
          <span>
            <p>Already have an Account?<i><a href="/login">Login</a></i></p>
          </span>
        </div>
      </div>
    );
  };

  export default Register ;
