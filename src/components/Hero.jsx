import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <a className="navbar-brand ms-4 d-flex align-items-center">
                            <img
                                src="/images/logo.png"
                                alt="Brand Logo"
                                className="img-fluid"
                                style={{ width: "60px", height: "60px" }} // Default for larger screens
                            />
                            <span
                                className="ms-2 text-white fw-medium"
                                style={{ fontSize: "35px", fontFamily: "cursive" }}
                            >
                                <span className='text-danger'>Elite</span>Cars
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active me-4" style={{ color: 'white', fontFamily: 'cursive', fontSize: '20px' }} aria-current="page" to="/Home">Home</Link>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{ color: 'white', fontFamily: 'cursive', fontSize: '20px' }} href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li><Link className="dropdown-item" to="/About">About</Link></li>
                                        <li><Link className="dropdown-item" to="/Team">Team</Link></li>
                                        <li><Link className="dropdown-item" to="/Testimonial">Testimonials</Link></li>
                                        <li><Link className="dropdown-item" to="/Faqs">Faqs</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{ color: 'white', fontFamily: 'cursive', fontSize: '20px' }} href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li><Link className="dropdown-item" to="/Service">Services</Link></li>
                                        {/* <li><a className="dropdown-item" href="#">Service Single</a></li> */}
                                        {/* <li><hr className="dropdown-divider" /></li> */}
                                        <li><Link className="dropdown-item" to="/Gallery">Gallery</Link></li>
                                        <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/Register">Register</Link></li>
                                        {/* <li><a className="dropdown-item" href="#">ForgotPwd</a></li> */}
                                    </ul>
                                </li>


                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cars
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <li><a className="dropdown-item" href="#">Car Grid</a></li>
                                        <li><a className="dropdown-item" href="#">List</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Car Single</a></li>
                                        <li><a className="dropdown-item" href="#">Cart</a></li>
                                        <li><Link className="dropdown-item" to="/CheckOut">Checkout</Link></li>

                                    </ul>
                                </li> */}

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" style={{color:'white',fontFamily: 'cursive',fontSize:'20px'}} href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <li><a className="dropdown-item" href="#">Blog Grid</a></li>
                                        <li><a className="dropdown-item" href="#">Blog List</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Blog Single</a></li>
                                    </ul>
                                </li> */}


                                <li className="nav-item">
                                    <Link className="nav-link active me-4" style={{ color: 'white', fontFamily: 'cursive', fontSize: '20px' }} aria-current="page" to="/contect">Contact</Link>
                                </li>
                            </ul>


                            {/* <button className="btn btn-danger me-3"  type="submit">
                               Rentcar
                            </button> */}
                            <Link to="/Rentcar" className="btn btn-danger me-3">
                                Rentcar
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="carousel-inner" >
                    <div className="carousel-item active" data-bs-interval="2000" >
                        <img src="/images/HeroCar1.1.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block  leader ">
                            <h1>Make Your Trip Enjoyable </h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <Link to="/About" className="btn btn-danger px-4 fw-bold">Learn More</Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/car2.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block leader ">
                            <h1>Best Cars For The Best Journey</h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <Link to="/About" className="btn btn-danger px-4 fw-bold">Learn More</Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/car3.jpg" className="d-block w-100 custom-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block leader">
                            <h1>Better Care With Best Prices </h1>
                            <p>we provide Best Cars with The Best prices.we Are Expert in car Rental.Enjoy Your Holidays With Us We Make Your Drive Memorable.We care for Your Safety.</p>
                            <Link to="/About" className="btn btn-danger px-4 fw-bold">Learn More</Link>
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