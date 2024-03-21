import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                
                    <div>
                        <p>1234 Street Name</p>
                        <p>City, ST 12345</p>
                    </div>
                    
                </div>
                
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    Number</h4>    
                </div>

                <div className="mail">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    athantri@di.uoa.gr </h4>

                </div>                
            </div>

            <div className="right">

                <h4>Follow me</h4>
                <div className="social">

                    <a href="https://www.facebook.com/thanasis.triantafullou.9" target="_blank" rel="noreferrer">
                        <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>

                    <a href = "https://www.linkedin.com/in/thanasis-triantafyllou-760127295" target="_blank" rel="noreferrer">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>

                    <a href = "https://github.com/TomusD" target="_blank" rel="noreferrer">
                        <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer