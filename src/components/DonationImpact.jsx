import React from 'react';
import { useTranslation } from 'react-i18next';

const DonationImpact = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">{t('donation_title')}</h2>
                        <p>{t('donation_desc')}</p>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="#" className="block-20" style={{ backgroundImage: "url('images/indian_kids_food.png')" }}>
                            </a>
                            <div className="text p-4 d-block">
                                <h3 className="heading mt-3"><a href="#">{t('donate_1_title')}</a></h3>
                                <p>{t('donate_1_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="#" className="block-20" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
                            </a>
                            <div className="text p-4 d-block">
                                <h3 className="heading mt-3"><a href="#">{t('donate_2_title')}</a></h3>
                                <p>{t('donate_2_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="#" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                            </a>
                            <div className="text p-4 d-block">
                                <h3 className="heading mt-3"><a href="#">{t('donate_3_title')}</a></h3>
                                <p>{t('donate_3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DonationImpact;
