import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App'
import GiftProductList from '../Pages/GiftHome'
import ProductCustomization from '../Pages/CustomizeGifts'
import Loginform from '../Pages/Login'
import OrderSummary from '../Pages/OrderSummary'

export default function Routees() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/cust/:gid" element={<ProductCustomization/>}/>
                <Route exact path="/home" element={<GiftProductList/>}/>
                <Route exact path="/login" element={<Loginform/>}/>
                <Route exact path="/order/:gid" element={<OrderSummary/>}/>
              </Routes>
        </BrowserRouter>
    </div>
  )
}
