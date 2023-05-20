import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Colors } from "../../config/Colors";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={`container-fluid ${styles.navbar_main_container}`}>
        <a className="navbar-brand" href="#">
          boogie
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
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
          </ul>
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 ${styles.search_input}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-success ${styles.cart_button}`}
              type="submit"
            >
              <RiShoppingBag3Fill color={Colors.WHITE} size={25} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <nav>
       <img src={require("../../assets/fg.png")} className={styles.logo} />
       <ul className={MobileMenu ? styles.navbar : styles.mobNavbar}>
         <li>
           <a href="#">Home</a>
         </li>

         <li>
           <a href="#">About</a>
         </li>
         <li>
           <a href="#">Contact</a>
         </li>
         <li>
           <a href="#">Services</a>
         </li>
         <li>
           <a href="#">Instructions</a>
         </li>
       </ul>
       <div id={styles.mobile}>
         <a onClick={() => setMobileMenu(!MobileMenu)}>
           <GiHamburgerMenu color="#17cf97" size={30} />
         </a>
       </div>
     </nav> */
}
