import React from 'react';
import { useTranslation } from 'react-i18next';

const VolunteerSection = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-counter ftco-intro" id="section-counter">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 color-1 align-items-stretch">
                            <div className="text">
                                <span>{t('served_label')}</span>
                                <strong className="number" data-number="300">{t('served_count')}</strong>
                                <span>{t('served_sub')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 color-3 align-items-stretch">
                            <div className="text">
                                <h3 className="mb-4">{t('donation_cta_title')}</h3>
                                <p>{t('donation_cta_sub')}</p>
                                <p><a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer" className="btn btn-white px-3 py-2 mt-2">{t('donation_cta_btn')}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
