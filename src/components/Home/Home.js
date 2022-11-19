import React from 'react';
import GetInTouchBanner from '../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../shared/HeaderContact/HeaderContact';
import Insights from '../shared/Insights/Insights';
import MainBanner from '../shared/MainBanner/MainBanner';
import ServicesBanner from '../shared/ServicesBanner/ServicesBanner';
import './Home.module.css';

const Home = () => {
    return (
       <>
        {/* Main head banner section */}
        <section>
            <div className='home-block view view-home-page view-id-home_page view-display-id-block_1'>
                <div className="view-content">
                    <div className='views-row'>
                        <div className='views-field views-field-field-bill'>
                            <div className='field-content'>
                                <MainBanner />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* contact us info */}
        <HeaderContact />

        {/* services banner */}
        <ServicesBanner />

        {/* Insights */}
        <Insights />

        {/* Get in touch */}
        <GetInTouchBanner />
       </>
    );
};

export default Home;