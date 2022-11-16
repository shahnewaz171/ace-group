import React from 'react';
import { Link } from 'react-router-dom';
import './MainBanner.css';

const MainBanner = () => {
    return (
        <>
            {/* large view */}
            <div className="billboard d-md-block d-none">
                <div className="billboard-center">
                    <h1 className="title header">TRUST. ABOVE EVERYTHING.</h1>
                    <h2 className="title description">We believe in building relationships first.</h2>
                    <div className="cta-wrapper">
                        <Link to="/" className="new-cta white shadow"><span>DISCOVER ACE</span></Link>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="billboard-mobile d-md-none">
                <div className="billboard-center">
                    <h1 className="title header">TRUST. ABOVE EVERYTHING.</h1>
                    <p className="title description">We believe in building relationships first.</p>
                    <div className="cta-wrapper shadow">
                        <Link to="/" className="new-cta white shadow"><span>DISCOVER ACE</span></Link>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default MainBanner;