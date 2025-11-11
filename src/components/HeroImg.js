import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/data-viz-img.jpg"
import { Link } from "react-router-dom";


// This is the HeroImg component for home page
const HeroImg = () => {
  return (  
        <div className="hero">

            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>

            <div className="content">

                <h1>Hello my name is Thanasis Triantafyllou.</h1>
                <p>This is my portfolio website.</p>

                <div>
                    <Link to = "/About" className="btn">About Me</Link> 
                    <Link to = "/CV" className="btn btn-light">CV</Link> 
                    <Link to = "/Publications" className="btn">Publications</Link>
                    <Link to = "/Contact" className="btn btn-light">Contact</Link> 
                </div>
                
            </div>
        </div>
    )
};

export default HeroImg