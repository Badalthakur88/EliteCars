import React from 'react';

export default function FeaturedCar() {
    return (
        <div className="container-fluid py-4 px-5">
            <div className='text-center'>
                <h4 className='text-style text-danger'>Top Car Category</h4>
                <h2>Our Category</h2>
            </div>
            <div id="featuredCarCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            {/* Car Card 1 */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 1" />
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
                                            <h3 className="h5">Porsche 991Gt3</h3>
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
                                            <button className="btn btn-danger px-5" type="button">Rent Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 1" />
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
                                            <h3 className="h5">Porsche 991Gt3</h3>
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
                                            <button className="btn btn-danger px-5" type="button">Rent Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 1" />
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
                                            <h3 className="h5">Porsche 991Gt3</h3>
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
                                            <button className="btn btn-danger px-5" type="button">Rent Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add other car cards here */}
                        </div>
                    </div>
                    {/* Additional carousel items */}
                    <div className="carousel-item">
                        <div className="row">
                            {/* Car Card 2 */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 2" />
                                    <div className="card-body">
                                        {/* Same content as the first car */}
                                    </div>
                                </div>
                            </div>
                            {/* Add other car cards here */}
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 1" />
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
                                            <h3 className="h5">Porsche 991Gt3</h3>
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
                                            <button className="btn btn-danger px-5" type="button">Rent Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src="/images/car2.2.jpg" className="card-img-top" alt="Car 1" />
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
                                            <h3 className="h5">Porsche 991Gt3</h3>
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
                                            <button className="btn btn-danger px-5" type="button">Rent Car</button>
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
