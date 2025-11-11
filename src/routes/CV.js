import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import CVContent from '../components/CVContent'

const CV = () => {

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CV" />
      <CVContent />
      <Footer/>
    </div>
  )
}

export default CV