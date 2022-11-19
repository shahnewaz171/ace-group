import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const PrivateEquity = () => {
    return (
        <div className='private-equity'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_13.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">Private Equity</h2>
                                            <p className="promoted-h1">
                                                Success.<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* investment info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">Private Equity</h2>
                                        <h1 className="d-lg-none text-center">
                                            Success.<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">We elevate your business to greater heights.&nbsp;</h2>
                                        <p>ACE Private Equity was established in year 2010, we play a vital role as an investor to provide capital source to valuable individuals and institutions with goals in realising their growth potentials. We seek long term business investment on cooperative prospects with successful track records and creative innovation. ACE Private Equity not only provide funds, we strive to make the companies we invest in stronger by enabling new initiative launches, make transformative acquisition, upgrade technologies and systems which can unlock the company’s potential.</p>
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

export default PrivateEquity;