import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="navbar-brand">
                                <img src="/images/logo.png" alt="Brand Logo" width="50" height="50" />EliteCarRental
                            </a>
                            <div className=" para my-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam ut molestiae. Sint, asperiores pariatur!</p>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <span><i class="bi bi-facebook" style={{ color: 'white', fontSize: '20px' }}></i></span>

                                </div>
                                <div className="col-md-1">
                                    <span><i class="bi bi-twitter" style={{ color: 'white', fontSize: '20px' }}></i></span>

                                </div>
                                <div className="col-md-1">
                                    <span><i class="bi bi-instagram" style={{ color: 'white', fontSize: '20px' }}></i></span>

                                </div>
                                <div className="col-md-1">
                                    <span><i class="bi bi-linkedin" style={{ color: 'white', fontSize: '20px' }}></i></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <h1 style={{ color: 'orange' }}>Useful Link</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul class="list-unstyled custom-list">
                                        <li>About</li>
                                        <li>Team</li>
                                        <li>Testimonials</li>
                                        <li>FAQs</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul class="list-unstyled custom-list">
                                        <li>Gallery</li>
                                        <li>Cars</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h1 style={{ color: 'orange' }}>Contact Info</h1>
                            <div className="col-md-6">
                                <div className="row my-2">
                                <span><i class="bi bi-telephone"></i>+779-000-9990</span>
                                </div>
                                <div className="row my-2">
                                <span><i class="bi bi-envelope">  abc69@gmail.com</i></span>
                                </div>
                                <div className="row my-2">
                                <span><i class="bi bi-building-add"></i>  samakha,india</span>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-danger py-1'>
                <h4 className='text-center text-white'>@ created by our team Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
            </div>
        </div>
    );
}

export default Footer;