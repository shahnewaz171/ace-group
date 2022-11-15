import React from 'react';
import { Link } from 'react-router-dom';
import './MainBanner.css';

const MainBanner = () => {
    return (
        <div className="billboard-center">
            <h1 className='title header'>TRUST. ABOVE EVERYTHING.</h1>
            <h2 className='title description'>We believe in building relationships first.</h2>
            <div className="cta-wrapper">
                <Link className="new-cta white shadow">
                    <span>DISCOVER ACE</span>
                </Link>
            </div>
                        
        </div>
    );
};

export default MainBanner;