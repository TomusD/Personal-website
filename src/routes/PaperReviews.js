import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PaperReviewsComp from '../components/PaperReviewsComp'

const PaperReviews = () => {

  return (

    <div>
      <Navbar/>
      <HeroImg2 heading = "Paper Reviews "/>
      <PaperReviewsComp/>
      <Footer/>
    </div>
  )
}

export default PaperReviews