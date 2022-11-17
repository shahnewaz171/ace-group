import React from 'react';
import HeaderContact from '../HeaderContact/HeaderContact';
import MainBanner from '../MainBanner/MainBanner';
import Navbar from '../Navbar/Navbar';
import './Home.module.css';

const Home = () => {
    return (
       <>
        <Navbar />
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
       </>
    );
};

export default Home;