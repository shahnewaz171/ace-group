import React from 'react';
import { Link } from 'react-router-dom';
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
                                <p><Link to="/"><img alt="logo" data-entity-type="file" height="55" src="https://www.acegroup.com.my/sites/default/files/inline-images/logo-acegroup.png" width="225" /></Link></p>
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
                            <Link to="/services/investment-bank" data-drupal-link-system-path="node/9">Investment Bank</Link>
                            </li>
                            <li>
                            <Link to="/services/holdings" data-drupal-link-system-path="node/7">Holdings</Link>
                            </li>
                            <li>
                            <Link to="/services/money-exchange" data-drupal-link-system-path="node/221">Money Exchange</Link>
                            </li>
                            <li>
                            <Link to="/services/leasing" data-drupal-link-system-path="node/10">Leasing</Link>
                            </li>
                            <li>
                            <Link to="/services/credit" data-drupal-link-system-path="node/11">Credit</Link>
                            </li>
                            <li>
                            <Link to="/services/capital-management" data-drupal-link-system-path="node/13">Capital Management</Link>
                            </li>
                            <li>
                            <Link to="/services/private-equity" data-drupal-link-system-path="node/36">Private Equity </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav role="navigation" aria-labelledby="block-footerothersolutions-menu" id="block-footerothersolutions">
                        <h2 id="block-footerothersolutions-menu">Other Services</h2>
                        <ul className="menu nav">
                            <li>
                            <Link to="/services/corporation" data-drupal-link-system-path="node/12">Corporation</Link>
                            </li>
                            <li>
                            <Link to="/services/Linksiacyberx" data-drupal-link-system-path="node/223">AsiacyberX</Link>
                            </li>
                            <li>
                            <Link to="/services/Linkccelerator-network" data-drupal-link-system-path="node/38">Accelerator Network</Link>
                            </li>
                            <li>
                            <Link to="/services/Linkutomobile" data-drupal-link-system-path="node/39">EzDrive</Link>
                            </li>
                            <li>
                            <Link to="/services/pictures-entertainment" data-drupal-link-system-path="node/41">Pictures Entertainment</Link>
                            </li>
                            <li>
                            <Link to="https://Linkcegroup.com.my/services/Linkdvisory">Advisory</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav role="navigation" aria-labelledby="block-bootstrap-footer-menu" id="block-bootstrap-footer">
                        <h2 className="visually-hidden" id="block-bootstrap-footer-menu">Footer menu</h2>
                        <ul className="menu nav">
                            <li>
                            <Link to="/" data-drupal-link-system-path="<front>" className="is-active">Home</Link>
                            </li>
                            <li>
                            <Link to="https://www.acegroup.com.my/discover#top">Corporate Video</Link>
                            </li>
                            <li>
                            <Link to="#" data-drupal-link-system-path="node/17">Discover</Link>
                            </li>
                            <li>
                            <Link to="/insights" data-drupal-link-system-path="insights">Insights</Link>
                            </li>
                            <li>
                            <Link to="/contact" data-drupal-link-system-path="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;