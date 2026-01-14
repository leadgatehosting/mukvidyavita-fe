import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VolunteerSection from '../components/VolunteerSection';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import OurTeachers from '../components/Teachers';
import GalleryStrip from '../components/GalleryStrip';
import DonationImpact from '../components/DonationImpact';
import RecentActivities from '../components/RecentActivities';
import VolunteerForm from '../components/VolunteerForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <VolunteerSection />
            <Services />
            <Facilities />
            <OurTeachers />
            <GalleryStrip />
            <DonationImpact />
            <RecentActivities />
            <VolunteerForm />
            <Footer />
        </>
    );
};
export default Home;
