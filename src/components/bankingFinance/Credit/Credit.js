import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const Credit = () => {
    return (
        <div className='credit'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-04/Contact2_5.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">Credit</h2>
                                            <p className="promoted-h1">
                                                Aspirations.<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* investment info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">Credit</h2>
                                        <h1 className="d-lg-none text-center">
                                            Aspirations.<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">We pave the avenue towards your financial goals. .&nbsp;</h2>
                                        <p>ACE Group’s credit arm provides a fully integrated financial services provider since its establishment in 2003, dedicated towards matching the needs of customers to a product in its comprehensive range of solutions.</p>
                                        <p>We don’t merely lend based on collateral, but on customers’ potential future earning capacity. This makes it a more realistic value proposition for both parties, and is the key to forging long-term relationships that offer sustainable benefits for all. This allows us to acquire critical insights to forecast financial performances, leading to investments into multiple publicly-listed companies in Malaysia.</p>
                                        <p>The company’s experienced marketing team is its key asset, working efficiently to ensure short processing duration, attractive financing packages and most importantly, personal service that seeks to truly understand the needs of customers.</p>
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

export default Credit;