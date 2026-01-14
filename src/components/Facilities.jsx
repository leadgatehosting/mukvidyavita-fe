import React from 'react';
import { useTranslation } from 'react-i18next';

const Facilities = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section bg-light">
            <div className="container-fluid">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-5 heading-section ftco-animate text-center">
                        <h2 className="mb-4">{t('causes_title')}</h2>
                        <p>{t('causes_desc')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ftco-animate">
                        <div className="carousel-cause owl-carousel">
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{ backgroundImage: "url('images/indian_kids_food.png')" }}></a>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">{t('facility_1_title')}</a></h3>
                                        <p>{t('facility_1_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{ backgroundImage: "url('images/cause-2.jpg')" }}></a>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">{t('facility_2_title')}</a></h3>
                                        <p>{t('facility_2_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{ backgroundImage: "url('images/indian_teacher_1.png')" }}></a>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">{t('facility_3_title')}</a></h3>
                                        <p>{t('facility_3_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{ backgroundImage: "url('images/bg_1.jpg')" }}></a>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">{t('facility_4_title')}</a></h3>
                                        <p>{t('facility_4_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{ backgroundImage: "url('images/image_1.jpg')" }}></a>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">{t('facility_5_title')}</a></h3>
                                        <p>{t('facility_5_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
