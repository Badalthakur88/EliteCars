// import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SearchCar from './components/SearchCar';
import FrontCar from './components/FrontCar';
import Review from './components/Review';
import OurCategory from './components/OurCategory';
import FeaturedCar from './components/FeaturedCard';
import Testimonial from './components/Testimonial';
import Rentcar from './components/Rentcar';
import Faqs from './components/Faqs';
import OrderForm from './components/OrderForm';
import ContectDetail from './components/ContectDetail';
import LinkPage from './components/LinkPage';
import Login from './components/Login';
import Register from './components/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <>
          <Hero />
          <SearchCar />
          <FrontCar />
          <Services />
          <Review />
          <OurCategory />
          <FeaturedCar />
          <Gallery />
          <Testimonial />
          <Team />
          {/* <Blog /> */}
          <Footer />
          
        </>
    },
    {
      path: "/Home",
      element:
        <>
          <Hero />
          <SearchCar />
          <FrontCar />
          <Services />
          <Review />
          <OurCategory />
          <FeaturedCar />
          <Gallery />
          <Testimonial />
          <Team />
          {/* <Blog /> */}
          <Footer />
        </>
    },
    //about
    {
      path: "/About",
      element: <>
        <LinkPage />
        <Review />
        <Team />
        <Testimonial />
        <Footer />
      </>
    },

    {
      path: "/Team",
      element: <>
        <LinkPage />
        <Team />
        <Footer />
      </>
    },

    {
      path: "/Testimonial",
      element: <>
        <LinkPage />
        <Testimonial />
        <Footer />
      </>
    },
    {
      path: "/Faqs",
      element: <>
        <LinkPage />
        <Faqs />
        <Footer />
      </>
    },
    {
      path: "/Rentcar",
      element: <>
        <LinkPage />
        <Rentcar />
        <Footer />
      </>
    },
    {
      path: "/Checkout",
      element: <>
        <LinkPage />
        <OrderForm />
        <Footer />
      </>
    },
    {
      path: "/contect",
      element: <>
        <LinkPage />
        <ContectDetail />
        <Footer />
      </>
    },
    {
      path: "/Service",
      element: <>
        <LinkPage />
        <Services />
        <Footer />
      </>
    },
    {
      path: "/Gallery",
      element: <>
        <LinkPage />
        < Gallery/>
        <Footer />
      </>
    },
    {
      path: "/Login",
      element: <>
        <LinkPage />
        <Login />
        <Footer />
      </>
    },
    {
      path: "/Register",
      element: <>
        <LinkPage />
        <Register />
        <Footer />
      </>
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
