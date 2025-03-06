import React from 'react';

const OrderForm = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card p-5 mb-3" style={{marginTop:"10vh"}}>
                            <h2 className="text-center">Contact Details</h2>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                        <option>Bangalore</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </form>
                        </div>

                        <div className="row mt-4">
                            <div className="card p-5 mb-3">
                                <h2 className="text-center">Booking Details</h2>

                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="pickup Date" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="pickup Time" aria-label="Last name" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Dropoff Date" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Dropoff Time" aria-label="Last name" />
                                    </div>
                                </div>

                                <div className="form-floating mt-4">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: "100px" }}
                                    ></textarea>
                                    <label htmlFor="floatingTextarea2">Message</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">

                        <div className="card p-5 mb-3" style={{ marginTop: "10vh" }}>
                            <h2 className="text-area">Payment Methods</h2>
                            <br />
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="bankTransfer"
                                    name="paymentMethod"
                                    value="Direct Bank Transfer"

                                />
                                <label className="form-check-label" htmlFor="bankTransfer">Direct Bank Transfer</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="bankTransfer"
                                    name="paymentMethod"
                                    value="Direct Bank Transfer"

                                />
                                <label className="form-check-label" htmlFor="bankTransfer">Direct Bank Transfer</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="bankTransfer"
                                    name="paymentMethod"
                                    value="Direct Bank Transfer"

                                />
                                <label className="form-check-label" htmlFor="bankTransfer">Direct Bank Transfer</label>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="card p-4 mb-3">
                            <h3 className="text-center fw-bold">Cart Total</h3>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">Sub Total</span>
                                <span>$300</span>
                            </div>

                            <div className="d-flex justify-content-between mt-3" >
                                <span className="fw-bold">Insurance Fee</span>
                                <span>$30</span>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <span className="fw-bold">Total</span>
                                <span>$330</span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger w-100 fw-bold">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;