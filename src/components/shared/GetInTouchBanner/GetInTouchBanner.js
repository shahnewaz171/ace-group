import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GetInTouchBanner = () => {
    const {pathname} = useLocation();
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});
    
    return (
        <>
            <section id="block-breakergetintouch" className="block block-block-content block-block-contentbc2b72d4-577f-4cbc-ac5f-7508b1896e76 clearfix">
                <div className="layout layout--onecol">
                    <div className="layout__region layout__region--content">
                        <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                            <div className="getintouch">
                                <img className="d-md-none img-fluid" src="https://www.acegroup.com.my/sites/default/files/2018-04/contat-landscape-mobile.jpg" alt='' />
                                <div className="cta-wrapper">
                                    {(() => {
                                        if(pathname !== 'contact'){
                                            return (
                                                <a className="new-cta white" href="/contact">
                                                    <span>GET IN TOUCH</span>
                                                </a>
                                            )

                                        }
                                        return false;
                                    })()}
                                    {pathname.includes('contact') && (<Link className="new-cta white" to="#" onClick={scrollToTop}>
                                        <span>BACK TO TOP</span>
                                    </Link>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetInTouchBanner;