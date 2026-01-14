import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleLanguage = (e) => {
        e.preventDefault();
        const newLang = i18n.language === 'en' ? 'mr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${scrolled ? 'scrolled awake' : ''}`} id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="Mukvidyavita Logo" style={{ height: "50px", marginRight: "10px" }} />
                    Mukvidyavita
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${isActive('/')}`}><Link to="/" className="nav-link">{t('nav_home')}</Link></li>
                        <li className={`nav-item ${isActive('/about')}`}><Link to="/about" className="nav-link">{t('nav_about')}</Link></li>
                        <li className={`nav-item ${isActive('/programs')}`}><Link to="/programs" className="nav-link">{t('nav_causes')}</Link></li>

                        <li className={`nav-item ${isActive('/gallery')}`}><Link to="/gallery" className="nav-link">{t('nav_gallery')}</Link></li>
                        <li className={`nav-item ${isActive('/events')}`}><Link to="/events" className="nav-link">{t('nav_events')}</Link></li>
                        <li className={`nav-item ${isActive('/contact')}`}><Link to="/contact" className="nav-link">{t('nav_contact')}</Link></li>
                        <li className="nav-item cta">
                            <a href="#" className="nav-link" onClick={toggleLanguage}>
                                {i18n.language === 'en' ? 'मराठी' : 'English'}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
