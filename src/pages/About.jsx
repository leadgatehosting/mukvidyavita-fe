import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerSection from '../components/VolunteerSection';
import OurTeachers from '../components/Teachers';

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_7.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 d-flex ftco-animate">
                            <div className="img img-about align-self-stretch" style={{ backgroundImage: "url('images/indian_kids_class.png')", width: "100%" }}></div>
                        </div>
                        <div className="col-md-6 pl-md-5 ftco-animate">
                            <h2 className="mb-4">{t('about_history_title')}</h2>

                            <h5 className="text-primary">{t('about_founders_title')}</h5>
                            <p>{t('about_founders_text')}</p>

                            <h5 className="text-primary">{t('about_mission_title')}</h5>
                            <p>{t('about_mission_text')}</p>

                            <h5 className="text-primary">Facilities</h5>
                            <p>{t('about_facilities_text')}</p>

                            <h5 className="text-primary">{t('about_staff_title')}</h5>
                            <p>{t('about_staff_text')}</p>

                            <h5 className="text-primary">{t('about_initiatives_title')}</h5>
                            <p>{t('about_initiatives_text')}</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <h2 className="mb-4">{t('about_impact_title')}</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="media block-6 services d-block p-4 py-5 border" style={{ borderColor: '#e53e3e' }}>
                                <div className="media-body">
                                    <h3 className="heading">{t('about_impact_graduates_title')}</h3>
                                    <p>{t('about_impact_graduates_text')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="media block-6 services d-block p-4 py-5 border" style={{ borderColor: '#e53e3e' }}>
                                <div className="media-body">
                                    <h3 className="heading">{t('about_impact_self_reliance_title')}</h3>
                                    <p>{t('about_impact_self_reliance_text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <VolunteerSection />
            <OurTeachers />
            <Footer />
        </>
    );
};
export default About;
