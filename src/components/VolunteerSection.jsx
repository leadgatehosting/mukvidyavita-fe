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
                                <strong className="number" data-number="150">{t('served_count')}</strong>
                                <span>{t('served_sub')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 color-3 align-items-stretch">
                            <div className="text">
                                <h3 className="mb-4">{t('volunteer_title')}</h3>
                                <p>{t('volunteer_desc')}</p>
                                <p><a href="#" className="btn btn-white px-3 py-2 mt-2">{t('volunteer_btn')}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
