import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const InvestmentBank = () => {
    return (
        <div className='investment'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_0.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">Investment Bank</h2>
                                            <p className="promoted-h1">
                                                Relationship.<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* investment info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">Investment Bank</h2>
                                        <h1 className="d-lg-none text-center">
                                            Relationship.<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">We do the groundwork so you can reap the benefits.&nbsp;</h2>
                                        <p>Founded in 2016,<a href="http://aceinvestmentbank.com/"> ACE Investment Bank</a> Limited is licensed by the Labuan Financial Services Authority (Labuan FSA) as an investment banking and investment management firm. ACE Investment Bank provides a whole range of solutions tailored to fulfil the needs of a wide and diversified base of clients, which include corporations, institutional clients as well as high net worth individuals.</p>
                                        <p>We advise corporations and institutions on a broad spectrum of needs, from formulation of strategic plans, mergers and acquisitions, capital raisings to restructurings. Our expertise in corporate finance and investment banking allow clients to reap financial benefits from our services, and our expansive network opens up venue of new opportunities for them.</p>
                                        <p>Visit <strong className='fw-bold'><a href="https://aceinvestmentbank.com/">ACE Investment Bank Limited.</a></strong></p>
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

export default InvestmentBank;