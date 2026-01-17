import React from 'react';
import { useTranslation } from 'react-i18next';

const OurTeachers = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">{t('teachers_title')}</h2>
                        <p>{t('teachers_desc')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 d-flex mb-3 ftco-animate">
                        <div className="staff w-100 text-center p-3 shadow-sm border rounded bg-light h-100">
                            <div className="info">
                                <h3><a href="#">{t('teacher_1_name')}</a></h3>
                                <span className="position mb-3 d-block">{t('teacher_1_role')}</span>
                                <div className="text">
                                    <p>{t('teacher_1_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex mb-3 ftco-animate">
                        <div className="staff w-100 text-center p-3 shadow-sm border rounded bg-light h-100">
                            <div className="info">
                                <h3><a href="#">{t('teacher_2_name')}</a></h3>
                                <span className="position mb-3 d-block">{t('teacher_2_role')}</span>
                                <div className="text">
                                    <p>{t('teacher_2_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex mb-3 ftco-animate">
                        <div className="staff w-100 text-center p-3 shadow-sm border rounded bg-light h-100">
                            <div className="info">
                                <h3><a href="#">{t('teacher_3_name')}</a></h3>
                                <span className="position mb-3 d-block">{t('teacher_3_role')}</span>
                                <div className="text">
                                    <p>{t('teacher_3_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex mb-3 ftco-animate">
                        <div className="staff w-100 text-center p-3 shadow-sm border rounded bg-light h-100">
                            <div className="info">
                                <h3><a href="#">{t('teacher_4_name')}</a></h3>
                                <span className="position mb-3 d-block">{t('teacher_4_role')}</span>
                                <div className="text">
                                    <p>{t('teacher_4_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeachers;
