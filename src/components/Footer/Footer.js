import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-padding'>
            <footer className="footer container" role="contentinfo">
                <div className="region region-footer">
                    <section id="block-footerlogoblock" className="block block-block-content block-block-contentaf9d7c95-ee3d-4db2-8171-7bcbe762e5cc clearfix">
                        <div className="layout layout--onecol">
                            <div className="layout__region layout__region--content">
                            <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                                <p><a href="/"><img alt="ACE Group Logo" data-entity-type="file" data-entity-uuid="991693aa-31f2-453a-99ba-e30cc7ca66e6" height="55" src="https://www.acegroup.com.my/sites/default/files/inline-images/logo-acegroup.png" width="225" /></a></p>
                                <p>© 2021 ACE Group.<br />
                                    All rights reserved.
                                </p>
                            </div>
                            </div>
                        </div>
                    </section>
                    <nav role="navigation" aria-labelledby="block-footerbankingfinance-menu" id="block-footerbankingfinance">
                        <h2 id="block-footerbankingfinance-menu">Banking &amp; Finance</h2>
                        <ul className="menu nav">
                            <li>
                            <a href="/services/investment-bank" data-drupal-link-system-path="node/9">Investment Bank</a>
                            </li>
                            <li>
                            <a href="/services/holdings" data-drupal-link-system-path="node/7">Holdings</a>
                            </li>
                            <li>
                            <a href="/services/money-exchange" data-drupal-link-system-path="node/221">Money Exchange</a>
                            </li>
                            <li>
                            <a href="/services/leasing" data-drupal-link-system-path="node/10">Leasing</a>
                            </li>
                            <li>
                            <a href="/services/credit" data-drupal-link-system-path="node/11">Credit</a>
                            </li>
                            <li>
                            <a href="/services/capital-management" data-drupal-link-system-path="node/13">Capital Management</a>
                            </li>
                            <li>
                            <a href="/services/private-equity" data-drupal-link-system-path="node/36">Private Equity </a>
                            </li>
                        </ul>
                    </nav>
                    <nav role="navigation" aria-labelledby="block-footerothersolutions-menu" id="block-footerothersolutions">
                        <h2 id="block-footerothersolutions-menu">Other Services</h2>
                        <ul className="menu nav">
                            <li>
                            <a href="/services/corporation" data-drupal-link-system-path="node/12">Corporation</a>
                            </li>
                            <li>
                            <a href="/services/asiacyberx" data-drupal-link-system-path="node/223">AsiacyberX</a>
                            </li>
                            <li>
                            <a href="/services/accelerator-network" data-drupal-link-system-path="node/38">Accelerator Network</a>
                            </li>
                            <li>
                            <a href="/services/Automobile" data-drupal-link-system-path="node/39">EzDrive</a>
                            </li>
                            <li>
                            <a href="/services/pictures-entertainment" data-drupal-link-system-path="node/41">Pictures Entertainment</a>
                            </li>
                            <li>
                            <a href="https://acegroup.com.my/services/advisory">Advisory</a>
                            </li>
                        </ul>
                    </nav>
                    <nav role="navigation" aria-labelledby="block-bootstrap-footer-menu" id="block-bootstrap-footer">
                        <h2 className="visually-hidden" id="block-bootstrap-footer-menu">Footer menu</h2>
                        <ul className="menu nav">
                            <li>
                            <a href="/" data-drupal-link-system-path="<front>" className="is-active">Home</a>
                            </li>
                            <li>
                            <a href="https://www.acegroup.com.my/discover#top">Corporate Video</a>
                            </li>
                            <li>
                            <a href="#" data-drupal-link-system-path="node/17">Discover</a>
                            </li>
                            <li>
                            <a href="/insights" data-drupal-link-system-path="insights">Insights</a>
                            </li>
                            <li>
                            <a href="/contact" data-drupal-link-system-path="contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;