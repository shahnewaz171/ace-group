import React from 'react';
import GetInTouchBanner from '../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../shared/ServicesBanner/ServicesBanner';

const MoneyExchange = () => {
    return (
        <div className='moneyExchange'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_4.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">Money Exchange</h2>
                                            <p className="promoted-h1">
                                                DIGITAL EMPOWERMENT.<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* MoneyExchange info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">Money Exchange</h2>
                                        <h1 className="d-lg-none text-center">
                                            DIGITAL EMPOWERMENT.<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">Delivering Fast, Affordable, Safe, And Efficient Money Exchange Experience.&nbsp;</h2>
                                        <p>ACE Money Exchange is one of the only six money services business of its class to be available in Malaysia, and it is licensed by the Central Bank of Malaysia (Bank Negara Malaysia). It's services include - money-changing, remittance and wholesale currency business (Class A and D).</p>
                                        <p>With the main objective to offer a fast, affordable, secure, and convenient way for both individuals and businesses to exchange and transfer over 100 different foreign currencies to more than 190 countries worldwide from wherever they are,&nbsp;ACE Money Exchange protect their customers from overpaying with their competitive exchange rates and with no&nbsp;hidden fees.</p>
                                        <p>ACE Money Exchange take security very seriously and are committed to implementing security measures used by major leading banks worldwide to help protect and safeguard every transaction, as&nbsp;well as the privacy of their&nbsp;customers.</p>
                                        <p>A happy customer is their goal. Their friendly Customer Service team is always ready to provide the best service and support, consistently improving policies and processes, as they aim to deliver excellence every time. With the best exchange rates, most secure transaction, and superb customer service, ACE Money Exchange promises to deliver a complete money exchange experience like no other.&nbsp;</p>
                                        <p>
                                            Visit <strong className='fw-bold'><a href="https://www.acemoneyexchange.com.my/">ACE&nbsp;Money Exchange</a></strong>
                                        </p>
                                        <p>&nbsp;</p>
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

export default MoneyExchange;