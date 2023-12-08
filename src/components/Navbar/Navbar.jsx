import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router";
import { Button, Dropdown, Select } from "antd";
import { useSelector } from "react-redux";
import UserModal from "../Modal/UserModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [cities, setCities] = useState(["Karachi", "Lahore", "Peshawar"]);
  const [selectedCity, setselectedCity] = useState("Select Your City");
  const cartItems = useSelector((state) => state?.CartReducer?.cartItems);
  const userData = useSelector((state) => state?.UserReducer?.user);
  const location = useLocation();

  const onSelectCity = (value) => {
    setselectedCity(value);
  };

  const showUserModal = () => {
    setModal(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={`container-fluid ${styles.navbar_main_container}`}>
        <img src={Logo} className={styles.logo} onClick={() => navigate("/")} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${styles.navbar_end_view}`}
          id="navbarSupportedContent"
        >
          {/* <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.links_list}`}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Instructions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul> */}
          {/* <input
            className={`form-control me-2 ${styles.search_input}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {location.pathname == "/" && (
              <Select
                className={styles?.dropdown}
                bordered={false}
                value={selectedCity}
                onChange={onSelectCity}
                options={cities.map((city) => ({
                  label: city,
                  value: city,
                }))}
              />
            )}

            {!userData?.token && (
              <div className={styles.user_button_container}>
                <button className={styles.user_button} onClick={showUserModal}>
                  Login
                </button>
                <button className={styles.user_button} onClick={showUserModal}>
                  Sign up
                </button>
              </div>
            )}

            <button
              className={`btn btn-outline-success ${styles.cart_button}`}
              type="submit"
              onClick={() => navigate("cart")}
            >
              <RiShoppingBag3Fill color={"white"} size={25} />
              <small className={`${styles.cart_products_count}`}>
                {cartItems?.length}
              </small>
            </button>
          </div>
        </div>
      </div>
      <UserModal
        visible={modal}
        onOk={() => {
          setModal(false);
        }}
        onClose={() => setModal(false)}
      />
    </nav>
  );
};

export default Navbar;
