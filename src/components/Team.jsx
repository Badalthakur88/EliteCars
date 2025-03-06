// import React from 'react'

// const Team = () => {
//     return (
//         <div> 
//             <div className="container">
//                 <div className="text-center my-4" >
//                     <h5 style={{ color: 'red', fontFamily: 'cursive' }}>Meet Our Team</h5>
//                     <h1>Our Team</h1>
//                 </div>

//                 <div className="row ">
//                     <div className="col-md-4">
//                         <div className="card h-50">
//                             <img src="images/team1.jpg" style={{height:'50vh'}} alt="..." />
//                             <div className="card-body">
//                                 <h3 className="text-center">Badal</h3>
//                                 <p className="text-center"style={{ color: 'red', fontFamily: 'cursive' }}>Designer</p>
//                             </div>
                           
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="card h-50">
//                             <img src="images/team1.jpg" style={{height:'50vh'}} alt="..." />
//                             <div className="card-body">
//                                 <h3 className="text-center">Badal</h3>
//                                 <p className="text-center"style={{ color: 'red', fontFamily: 'cursive' }}>Designer</p>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="card h-50">
//                             <img src="images/team1.jpg" style={{height:'50vh'}} alt="..." />
//                             <div className="card-body">
//                                 <h3 className="text-center">Badal</h3>
//                                 <p className="text-center"style={{ color: 'red', fontFamily: 'cursive' }}>Designer</p>
//                             </div>
                            
//                         </div>
//                     </div>
                   
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Team

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
    { name: 'Badal', role: 'Designer', image: 'images/team1.jpg' },
    { name: 'Badal', role: 'Designer', image: 'images/team1.jpg' },
    { name: 'Badal', role: 'Designer', image: 'images/team1.jpg' }
];

const Team = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-4">
                    <h5 style={{ color: 'red', fontFamily: 'cursive' }}>Meet Our Team</h5>
                    <h1>Our Team</h1>
                </div>

                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="position-relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        className="card-img-top"
                                        style={{ height: '50vh', objectFit: 'cover' }}
                                        alt={`${member.name} - ${member.role}`}
                                    />
                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
                                        style={{ opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                    >
                                        <div className="text-white">
                                            <a href="#" className="mx-2 text-white">
                                                <FaFacebookF />
                                            </a>
                                            <a href="#" className="mx-2 text-white">
                                                <FaTwitter />
                                            </a>
                                            <a href="#" className="mx-2 text-white">
                                                <FaLinkedinIn />
                                            </a>
                                            <a href="#" className="mx-2 text-white">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">{member.name}</h3>
                                    <p className="text-center" style={{ color: 'red', fontFamily: 'cursive' }}>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;

