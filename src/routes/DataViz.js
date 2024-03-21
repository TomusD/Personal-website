import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import DataVizContent from '../components/DataVizContent'
import SVGcomp from '../components/SVGcomp'

const DataViz = () => {

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Data Visualization" />
      <DataVizContent/>
      <SVGcomp/>
      <Footer/>
    </div>
  )
}

export default DataViz