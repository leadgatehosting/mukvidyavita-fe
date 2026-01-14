import React from 'react';
import { useTranslation } from 'react-i18next';

const VolunteerForm = () => {
    const { t } = useTranslation();
    return (
        <section className="ftco-section-3 img" style={{ backgroundImage: "url('images/bg_3.jpg')" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row d-md-flex">
                    <div className="col-md-6 d-flex ftco-animate">
                        <div className="img img-2 align-self-stretch" style={{ backgroundImage: "url('images/indian_kids_food.png')" }}></div>
                    </div>
                    <div className="col-md-6 volunteer pl-md-5 ftco-animate">
                        <h3 className="mb-3">{t('form_title')}</h3>
                        <form action="#" className="volunter-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={t('form_name')} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={t('form_email')} />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder={t('form_message')}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value={t('form_btn')} className="btn btn-white py-3 px-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default VolunteerForm;
