import React from 'react';

import "./Testimonial.css"

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
            <div className='text-center m-5 pt-4'>
                <h4 className='text-style'>What Our Client's Say</h4>
                <h2>Testimonials</h2>
            </div>
            <div className="container">
                <div id="featuredCarCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                {/* Testimonial Card 1 */}
                                <div className="col-md-6">
                                    <div className="card above">
                                        <img className=" user mx-auto " src="/images/testimonial1.jpg" />
                                        <div className="card-body">
                                            <span>

                                            </span>
                                            <p style={{color:'black'}}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus 
                                                consequuntur itaque veniam corporis deleniti, temporibus, 
                                                labore ipsam est pariatur repellendus magni repellat distinctio quibusdam.
                                            </p>
                                            <div className='text-center'>
                                            <h4 className='.text-success-emphasis'>Jenny Olson</h4>
                                            <p className='text-danger'>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Card 2 */}
                                <div className="col-md-6">
                                <div className="card above">
                                        <img className=" user mx-auto " src="/images/testimonial1.jpg" />
                                        <div className="card-body">
                                            <span>

                                            </span>
                                            <p style={{color:'black'}}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus 
                                                consequuntur itaque veniam corporis deleniti, temporibus, 
                                                labore ipsam est pariatur repellendus magni repellat distinctio quibusdam.
                                            </p>
                                            <div className='text-center'>
                                            <h4 className='.text-success-emphasis'>Jenny Olson</h4>
                                            <p className='text-danger'>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional carousel items */}
                        <div className="carousel-item">
                            <div className="row">
                                {/* Testimonial Card 3 */}
                                <div className="col-md-6">
                                <div className="card above">
                                        <img className=" user mx-auto " src="/images/testimonial1.jpg" />
                                        <div className="card-body">
                                            <span>

                                            </span>
                                            <p style={{color:'black'}}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus 
                                                consequuntur itaque veniam corporis deleniti, temporibus, 
                                                labore ipsam est pariatur repellendus magni repellat distinctio quibusdam.
                                            </p>
                                            <div className='text-center'>
                                            <h4 className='.text-success-emphasis'>Jenny Olson</h4>
                                            <p className='text-danger'>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Card 4 */}
                                <div className="col-md-6">
                                <div className="card above">
                                        <img className=" user mx-auto " src="/images/testimonial1.jpg" />
                                        <div className="card-body">
                                            <span>

                                            </span>
                                            <p style={{color:'black'}}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus 
                                                consequuntur itaque veniam corporis deleniti, temporibus, 
                                                labore ipsam est pariatur repellendus magni repellat distinctio quibusdam.
                                            </p>
                                            <div className='text-center'>
                                            <h4 className='.text-success-emphasis'>Jenny Olson</h4>
                                            <p className='text-danger'>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#featuredCarCarousel"
                        data-bs-slide="prev"
                    >
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span> */}
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#featuredCarCarousel"
                        data-bs-slide="next"
                    >
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span> */}

                    </button>
                </div>
            </div>
       </div>
);
}
