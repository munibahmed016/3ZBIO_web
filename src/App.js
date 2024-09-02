import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Index';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Brands from './Components/Brands';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs/Index';
import News from './Components/News';
import OrderStatus from './Components/Footer/OrderStatus';
import ShippingDelivery from './Components/Footer/Shipping&Delivery';
import ReturnRefund from './Components/Footer/Return&Refund';
import PaymentMethod from './Components/Footer/PaymentMethod';
import DeliveryInformation from './Components/Footer/DeliveryInformation';
import Return from './Components/Footer/Return';
import Careers from './Components/Footer/Careers';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories/*" element={<Categories />} />
      <Route path="/Brands/*" element={<Brands/>}/>
      <Route path="/AboutUs/*" element={<AboutUs/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Contact" element={<ContactUs/>}/>
      <Route path='/OrderStatus' element={<OrderStatus/>}/>
      <Route path='/Shipping&Delivery' element={<ShippingDelivery/>}/>
      <Route path='/Return&Refund' element={<ReturnRefund/>}/>
      <Route path='/PaymentMethod' element={<PaymentMethod/>}/>
      <Route path='/DeliveryInformation' element={<DeliveryInformation/>}/>
      <Route path="/Return" element={<Return/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
