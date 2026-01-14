import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryStrip from '../components/GalleryStrip';

const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_7.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>
            <GalleryStrip />
            <Footer />
        </>
    );
};
export default Gallery;
