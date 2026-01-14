import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_7.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-3">
                            <p><span>Address:</span> Sangli, Maharashtra, India</p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <h4 className="mb-4">Do you have any questions?</h4>
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.6857640209!2d74.51006935759247!3d16.85438883733355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1229c97b5e67f%3A0x861c28c823fa1f22!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
export default Contact;
