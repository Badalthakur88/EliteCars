// import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
//import Form from './components/Form';
import SearchCar from './components/SearchCar';
import FrontCar from './components/FrontCar';
import Review from './components/Review';
import OurCategory from './components/OurCategory';
import FeaturedCar from './FeaturedCard';
import Testimonial from './Testimonial';


function App() {

  return (
    <>
    <Hero/>
    <SearchCar/>
    <FrontCar/>
     <Services/>
     <Review/>
     <OurCategory/>
    <Gallery/>
     <FeaturedCar/>
     <Testimonial/>
    <Team/>
    <Blog/>
    <Footer/>
    {/* <Form/>  */}
    </>
  )
}

export default App;
