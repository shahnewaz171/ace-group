import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const CapitalManagement = () => {
    return (
        <div className='capital-management'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_14.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">Capital Management</h2>
                                            <p className="promoted-h1">
                                                Synergy.<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* investment info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">Capital Management</h2>
                                        <h1 className="d-lg-none text-center">
                                            Synergy.<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">We take small steps to make big leaps. &nbsp;</h2>
                                        <p>ACE Capital Management Sdn Bhd is a Venture Capital Management Company registered with the Securities Commission Malaysia. Established in 2004, its objective is to seek and develop a diversified portfolio of investment in late stage start-up companies with huge growth potentials and companies with proven track record that could further add value.</p>
                                        <p>We help clients make better decisions by arming them with up-to-date intelligence, gathered from our global network and personalised to each individual client in order to create the best fit for each individual portfolio. Our key strength is the extensive multi-disciplinary experience and diverse expertise of our management team, who bring cross-border capabilities, localised insight and a global perspective together to yield extraordinary results.</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* contact info */}
            <HeaderContact />

            {/* service banner */}
            <ServicesBanner />

            {/* get in touch banner */}
            <GetInTouchBanner />
        </div>
    );
};

export default CapitalManagement;