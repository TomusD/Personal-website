import "./NavbarStyles.css";
import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


// This is the Navbar component
const Navbar = () => {

    // This is the Navbar component that uses clicks
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    // This is the Navbar component that changes colour
    const [color, setColor] = useState(false);

    const handleColor = () => { 
        if (window.scrollY >=80) {
            setColor(true);
        }else {  
            setColor(false);
        }
    };

    window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "header header-bg" : "header" }>

        <Link to="/Personal-website">
        <h1>Portfolio</h1>
        </Link>

        <ul className = {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/Personal-website">Home</Link>
            </li>
            <li>
                <Link to="/About">About me</Link>
            </li>
            <li>
                <Link to="/DataViz">DataViz</Link>
            </li>
            <li>
                <Link to="/PaperReviews">Paper Reviews</Link>
            </li>
            <li>
                <Link to="/Credits">Credits</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff"}}/>)
             :(<FaBars size={20} style={{ color: "#fff"}}/>)}
             
        </div>
    </div>
  );
};

export default Navbar