import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedCar() {
    return (
        <div className="container-fluid py-4 px-5">
            <div className='text-center'>
                <h4 className='text-style text-danger'>Our Popular Cars</h4>
                <h2>Featured Cars</h2>
            </div>
            <div id="featuredCarCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className="row">
                            {/* Car Card 1 */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured1.avif" className="card-img-top" alt="Car 1" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">BMW</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> SUV</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured2.jpg" className="card-img-top" alt="Car 1" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">Audi</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Audi</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured3.avif" className="card-img-top" alt="Car 1" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">Porsche</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Poeshe</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add other car cards here */}
                        </div>
                    </div>
                    {/* Additional carousel items */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            {/* Car Card 2 */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured4.avif" className="card-img-top" alt="Car 2" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">Sports</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> BMW</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add other car cards here */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured5.avif" className="card-img-top" alt="Car 1" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">Bugati</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> BMW</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/featured6.avif" className="card-img-top" alt="Car 1" />
                                    <div className="card-body">
                                        <span className="text-danger">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="fw-bold text-dark">4.7(2)</span>
                                        </span>
                                        <div className="row mt-2">
                                            <h3 className="h5">SUV</h3>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> BMW</span>
                                                <br />
                                                <span><i className="bi bi-people-fill text-danger"></i> 4 Seater</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-car-front-fill text-danger"></i> Balano</span>
                                                <br />
                                                <span><i className="bi bi-fuel-pump-fill text-danger"></i> Petrol</span>
                                            </div>
                                            <div className="col-6 col-md-4 mt-2">
                                                <span><i className="bi bi-calendar-date-fill text-danger"></i> 2024</span>
                                                <br />
                                                <span><i className="bi bi-gear-wide text-danger"></i> Automatic</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-danger px-5" to="/RentCar">Rent Car</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#featuredCarCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
