import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PublicationsComp from '../components/PublicationsComp'

const Publications = () => {

  return (

    <div>
      <Navbar/>
      <HeroImg2 heading = "Publications "/>
      <PublicationsComp/>
      <Footer/>
    </div>
  )
}

export default Publications