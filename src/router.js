import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import RestaurentDetails from "./screens/Restaurent/restaurentDetails";
// import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/cart";
// import Navbar from "./screens/Navbar/Navbar";
export default function AppRouter() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                {/* <Route index path="/" element={<Home />} /> */}
                <Route path="/restaurent" element={<RestaurentDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
        </Router>
    );
}