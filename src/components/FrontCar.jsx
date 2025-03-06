import React from 'react'
import { Link } from 'react-router-dom'

export default function FrontCar() {
  return (
    <div>
      <div className="container-fluid px-5 py-4">
        <div className="row">
          <div className="col-md-6">
            <div
              style={{
                backgroundImage: "url('images/car2.5.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
              }}>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4 className='text-danger pt-4 '>know About Us</h4>
              <h2 className='py-2'>We Make Your Drive Memorable</h2>
              <p className='d-flex justify-content-cemter fs-5'>Experience the joy of hassle-free car rentals with comfort, affordability, 
                and reliability. Whether you're planning a road trip, a business journey, or a weekend 
                getaway, we ensure a smooth ride with well-maintained vehicles and top-notch service. 
                Drive with confidence and create unforgettable memories on the road! 🚗
              </p>
              <div className="py-4">
                <Link className='btn btn-danger' to="/Rentcar">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
