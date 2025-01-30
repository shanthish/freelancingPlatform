import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Footer from './footer';
import Buyer from './components/buyer/Buyer';
import Seller from './components/seller/Seller';
import GigForm from './components/seller/GigForm';
import Buy from './components/Buy';
function App() {
  return (
    <>
      {/* <h1>Scholarship Finder</h1> */}
      {/* <br /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/buyer' element={<Buyer/>}></Route>
          <Route path='/seller' element={<Seller/>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/add-gig' element={<GigForm />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
