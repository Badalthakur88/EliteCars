
import React, { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const images = [
        'images/first.jpg.jpg',
        'images/second.jpg.jpg',
        'images/third.jpg.jpg',
        'images/4th.jpg.jpg',
        'images/5th.jpg.jpg',
        'images/6th.jpg.jpg',
        'images/7th.jpg.jpg',
        'images/8th.jpg.jpg',
        'images/9th.jpg.jpg',
        'images/10th.jpg.jpg',
        'images/car1.jpg',
        'images/car2.jpg'
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };

    return (
        <>
            <div className="container">
                <div className="text-center my-4" >
                    <h5 style={{ color: 'red', fontFamily: 'cursive' }}>Most Famous Cars</h5>
                    <h1>Our Gallery</h1>
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <div className="card h-100">
                                <img
                                    src={image}
                                    className="card-img-top img-fluid"
                                    alt={`Image ${index + 1}`}
                                    style={{
                                        objectFit: 'cover',
                                        height: '200px',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                    onClick={() => handleImageClick(image)}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                                        e.currentTarget.style.opacity = '0.9';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.opacity = '1';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal HTML */}
                {showModal && (
                    <div className="modal fade show" style={{ display: 'block' }} onClick={handleCloseModal}>
                        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={selectedImage} alt="Selected" className="img-fluid" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Backdrop */}
                {showModal && <div className="modal-backdrop fade show" />}
            </div>
        </>
    );
};

export default Gallery;
