import "./HeroImg2Styles.css";
import React, { Component } from 'react'

// This is the HeroImg2 component that adds Heading and paragraphs.
class HeroImg2 extends Component {

    render() {

        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImg2