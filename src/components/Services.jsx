import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-4">
                    <h5 className="text-danger" style={{ fontFamily: 'cursive' }}>What We Offer</h5>
                    <h1>Our Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service.6.jpg" className="card-img-top" style={{ height: '200px' }} alt="Variety Of Cars" />
                            <div className="card-body">
                                <h5 className="card-title">Variety Of Cars</h5>
                                <p className="card-text">We offer a variety of cars, from fuel-efficient compacts to spacious SUVs and luxury sedans. Our well-maintained fleet ensures comfort, safety, and affordability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service.1.avif" className="card-img-top" style={{ height: '200px' }} alt="Best Price Guarantee" />
                            <div className="card-body">
                                <h5 className="card-title">Best Price Guarantee</h5>
                                <p className="card-text">We guarantee the best rental prices with no hidden fees. If you find a lower price, we’ll match it! Enjoy transparent pricing and a hassle-free experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service.2.jpg" className="card-img-top" style={{ height: '200px' }} alt="Phone Reservation" />
                            <div className="card-body">
                                <h5 className="card-title">Phone Reservation</h5>
                                <p className="card-text">Booking a car is easy! Call us anytime to reserve your vehicle hassle-free. Our support team is available 24/7 to assist with bookings and inquiries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service.3.webp" className="card-img-top" style={{ height: '200px' }} alt="Reservation Anytime" />
                            <div className="card-body">
                                <h5 className="card-title">Reservation Anytime</h5>
                                <p className="card-text">Need a car at any hour? We’ve got you covered! Our 24/7 reservation service ensures a hassle-free booking experience anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service.4.jpg" className="card-img-top" style={{ height: '200px' }} alt="Best Quality Cars" />
                            <div className="card-body">
                                <h5 className="card-title">Best Quality Cars</h5>
                                <p className="card-text">We provide well-maintained, top-quality cars for a safe and comfortable ride. Regular inspections ensure reliability, cleanliness, and a smooth driving experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100">
                            <img src="/images/service5.jpg" className="card-img-top" style={{ height: '200px' }} alt="Available 24 hours" />
                            <div className="card-body">
                                <h5 className="card-title">Available 24 Hours</h5>
                                <p className="card-text">We are here for you 24/7, ensuring you can book or rent a car anytime, day or night. Whether it's an early trip or late-night emergency, we’ve got you covered!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
