import React from 'react'

const Services = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-4" >
                    <h5 style={{ color: 'red', fontFamily: 'cursive' }}>what we offer</h5>
                    <h1>Our Services</h1>
                </div>
                <div className="row">
                    <div class="col-md-3">
                        <div class="card" >
                            <img src="/images/car1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Variety Of Cars</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" >
                            <img src="/images/price.jpg" class="card-img-top" style={{ height: '26vh' }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Best Price Guarantee</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" >
                            <img src="/images/phone.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Phone Reservation</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 ">
                        <div class="card" >
                            <img src="/images/Anytime.jpg" class="card-img-top " alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Reservation Anytime</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 my-3 ">
                        <div class="card" >
                            <img src="/images/quality.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Best  Quality Cars</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 my-3 ">
                        <div class="card" >
                            <img src="/images/ava.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Available 24 hours</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Services