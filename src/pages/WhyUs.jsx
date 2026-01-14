import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhyUsContent from '../components/WhyUsContent';

const WhyUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <WhyUsContent />
            <Footer />
        </>
    );
};

export default WhyUs;
