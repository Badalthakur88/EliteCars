import React from 'react'
import "./FrontCar.css"
export default function FrontCar() {
  return (
    <div>
      <div className="container-fluid px-5 py-4 text-white">

        {/* <img src={car} alt='image'style={{height:'70vh'}}></img> */}
        <div style={{
          width: '100%',
          height: '70vh',
          backgroundImage:"url('image/car1.jpg')",
          // backgroundPosition:'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className="row mx-0">
            <div className="col-md-7">

            </div>
            <div className='col-md-5 carstyle'>
              <h4 className='mt-3 text-style heading'>know About Us</h4>
              <h1 className='fw-bolder car-text'>We Make Your Drive Memorable</h1>
              <p className='mt-3 content text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illum asperiores saepe temporibus enim
                distinctio inventore eaque sit magni officia adipisci
                molestias aliquam in reprehenderit consequuntur minus hic,
                dignissimos animi incidunt. Ratione saepe possimus repellat quod! Eaque dolorum quae at
                illo cupiditate eligendi hic eum harum magni dignissimos, aspernatur nulla.
              </p>
              <div className="pb-5 discover-btn">
                <button className='btn btn-danger' type='button'>Discover More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}