import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url('images/hero_new.jpg')" }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                        <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                            {t('hero_title')}
                        </h1>
                        <p className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Created by <a href="#">LeadGate</a></p>

                        <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="https://vimeo.com/45830194"
                            className="btn btn-white btn-outline-white px-4 py-3 popup-vimeo"><span className="icon-play mr-2"></span>Watch
                            Video</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
