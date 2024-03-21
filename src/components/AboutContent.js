import "./AboutContent&DataVizStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import PersonalPhoto from "../assets/PersonalPhoto.jpg"

function AboutContent() {
  return (
    <div className="about">

        <div className="left">

            <p>My name is Thanasis Triantafyllou and I am a musician, composer, 
                music engineer and trying to become a Software Developer. 
                I finished my functional harmony diploma lessons at Erevna 
                Conservatory of Greece along with piano lessons, 
                also i have a Bachelor’s degree in music technology in Ionian university 
                and at the moment i am doing my MSc in Information and 
                Communication Technologies at 
                National and Kapodistrian University of Athens.</p>
                
                <Link to="/contact"> 
                    <button className="btn"> 
                        Contact                
                    </button>
                </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={PersonalPhoto} className= "img" alt={PersonalPhoto} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent