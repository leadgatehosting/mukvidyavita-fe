import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div id="ftco-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
                <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
                <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" />
            </svg>
        </div>
    );
};
export default Loader;
