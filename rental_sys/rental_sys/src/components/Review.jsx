import React from 'react';
import "./Review.css"
function Review() {
    const containerStyle = {
        backgroundImage: "url('images/review-car.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '40px',
        color: '#fff',
    };

    return (
        <div className="container-fluid my-4" style={containerStyle}>
            <div className="row text-white py-5 px-5">
                <div className="col-md-3">
                    <div className="row mx-1 py-2 review-border">
                        <div className="col-3">
                            <i className="bi bi-credit-card-fill"
                                style={{
                                    fontSize: "55px",
                                }}></i>
                        </div>
                        <div className="col-9">
                            <h1>50+<br /><h4>Ecperience</h4></h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row mx-1 py-2 review-border">
                        <div className="col-3">
                            <i className="bi bi-car-front-fill"
                                style={{
                                    fontSize: "55px",
                                }}></i>
                        </div>
                        <div className="col-9">
                            <h1>500+<br /><h4>Car</h4></h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row mx-1 py-2 review-border">
                        <div className="col-3">
                            <i className="bi bi-people-fill"
                                style={{
                                    fontSize: "55px",
                                }}></i>
                        </div>
                        <div className="col-9">
                            <h1>1000+<br /><h4>Customer</h4></h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row mx-1 py-2 review-border">
                        <div className="col-3">
                            <i className="bi bi-credit-card-fill"
                                style={{
                                    fontSize: "55px",
                                }}></i>
                        </div>
                        <div className="col-9">
                            <h1>500+<br /><h4>Review</h4></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
