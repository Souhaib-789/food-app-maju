import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/cart";
import Navbar from "./screens/Navbar/Navbar";
import Restaurant from './screens/Restaurant/Restaurant'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="restaurent" element={<Restaurant />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
        </Router>
    );
}