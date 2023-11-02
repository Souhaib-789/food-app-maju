import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/cart";
import Navbar from "./components/Navbar/Navbar";
import Restaurant from "./screens/Restaurant/Restaurant";
import Footer from "./components/Footer/footer";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="restaurant/:name" element={<Restaurant />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      <Footer />
    </Router>
  );
}
