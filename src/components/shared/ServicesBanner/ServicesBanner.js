import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './ServicesBanner.css';

const ServicesBanner = () => {
    const settings = {
        className: "",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});
    
    return (
        <>
            <section className="views-element-container block block-views block-views-blockhome-bespoke-services-block-1 clearfix" id="block-views-block-home-bespoke-services-block-1">
                <div className="form-group">
                    <div className="bespoke-slider view view-home-bespoke-services view-id-home_bespoke_services view-display-id-block_1">
                        <div className="view-header">
                            <div className="text-center padtop5rem padbot5rem">
                                <h2 className="article title">BESPOKE SERVICES</h2>
                                <p className="card1 description" style={{color: '#004a7d'}}>Find the right solutions for your needs.</p>
                            </div>
                        </div>
                                
                        <div className="view-content">
                            <Slider {...settings}>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/leasing" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2020-12/Contact-2_5.jpg" className="img img-fluid" alt='' />
                                        </div>
                                        <h4 className='service-title'>Leasing</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/private-equity" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_13.jpg" className="img img-fluid"  alt='' />  
                                        </div>
                                        <h4 className='service-title'>Private Equity</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/investment-bank" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_0.jpg" className="img img-fluid" alt='' />   
                                        </div>
                                        <h4 className='service-title'>Investment Bank</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/capital-management" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_14.jpg" className="img img-fluid" alt='' />  
                                        </div>
                                        <h4 className='service-title'>Capital Management</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/money-exchange" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_4.jpg" className="img img-fluid" alt='' />   
                                        </div>
                                        <h4 className='service-title'>Money Exchange </h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="views-field views-field-view-node">
                                    <div className="field-content slide-wrapper">
                                        <Link to="/services/credit" onClick={scrollToTop}>
                                        <div className="slide-inner">
                                            <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_5.jpg" className="img img-fluid" alt='' /> 
                                        </div>
                                        <h4 className='service-title'>Credit</h4>
                                        </Link>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesBanner;