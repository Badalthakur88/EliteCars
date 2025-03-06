import React from 'react'
import { Link } from 'react-router-dom'

export default function Rentcar() {
  return (
    <div>
      <div className="container-fluid px-5 py-4">
        <div className='card'>
          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  backgroundImage: "url('images/featured1.avif')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  width: '100%,'

                }}>
                <div className="d-flex flex-column justify-content-end h-100">
                  <h3 className="text-white m-3">BMW</h3>
                </div>

              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-6">
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

                  </div>
                </div>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam non optio suscipit.
                  Non rem illo, consequatur officiis tenetur consequuntur?
                </p>
                <div className="my-2">
                  <Link className="btn btn-danger px-5" to="/Checkout">Rent Car</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='card'>
          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  backgroundImage: "url('images/featured3.avif')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  width: '100%,'

                }}>
                <div className="d-flex flex-column justify-content-end h-100">
                  <h3 className="text-white m-3">Porsche</h3>
                </div>

              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-6">
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

                  </div>
                </div>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam non optio suscipit.
                  Non rem illo, consequatur officiis tenetur consequuntur?
                </p>
                <div className="my-2">
                <Link className="btn btn-danger px-5" to="/Checkout">Rent Car</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='card'>
          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  backgroundImage: "url('images/featured4.avif')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  width: '100%,'

                }}>
                <div className="d-flex flex-column justify-content-end h-100">
                  <h3 className="text-white m-3">Lamborghni</h3>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-6">
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
                      <h3 className="h5">Lamborghini</h3>
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

                  </div>
                </div>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam non optio suscipit.
                  Non rem illo, consequatur officiis tenetur consequuntur?
                </p>
                <div className="my-2">
                <Link className="btn btn-danger px-5" to="/Checkout">Rent Car</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='card'>
          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  backgroundImage: "url('images/featured5.avif')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  width: '100%,'

                }}>
                <div className="d-flex flex-column justify-content-end h-100">
                  <h3 className="text-white m-3">Bugati</h3>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-6">
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

                  </div>
                </div>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam non optio suscipit.
                  Non rem illo, consequatur officiis tenetur consequuntur?
                </p>
                <div className="my-2">
                <Link className="btn btn-danger px-5" to="/Checkout">Rent Car</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
