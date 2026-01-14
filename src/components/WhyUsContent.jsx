import React, { useState } from 'react';
import { useTranslation } from '../../node_modules/react-i18next';

const WhyUsContent = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        { q: 'faq_1_q', a: 'faq_1_a' },
        { q: 'faq_2_q', a: 'faq_2_a' },
        { q: 'faq_3_q', a: 'faq_3_a' },
        { q: 'faq_4_q', a: 'faq_4_a' },
        { q: 'faq_5_q', a: 'faq_5_a' },
        { q: 'faq_6_q', a: 'faq_6_a' },
    ];

    const listItems = [
        'list_1', 'list_2', 'list_3', 'list_4', 'list_5'
    ];

    return (

        <div style={{ backgroundColor: '#fff', padding: '80px 0' }}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-12 text-center">
                        <h2 style={{ position: 'relative', display: 'inline-block', paddingBottom: '15px', fontSize: '3rem', fontWeight: '800', color: '#e53e3e' }}>
                            {t('why_us_sub')}
                            <span style={{ content: '""', position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', height: '4px', width: '80px', background: '#fbc531' }}></span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    {/* Left Column: Accordion */}
                    <div className="col-lg-6 mb-5">
                        <div className="accordion-wrapper">
                            {faqItems.map((item, index) => (
                                <div key={index} className="mb-4 border-bottom pb-3">
                                    <div
                                        onClick={() => toggleAccordion(index)}
                                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#2c3e50', fontWeight: '700', fontSize: '1.25rem' }}>
                                        <span>{t(item.q)}</span>
                                        <span style={{ color: '#e53e3e', fontSize: '1.5rem' }}>{activeIndex === index ? '−' : '+'}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="mt-2" style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            {t(item.a)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: List (No Button) */}
                    <div className="col-lg-6 pl-lg-5">
                        <div style={{ backgroundColor: '#fdf2e9', padding: '40px', borderRadius: '15px', borderLeft: '5px solid #e53e3e' }}>
                            <ul className="list-unstyled mb-0">
                                {listItems.map((item, index) => (
                                    <li key={index} className="mb-4 d-flex align-items-center">
                                        <span className="mr-3" style={{ fontSize: '1.5rem', color: '#27ae60' }}>✔</span>
                                        <span style={{ fontWeight: '600', fontSize: '1.25rem', color: '#34495e' }}>{t(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUsContent;
