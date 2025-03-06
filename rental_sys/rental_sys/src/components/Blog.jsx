import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-4">
                    <h5 style={{ color: 'red', fontFamily: 'cursive' }}>Recent news & Blogs</h5>
                    <h1>My Blogs</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src="images/car1.jpg" className="card-img-top" alt="Car" />
                            <button
                                className="btn btn-danger position-absolute"
                                style={{ top: '50%', left: '20%', transform: 'translate(-60%, -60%)' }}
                            >
                                Travel
                            </button>
                            <div className="card-body">
                                <h4 className="card-title">Unique Rental Car Experience More Effcienty</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a >
                                            <span><i class="bi bi-person"></i>By Travel</span>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a >
                                       <span><i class="bi bi-calendar-date"></i>10-09-2024</span>                                    </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src="images/car2.jpg" className="card-img-top" alt="Car" />
                            <button
                                className="btn btn-danger position-absolute"
                                style={{ top: '50%', left: '20%', transform: 'translate(-60%, -60%)' }}
                            >
                                Airport
                            </button>
                            <div className="card-body">
                                <h4 className="card-title">Saving Money On Rental Car Expenses</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a >
                                        <span><i class="bi bi-person"></i>By Travel</span>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a >
                                        <span><i class="bi bi-calendar-date"></i>10-09-2024</span>                                  
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src="images/car3.jpg" className="card-img-top" alt="Car" />
                            <button
                                className="btn btn-danger position-absolute"
                                style={{ top: '50%', left: '20%', transform: 'translate(-60%, -60%)' }}
                            >
                                Lifestyle
                            </button>
                            <div className="card-body">
                                <h4 className="card-title">Essential Accessories For A Road Trip</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a >
                                        <span><i class="bi bi-person"></i>By Travel</span>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a >
                                        <span><i class="bi bi-calendar-date"></i>10-09-2024</span>                                  

                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
