import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../customMethod/scrollToTop';

const Insights = () => {

    return (
        <>
            <section className="views-element-container block block-views block-views-blockrelated-insights-block-1 clearfix" id="block-views-block-related-insights-block-1">
                <div className="form-group">
                    <div className="container padtop5rem padbot5rem related-insights view view-related-insights view-id-related_insights view-display-id-block_1 js-view-dom-id-113d6de8723a28f77356a73aa3e03dcd83c9f798ca2e2c0b507aa6d2af4b6f75">
                        <div className="view-header">
                            <h2 className="article title">Insights</h2>
                            <div className="cta-wrapper">
                                <Link to="/insights" className="new-cta emphasize" onClick={scrollToTop}><span>VIEW ALL</span></Link>
                            </div>
                        </div>
                        <div className="view-content">
                            <div className="insights-list">
                                <ul>
                                    <li>
                                        <div className="views-field views-field-field-insight-category">
                                            <div className="field-content"><Link to="/taxonomy/term/15" onClick={scrollToTop}>Pictures Entertainment</Link></div>
                                        </div>
                                        <div className="views-field views-field-title">
                                            <h3 className="field-content"><Link to="/insights/ace-pictures-bags-coveted-world-media-festival-award" onClick={scrollToTop}>ACE PICTURES BAGS COVETED WORLD MEDIA FESTIVAL AWARD</Link></h3>
                                        </div>
                                        <div className="views-field views-field-body">
                                            <div className="field-content">
                                            <p>INSPIRED by true events, the first inspirational short series by ACE Pictures - a subsidiary of ACE Holdings Berhad – follows the story o</p>
                                            </div>
                                        </div>
                                        <div className="views-field views-field-view-node"><span className="field-content"><Link to="/insights/ace-pictures-bags-coveted-world-media-festival-award" onClick={scrollToTop}className="new-cta"><span>READ MORE</span></Link></span></div>
                                    </li>
                                    <li>
                                        <div className="views-field views-field-field-insight-category">
                                            <div className="field-content"><Link to="/taxonomy/term/15" onClick={scrollToTop}>Pictures Entertainment</Link></div>
                                        </div>
                                        <div className="views-field views-field-title">
                                            <h3 className="field-content"><Link to="#" onClick={scrollToTop}>FORMER SQUASH CHAMPION COLLABORATES WITH ACE PICTURES ENTERTAINMENT TO PRODUCE THE BIOPIC "I AM NICOL DAVID"</Link></h3>
                                        </div>
                                        <div className="views-field views-field-body">
                                            <div className="field-content">
                                            <p>A household name in the world of sports - and throughout the world, there is no one quite as intriguing as the legendary Datuk Nicol Davi</p>
                                            </div>
                                        </div>
                                        <div className="views-field views-field-view-node"><span className="field-content"><Link to="/insights/former-squash-champion-collaborates-ace-pictures-entertainment-produce-biopic-i-am-nicol-0" className="new-cta"><span>READ MORE</span></Link></span></div>
                                    </li>
                                    <li>
                                        <div className="views-field views-field-field-insight-category">
                                            <div className="field-content"><Link to="/taxonomy/term/4" onClick={scrollToTop}>Holdings</Link></div>
                                        </div>
                                        <div className="views-field views-field-title">
                                            <h3 className="field-content"><Link to="/insights/announcement-ace-holdings-berhad" onClick={scrollToTop}>ANNOUNCEMENT (ACE HOLDINGS BERHAD)</Link></h3>
                                        </div>
                                        <div className="views-field views-field-body">
                                            <div className="field-content">
                                            <p>SCAM ALERT: BEWARE OF INDIVIDUALS IMPERSONATING AS AGENTS/REPRESENTATIVES OF ACE HOLDINGS BERHAD AND ITS SUBSIDIARIES (“ACE GROUP”)</p>
                                            </div>
                                        </div>
                                        <div className="views-field views-field-view-node"><span className="field-content"><Link to="/insights/announcement-ace-holdings-berhad" onClick={scrollToTop} className="new-cta"><span>READ MORE</span></Link></span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Insights;