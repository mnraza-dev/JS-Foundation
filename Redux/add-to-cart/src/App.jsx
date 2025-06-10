import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Cart from "./comp/Cart";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
