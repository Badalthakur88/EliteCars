import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        {/* Brand Section */}
                        <div className="col-md-4">
                            <a className="navbar-brand">
                                <img src="/images/logo.png" alt="Brand Logo" width="60" height="60" /><span style={{ color: 'white', fontSize: "35px", fontWeight: "500", fontFamily: "cursive" }}><span className='text-danger'>Elite</span>Cars</span>
                            </a>
                            <div className="para my-4">
                                <p>We provide Best cars with the best prices. We are expert in car rental. Enjoy your holidays with us. We make your drive memorable. We care for your safety.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <span><i className="bi bi-facebook" style={{ color: 'white', fontSize: '20px' }}></i></span>
                                </div>
                                <div className="col-md-1">
                                    <span><i className="bi bi-twitter" style={{ color: 'white', fontSize: '20px' }}></i></span>
                                </div>
                                <div className="col-md-1">
                                    <span><i className="bi bi-instagram" style={{ color: 'white', fontSize: '20px' }}></i></span>
                                </div>
                                <div className="col-md-1">
                                    <span><i className="bi bi-linkedin" style={{ color: 'white', fontSize: '20px' }}></i></span>
                                </div>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="col-md-4">
                            <h2>Useful Links</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled custom-list">
                                        <li>About</li>
                                        <li>Team</li>
                                        <li>Testimonials</li>
                                        <li>FAQs</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled custom-list">
                                        <li>Gallery</li>
                                        <li>Cars</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-4">
                            <h2>Contact Info</h2>
                            <div>
                                <div className="row my-2">
                                    <span><i className="bi bi-telephone text-danger "></i> +779-000-9990</span>
                                </div>
                                <div className="row my-2">
                                    <span><i className="bi bi-envelope text-danger"></i> abc69@gmail.com</span>
                                </div>
                                <div className="row my-2">
                                    <span><i className="bi bi-building text-danger"></i> Samakha, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-danger py-2">
                <h4 className="text-center text-white ">
                © EliteCars | All Rights Reserved
                </h4>
            </div>
        </div >
    );
}

export default Footer;
