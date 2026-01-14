import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="ftco-footer ftco-section img">
            <div className="overlay"></div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{t('footer_about_title')}</h2>
                            <p>{t('footer_about_desc')}</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{t('footer_location_title')}</h2>
                            <div className="block-21 mb-4 d-flex">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.6857640209!2d74.51006935759247!3d16.85438883733355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1229c97b5e67f%3A0x861c28c823fa1f22!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">{t('footer_links_title')}</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="py-2 d-block">{t('nav_home')}</Link></li>
                                <li><Link to="/about" className="py-2 d-block">{t('nav_about')}</Link></li>
                                <li><Link to="/programs" className="py-2 d-block">{t('nav_causes')}</Link></li>
                                <li><Link to="/events" className="py-2 d-block">{t('nav_events')}</Link></li>
                                <li><Link to="/why-us" className="py-2 d-block">{t('nav_why_us')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{t('footer_questions_title')}</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">{t('footer_address')}</span></li>
                                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            {t('footer_copyright')} &copy;
                            {new Date().getFullYear()} {t('footer_rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
