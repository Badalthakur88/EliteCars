import React, { useEffect, useState } from 'react';

import './Hero.css';

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY; // Get the current scroll position
    setIsScrolled(offset > 50); // Set the state based on the scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);


    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <nav className={`navbar navbar-expand-lg ${isScrolled ? 'bg-dark' : 'bg-transparent'} fixed-top`} >
                    <div className="container-fluid">
                        <a className="navbar-brand ms-4">
                            <img src="/images/logo.png"  alt="Brand Logo" width="50" height="50" /><span style={{color:'white',fontFamily:'cursive'}}>EliteCarRental</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} aria-current="page" href="#">Home</a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li><a className="dropdown-item" href="#">About Us</a></li>
                                        <li><a className="dropdown-item" href="#">Team</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Testimonials</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li><a className="dropdown-item" href="#">Services</a></li>
                                        <li><a className="dropdown-item" href="#">Service Single</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Gallery</a></li>
                                        <li><a className="dropdown-item" href="#">Login</a></li>
                                        <li><a className="dropdown-item" href="#">Register</a></li>
                                        <li><a className="dropdown-item" href="#">ForgotPwd</a></li>

                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cars
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <li><a className="dropdown-item" href="#">Car Grid</a></li>
                                        <li><a className="dropdown-item" href="#">List</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Car Single</a></li>
                                        <li><a className="dropdown-item" href="#">Cart</a></li>
                                        <li><a className="dropdown-item" href="#">Checkout</a></li>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <li><a className="dropdown-item" href="#">Blog Grid</a></li>
                                        <li><a className="dropdown-item" href="#">Blog List</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Blog Single</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link active me-4"style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>


                            <button className="btn btn-danger me-3"  type="submit">Rentcar</button>
                        </div>
                    </div>
                </nav>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/car1.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block  leader">
                            <h1>Make Your Trip Enjoyable </h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <button className="btn btn-danger next " type="submit">Button</button>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/car2.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block leader ">
                            <h1>Best Cars For The Best Journey</h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <button className="btn btn-danger next " type="submit">Button</button>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/car3.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block leader">
                            <h1>Better Care With Best Prices </h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <button className="btn btn-danger next" type="submit">Button</button>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Hero