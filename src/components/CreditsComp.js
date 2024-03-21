import './CreditsCompStyles.css'
import React from 'react'
import reactPhoto from '../assets/logo192.png'
import jsPhoto from '../assets/JavaScript-logo.png'
import CSSPhoto from '../assets/CSS3_logo.svg.png'
import HTMLPhoto from '../assets/HTML5_logo_and_wordmark.svg.png'
import SVGPhoto from '../assets/SVG_logo.svg.png'



function CreditsComp() {

    return (

        <div className="Credits">
            <div className="leftC"></div>
    
            <div className="rightC">
                <div className="img-containerC">
                    <div className="img-stackC">

                        <a href="https://react.dev/" target="_blank" rel="noreferrer" > 
                        <img src={reactPhoto} className= "img1" alt="reactPhoto"/></a>

                        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer" >
                        <img src={jsPhoto} className= "img2C" alt="jsPhoto" /></a>

                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer" >
                        <img src={CSSPhoto} className= "img3" alt="CSSPhoto" /></a>

                        <a href="https://html.com/" target="_blank" rel="noreferrer" >
                        <img src={HTMLPhoto} className= "img4" alt="HTMLPhoto" /></a>

                        <a href="https://www.w3.org/Graphics/SVG/" target="_blank" rel="noreferrer" >
                        <img src={SVGPhoto} className= "img5" alt="SVGPhoto" /></a>
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default CreditsComp