import React from 'react';
import { useTranslation } from 'react-i18next';

const RecentActivities = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">{t('activities_title')}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <div className="block-20" style={{ backgroundImage: "none", height: "auto" }}>
                                <video width="100%" height="250" controls>
                                    <source src="assests/WhatsApp%20Video%202026-01-06%20at%2011.30.19%20AM.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">Jan. 15, 2025</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading mb-4"><a href="#">{t('act_1_title')}</a></h3>
                                <p>{t('act_1_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <div className="block-20" style={{ backgroundImage: "none", height: "auto" }}>
                                <video width="100%" height="250" controls>
                                    <source src="assests/WhatsApp%20Video%202026-01-06%20at%2011.30.20%20AM.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">Feb. 20, 2025</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading mb-4"><a href="#">{t('act_2_title')}</a></h3>
                                <p>{t('act_2_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <div className="block-20" style={{ backgroundImage: "none", height: "auto" }}>
                                <video width="100%" height="250" controls>
                                    <source src="assests/WhatsApp%20Video%202026-01-06%20at%2011.30.21%20AM.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">Mar. 05, 2025</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading mb-4"><a href="#">{t('act_3_title')}</a></h3>
                                <p>{t('act_3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentActivities;
