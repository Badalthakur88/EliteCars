import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Hero.css';
import './Linkpage.css';

export default function LinkPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const pageTitles = {
        "/Home": "Home",
        "/About": "About Us",
        "/Team": "Our Team",
        "/Testimonial": "Testimonials",
        "/Faqs": "FAQs",
        "/Rentcar": "Rent Car",
        "/CheckOut": "Checkout",
        "/contect": "Contact Us",
        "/Service": "Our Services",
        "/gallery": "Gallery",
        "/Login": "Login",
        "/Register": "Register"
    };

    const title = pageTitles[path] || "Page";

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className={`navbar navbar-expand-lg ${isScrolled ? 'bg-dark' : 'bg-transparent'} fixed-top`}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-4" href="/">
                        <img src="/images/logo.png" alt="Brand Logo" width="60" height="60" />
                        <span style={{ color: 'white', fontSize: "35px", fontWeight: "500", fontFamily: "cursive" }}>
                            <span className='text-danger'>Elite</span>Cars
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-bold" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active me-4" style={{ color: 'white', fontSize: '20px' }} to="/Home">Home</Link>
                            </li>
                            {/* About Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle me-4" href="/" data-bs-toggle="dropdown">
                                    About
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/About">About</Link></li>
                                    <li><Link className="dropdown-item" to="/Team">Team</Link></li>
                                    <li><Link className="dropdown-item" to="/Testimonial">Testimonials</Link></li>
                                    <li><Link className="dropdown-item" to="/Faqs">FAQs</Link></li>
                                </ul>
                            </li>
                            {/* Pages Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle me-4" href="/" data-bs-toggle="dropdown">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Service">Services</Link></li>
                                    <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/Register">Register</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active me-4" style={{ color: 'white', fontSize: '20px' }} to="/contect">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/Rentcar" className="btn btn-danger me-3">
                            Rent Car
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Dynamic Banner Section */}
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex align-items-center"
                        style={{
                            backgroundImage: "url('images/linkimg.jpg')",
                            height: '500px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="text-white fw-bold ms-5">
                            <h1>{title}</h1>
                            <Link to="/" className="btn btn-danger fw-bold px-2">
                                <i className="bi bi-house-fill"></i>
                                <span className='ms-1'> Home <i className="bi bi-chevron-right"></i> {title}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
