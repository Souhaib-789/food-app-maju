import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/cart";
import Navbar from "./components/Navbar/Navbar";
import Restaurant from "./screens/Restaurant/Restaurant";
import Footer from "./components/Footer/footer";
import PaymentSuccess from "./screens/PaymentResponse/PaymentSuccess";
import PaymentCancel from "./screens/PaymentResponse/PaymentCancel";
import Profile from "./screens/Profile/Profile";
import Orders from "./screens/Orders/Orders";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/restaurant/:name" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center" }}>Error 404, Page not found</h1>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
