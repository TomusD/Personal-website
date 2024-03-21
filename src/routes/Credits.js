import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import CreditsComp from '../components/CreditsComp'

const Credits = () => {

  return (

    <div>
      <Navbar/>
      <HeroImg2 heading = "Credits " text = "to the sources that I used to build the website."/>
      <CreditsComp/>
      <Footer/>
    </div>

  )
}

export default Credits