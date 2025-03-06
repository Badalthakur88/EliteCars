import React from 'react';

export default function Faqs() {
    return (
        <div>
            <div className="container-fluid px-5 my-5">
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "100px" }}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <b>For how many days can I reserve a rental car?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div>Our car rental service offers flexible booking options. Rent a car for a day, a week, or up to 90 days with hassle-free extensions. Enjoy affordable rates,
                                        well-maintained vehicles, and 24/7 support.
                                        Need a long-term rental? Contact us for
                                        customized plans. Book now and drive with
                                        confidence! 🚗</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <b> How to book a car?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div>Booking a car is quick and easy! Choose your preferred car, select rental dates, provide your details, and confirm your booking.
                                        Pick up the car from our location or opt for home delivery. Enjoy a hassle-free rental experience with secure payments and 24/7 support. Book now! 🚗✨</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <b>Can I cancel my reservation?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div>
                                        Yes, you can cancel your car reservation.
                                        Free cancellations are available if done within **24 hours** of booking. After that,
                                        cancellation fees may apply depending on the rental period and terms. For last-minute cancellations, partial refunds may be issued.
                                        Contact our support team for assistance. 🚗❌
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <b>Can I pay by credit card?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div>
                                        Yes, we accept credit card payments for a secure and hassle-free booking experience.
                                        We support Visa, MasterCard, American Express, and other major credit cards.
                                        Your payment details are encrypted for security.
                                        Other payment methods like debit cards, UPI,
                                        and digital wallets may also be available. 🚗💳✅
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            style={{
                                backgroundImage: "url('/images/fqsCar.jpg')",
                                height: '400px', // Ensure it has height
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
