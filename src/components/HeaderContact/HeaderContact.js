import React from 'react';
import { MdEmail } from "react-icons/md";
import './HeaderContact.css';

const HeaderContact = () => {
    return (
       <React.Fragment>
        <div className="layout layout--onecol">
            <div className="layout__region layout__region--content">
            
                <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                    <div className="container">
                        <div className="breaker-contact">
                            <ul className="list-inline">
                                <li>CONTACT INFORMATION:</li>
                                <li className='contact-email-icon'>
                                {/* <p aria-hidden="true" className="fa fa-envelope">&nbsp;</p> */}
                                    <MdEmail />
                                </li>
                                <li><a href="mailto:info@test.com" target="_blank" rel="noreferrer">EMAIL US</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </React.Fragment>
    );
};

export default HeaderContact;