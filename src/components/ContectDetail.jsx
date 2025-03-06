import React from 'react'

const ContectDetail = () => {
    return (
        <>
            <div className="container py-5">
            <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="card p-4 ">
                            <span className="">
                                <i className="bi bi-telephone text-white p-3 rounded-circle bg-danger fs-4"></i>
                                <span className="ms-3 fw-bold fs-4 pt-n1 ">Contact</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4">
                        <span className="">
                                <i className="bi bi-envelope text-white p-3 rounded-circle bg-danger fs-4"></i>
                                <span className="ms-3 fw-bold fs-4 pt-n1 ">Email</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4">
                        <span className="">
                                <i className="bi bi-bookmarks-fill text-white p-3 rounded-circle bg-danger fs-4"></i>
                                <span className="ms-3 fw-bold fs-4 pt-n1 ">Address</span>
                            </span>
                        </div>
                    </div>
                </div>



                <div className="row py-3">
                    <div className="col-md-6 card p-4 mb-3">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="mb-3 mt-4">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mb-3 mt-5">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger">
                            Send Message
                        </button>
                    </div>

                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50422.57260574394!2d76.97525825050681!3d29.21113110764952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390dc89b535e9757%3A0x9154ba66a1839189!2sP.I.E.T%20-Panipat%20Institute%20of%20Engineering%20%26%20Technology%2FBest%20Engineering%20%26%20Management%20College%20In%20Panipat%2FBest%20Pharmacy%20College%2C%20Grand%20Trunk%20Road%2C%20Samalkha%2C%20Haryana!3m2!1d29.211062499999997!2d77.0164581!4m5!1s0x390dc89b535e9757%3A0x9154ba66a1839189!2sP.I.E.T%20-Panipat%20Institute%20of%20Engineering%20%26%20Technology%2FBest%20Engineering%20%26%20Management%20College%20In%20Panipat%2FBest%20Pharmacy%20College%2C%2070%20Milestone%2C%20Grand%20Trunk%20Rd%2C%20Samalkha%2C%20Haryana%20132102!3m2!1d29.211062499999997!2d77.0164581!5e1!3m2!1sen!2sin!4v1739269425301!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContectDetail;
