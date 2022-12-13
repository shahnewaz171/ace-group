import React, { useEffect, useState } from 'react';
import GetInTouchBanner from '../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../shared/HeaderContact/HeaderContact';
import Insights from '../shared/Insights/Insights';
import MainBanner from '../shared/MainBanner/MainBanner';
import ServicesBanner from '../shared/ServicesBanner/ServicesBanner';
import './Home.module.css';

const Home = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://stingray-app-3swkn.ondigitalocean.app/api-service-list/')
    .then(res => res.json())
    .then(result => {
        if(result){
            setServices(result);
        }
    })
    .catch(err => console.error(err));
  }, [])

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
        <ServicesBanner services={services} />

        {/* Insights */}
        <Insights />

        {/* Get in touch */}
        <GetInTouchBanner />
       </>
    );
};

export default Home;