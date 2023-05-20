import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Logo from '../../assets/logo.png'
import { useNavigate } from "react-router";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={`container-fluid ${styles.navbar_main_container}`}>
        <img src={Logo} className={styles.logo} />
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
        <div className={`collapse navbar-collapse ${styles.navbar_end_view}`} id="navbarSupportedContent">
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

          <div class="dropdown" style={{padding: '0px 30px'}}>
            <button class={`btn dropdown-toggle ${styles.dropdown}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Location
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Karachi</button></li>
              <li><button class="dropdown-item" type="button">Islamabad</button></li>
              <li><button class="dropdown-item" type="button">Peshawar</button></li>
            </ul>
          </div>
          <button
            className={`btn btn-outline-success ${styles.cart_button}`}
            type="submit"
            onClick={()=> navigate('cart')}
          >
            <RiShoppingBag3Fill color={'white'} size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

