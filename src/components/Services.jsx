import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 d-flex services p-3 py-4 d-block">
                            <div className="icon d-flex mb-3"><span className="flaticon-charity"></span></div>
                            <div className="media-body pl-4">
                                <h3 className="heading">{t('service_edu_title')}</h3>
                                <p>{t('service_edu_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 d-flex services p-3 py-4 d-block">
                            <div className="icon d-flex mb-3"><span className="flaticon-donation"></span></div>
                            <div className="media-body pl-4">
                                <h3 className="heading">{t('service_care_title')}</h3>
                                <p>{t('service_care_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 d-flex services p-3 py-4 d-block">
                            <div className="icon d-flex mb-3"><span className="flaticon-donation"></span></div>
                            <div className="media-body pl-4">
                                <h3 className="heading">{t('service_food_title')}</h3>
                                <p>{t('service_food_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
