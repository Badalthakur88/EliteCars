import React from 'react'
import './OurCategory.css'

export default function OurCategory() {
    return (
        <div>
            <div>
                <div className="container">
                    <div className='text-center'>
                        <h4 className='text-style text-danger'>Top Car Category</h4>
                        <h2>Our Category</h2>
                    </div>

                    <div className="row ">
                        
                        <div className="col-md-8 p-1">
                            <div className='bg-hover-effect'
                                style={{
                                    backgroundImage: "url('images/car2.1.jpg')",
                                    // backgroundSize: 'cover',
                                    // backgroundPosition: 'center',
                                    // height: '250px',
                                
                                }}>
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h3 className="text-white m-3">Nissan Skyline GT-R</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className='bg-hover-effect'
                                style={{
                                    backgroundImage: "url('images/car2.2.jpg')",
                                    // height: '250px',
                                    // backgroundSize: 'cover',
                                    // backgroundPosition: 'center'
                                }}>
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h3 className="text-white m-3">Audi</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className='bg-hover-effect'
                                style={{
                                    backgroundImage: "url('images/car2.3.jpg')",
                                    // height: '250px',
                                    // backgroundSize: 'cover',
                                    // backgroundPosition: 'center'
                                }}>
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h3 className="text-white m-3">Suzuki</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className='bg-hover-effect'
                                style={{
                                    backgroundImage: "url('images/car2.4.jpg')",
                                    // height: '250px',
                                    // backgroundSize: 'cover',
                                    // backgroundPosition: 'center'
                                }}>
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h3 className="text-white m-3">SUV</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className='bg-hover-effect'
                                style={{
                                    backgroundImage: "url('images/car2.5.jpg')",
                                    // height: '250px',
                                    // backgroundSize: 'cover',
                                    // backgroundPosition: 'center'
                                }}>
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h3 className="text-white m-3">Jeep Wrangler</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
