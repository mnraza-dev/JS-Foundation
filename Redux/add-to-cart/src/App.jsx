import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
