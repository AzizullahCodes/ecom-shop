// //navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = ()=>{
//     return(
//         <>
//       <ul>
//         <li>
//             <Link to='/'> Home</Link>
//            </li>

//            <li>
//             <Link to='/about'> About</Link>
//            </li>

//            <li>
//             <Link to='/sign-up'> Sign Up</Link>
//            </li>

//            <li>
//             <Link to='/login'> Log In</Link>
//            </li>
//       </ul>
//         </>
//     )
// }
// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Auth<span>Flow</span>
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

           <li>
            <Link to="/add-products">Add Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          
           <li>
            <Link to="/contact">Contact</Link>
          </li>
         
         <li>
          <Link to='/cart'>Cart</Link>
         </li>

          <div className="nav-buttons">
            <Link to="/login" className="login-btn">
              Log In
            </Link>

            <Link to="/sign-up" className="signup-btn">
              Sign Up
            </Link>
          </div>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;