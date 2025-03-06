import React from 'react'

const SearchCar = () => {
  return (
   
        <div>
            <div className="container-fluid bg-dark text-white ">
                <h2 className='text-center pt-3'>Search Car</h2>
                <div className="container">
                    <div className="row text-center pb-5 ">
                        <div className="col-md-3 mt-sm-4">
                            {/* <input type='text' className='form-control' placeholder='Car make' /> */}
                            <div className="dropdown">
                                <input className=" form-control dropdown-toggle" placeholder='Car make' href="#" role="input" data-bs-toggle="dropdown" aria-expanded="false"/>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">BMW</a></li>
                                    <li><a className="dropdown-item" href="#">Balano</a></li>
                                    <li><a className="dropdown-item" href="#">punch</a></li>
                                    <li><a className="dropdown-item" href="#">Naxon</a></li>
                                    <li><a className="dropdown-item" href="#">mariti</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3  mt-sm-4">
                            {/* <input type='text' className='form-control' placeholder='Car make' /> */}
                            <div className="dropdown">
                                <input className=" form-control dropdown-toggle" placeholder='Car Type' href="#" role="input" data-bs-toggle="dropdown" aria-expanded="false"/>
                            
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">BMW</a></li>
                                    <li><a className="dropdown-item" href="#">Balano</a></li>
                                    <li><a className="dropdown-item" href="#">punch</a></li>
                                    <li><a className="dropdown-item" href="#">Naxon</a></li>
                                    <li><a className="dropdown-item" href="#">mariti</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3  mt-sm-4">
                            <input type='text' className='form-control' placeholder='Max Price' />
                        </div>
                        <div className="d-grid gap-2 col-md-3  mt-sm-4">
                            <button className='btn btn-danger ' type='button'>Search</button>

                        </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default SearchCar