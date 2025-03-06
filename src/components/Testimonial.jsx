import React from 'react';
import "./Testimonial.css";

export default function Testimonial() {
    const containerStyle = {
        backgroundImage: "url('images/review-car.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        color: '#fff',
    };

    return (
        <div className="container-fluid" style={containerStyle}>
            <div className="text-center m-5 pt-2">
                <h4 className="text-style text-danger">What Our Clients Say</h4>
                <h2>Testimonials</h2>
            </div>
            <div className="container mb-4">
                <div id="featuredCarCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Testimonial 1 */}
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card above">
                                        <img className="user mx-auto" src="/images/testimonial1.jpg" alt="Jenny" />
                                        <div className="card-body">
                                            <p style={{ color: 'black' }}>
                                                "We rented a Jeep for a family trip, and it was amazing! The SUV was spacious, comfortable, and perfect for long drives. The rental process was smooth, and the pricing was fair. A wonderful experience."
                                            </p>
                                            <div className="text-center">
                                                <h5 className="text-primary">Jenny</h5>
                                                <p className="text-danger">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="col-md-6">
                                    <div className="card above">
                                        <img className="user mx-auto" src="/images/T-virat.jpg" alt="Virat Kohli" />
                                        <div className="card-body">
                                            <p style={{ color: 'black' }}>
                                                "Driving a Bugatti felt surreal! The car’s speed and performance were mind-blowing. The rental team ensured a seamless experience. If you love supercars, this service offers the best collection at great prices."
                                            </p>
                                            <div className="text-center">
                                                <h5 className="text-primary">Virat Kohli</h5>
                                                <p className="text-danger">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 & 4 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card above">
                                        <img className="user mx-auto" src="/images/T-dhoni.jpg" alt="Dhoni" />
                                        <div className="card-body">
                                            <p style={{ color: 'black' }}>
                                            Excellent car rental service! The process was hassle-free, the car was clean and well-maintained, and customer support was helpful. I had a smooth experience and will definitely rent again. Highly recommended.
                                            </p>
                                            <div className="text-center">
                                                <h5 className="text-primary">Dhoni</h5>
                                                <p className="text-danger">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card above">
                                        <img className="user mx-auto" src="/images/T-allu.jpg" alt="Allu Arjun" />
                                        <div className="card-body">
                                            <p style={{ color: 'black' }}>
                                                "I needed an SUV for a work trip, and this rental service was perfect. The car was well-maintained, fuel-efficient, and very comfortable. The rental rates were reasonable, and I had a hassle-free experience."
                                            </p>
                                            <div className="text-center">
                                                <h5 className="text-primary">Allu Arjun</h5>
                                                <p className="text-danger">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#featuredCarCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
