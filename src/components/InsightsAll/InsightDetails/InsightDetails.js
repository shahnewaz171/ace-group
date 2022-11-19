import React from 'react';
import { Link } from 'react-router-dom';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import Insights from '../../shared/Insights/Insights';
;

const InsightDetails = () => {
    
    return (
        <div className='insightDetails'>
           <section className="views-element-container block block-views block-views-blockinsights-page-block-block-1 clearfix">
                <div className="form-group">
                    <div className="view view-insights-page-block view-id-insights_page_block view-display-id-block_1">
                        <div className="view-content">
                            <div className="views-row">
                                <div className="views-field views-field-title insights-header container">
                                    <div className="field-content offset-md-1 col-md-10">
                                        <span className="insights-info fw-bold"><Link to="/taxonomy/term/15" hrefLang="en">Pictures Entertainment</Link>, 30 June 2021</span>
                                        <h1>ACE PICTURES BAGS COVETED WORLD MEDIA FESTIVAL AWARD</h1>
                                    </div>
                                </div>
                                <article className="views-field views-field-body container article insights-body">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <p>INSPIRED by true events, the first inspirational short series by ACE Pictures - a subsidiary of ACE Holdings Berhad – follows the story of mixed martial arts (MMA) fighter Agilan Thani from Malaysia.</p>
                                        <p>The shorts – of the same name as the former ONE Welterweight World title challenger – tells the struggles of a bullied overweight young boy who turns into a fighter that goes by the moniker The Alligator, who plays himself in the ACE Group’s first inspirational short series.</p>
                                        <p>
                                            <img alt="agilan_ace_pictures" src='https://www.acegroup.com.my/sites/default/files/inline-images/1203091.jpg' />
                                        </p>
                                        <p>The series won the grand award in the web videos category of Television &amp; Corporate Media Awards 2021 at the 22nd World Media Festival in Hamburg, Germany – marking a historic win for ACE Group, said ACE Pictures president and director Peter Wong.</p>
                                        <p>The World Media Festival honours and celebrates excellence in television, corporate film, online and print productions on an international scale. This year, the festival received 811 entries from 41 nations.</p>
                                        <p>“The inspiration behind the short film represents ACE Group as a whole and what we stand for as a company,” said Wong.</p>
                                        <p>“Our philosophy is about helping talents who are passionate, disciplined, and able to persevere in their desire to achieve their full potential, which is what this story hopes to tell.”</p>
                                        <p>The award-winning video is one out of three cinematic short stories that was produced as part of ACE Group’s corporate branding.</p>
                                        <p>
                                            <img alt="agilan_ace_pictures" src="https://www.acegroup.com.my/sites/default/files/inline-images/1203089.jpg" />
                                        </p>
                                        <p>While corporate videos tend to be represented in a more rigid and neutral structure in terms of cinematics and narration, ACE Pictures sought to inspire by using storytelling as a key element.</p>
                                        <p>Featuring an eclectic TV commercial crew, a complete in-house post-production team and music by local musicians, the three shorts took 12 days to shoot.</p>
                                        <p>Meanwhile, the other two videos showcase the story of GT race car driver Zen Low and drone-racer Amir Haziq.</p>
                                        <p>While the former is presently in post-production, the latter has just been released and can now be viewed on [<Link to="https://www.youtube.com/channel/UC_9PQGjU2ftfHh49jd2lzZg">ACE Group’s official YouTube channel</Link>].</p>
                                        <p>
                                            <img alt="agilan_ace_pictures" src="https://www.acegroup.com.my/sites/default/files/inline-images/1203088.jpg" />
                                        </p>
                                        <p>
                                            “We hope these videos will inspire everyone to believe in themselves and that amazing stories and transformations like these do indeed exist in real life, and not just in movies.
                                        </p>
                                        <p>
                                            “All you need is some confidence, and the right support – be it a coach, a teacher, your family or friends,” said ACE Pictures chief executive officer Johnny Chang.
                                        </p>
                                        <p>
                                            ACE Pictures also shared that these three videos are merely a warmup as the company rides out the pandemic.
                                        </p>
                                        <p>
                                            With various projects in the pipeline, the team at ACE Pictures is more than ready to dive straight back into their main business: international film productions.
                                        </p>
                                        <p>
                                            It is also keen on going full steam ahead with bringing productions not just from the United States but Hong Kong, South Korea and more back into home ground – once the pandemic situation stabilises – to further boost Malaysian filming industry.
                                        </p>
                                        <p>
                                            For more information, visit&nbsp;<Link to="http://Linkcepictures.com/">acepictures.com</Link>
                                        </p>
                                        <p>
                                            View the&nbsp;videos here:&nbsp;
                                            <Link to="https://www.youtube.com/channel/UC_9PQGjU2ftfHh49jd2lzZg">https://www.youtube.com/channel/UC_9PQGjU2ftfHh49jd2lzZg</Link>
                                        </p>
                                        <p>
                                            Source:&nbsp;
                                            <Link to="https://www.thestar.com.my/starpicks/2021/06/30/Linkce-pictures-bags-coveted-world-media-festival-award">https://www.thestar.com.my/starpicks/2021/06/30/Linkce-pictures-bags-coveted-world-media-festival-award</Link>
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* contact info */}
            <HeaderContact />

            {/* insights */}
            <Insights />

            {/* get in touch banner */}
            <GetInTouchBanner />
        </div>
    );
};

export default InsightDetails;