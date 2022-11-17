import { size } from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarAnimation, setNavbarAnimation] = useState(false);
    const [activeList, setActiveList] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState({});
    const [showSmallDeviceMenu, setShowSmallDeviceMenu] = useState({});

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setNavbarAnimation(true);
        }
        else{
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const handleMouseOver  = (value) => {
        setShowSubMenu({ [value]: true});
    }
    const handleMouseOut = (value) => {
        setShowSubMenu({[value]: false});
    }
    const handleSmallDeviceMenu = (value) => {
        setShowSmallDeviceMenu({ [value]: true});
    }

    return (
       <header className={`navbar navbar-default ${navbarAnimation ? 'invert' : ''}`} id="navbar">
        <div className="container">
            <div className='navbar-header'>
                <div className='region region-navigation'>
                    <div className="navi-left"> </div>
                    <div className="navi-center">
                        <Link to="/" className={`logo navbar-btn ${activeList ? 'overlay' : ''}`}>
                            <img src="https://www.acegroup.com.my/sites/default/files/logo-acegroup%402x-white.png" alt="Home" className='home-icon-white' />
                            <img src="https://www.acegroup.com.my/sites/default/files/logo-acegroup%402x.png" alt="Home" className='home-icon-blue' />
                        </Link>
                    </div>
                    <div className="navi-right">
                        <div className={`navbar-burger ${activeList ? 'overlay' : ''}`} onClick={() => setActiveList(!activeList)}>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </div>
                    </div>
                </div>
                <div className={`navigation-overlay ${activeList ? 'active' : ''}`}>
                    {/* large device */}
                    <div className='d-md-block d-none'>
                        <div className="row">
                            <div className="menu-left">
                                <ul>
                                    <li data-submenu="discover" className={`${activeList && 'fade-in'} ${showSubMenu?.discover ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut('discover')} style={{transitionDelay: activeList ? '0.5s' : '0.4s'}}>
                                        <Link to="/"><span>Discover</span></Link>
                                    </li>
                                    <li data-submenu="banking" className={`${activeList && 'fade-in'} ${showSubMenu?.banking ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut('banking')} style={{transitionDelay: activeList ? '0.6s' : '0.3s'}}>
                                        <Link to="/"><span>Banking &amp; Finance</span></Link>
                                    </li>
                                    <li data-submenu="other" className={`${activeList && 'fade-in'} ${showSubMenu?.otherServices ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut('otherServices')} style={{transitionDelay: activeList ? '0.7s' : '0.2s'}}>
                                        <Link to="/"><span>Other Services</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0.1s'}}>
                                        <Link to="/"><span>Insights</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0s'}}>
                                        <Link to="/"><span>Contact</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul data-parentmenu="discover" className={`${showSubMenu?.discover ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut ('discover')}>
                                    <li>
                                        <Link to="/" className="menu-back">&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Corporate Video</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Strength</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Responsibility</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Leading Experts</span></Link>
                                    </li>
                                </ul>
                                <ul data-parentmenu="banking" className={`${showSubMenu?.banking ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut ('banking')}>
                                    <li>
                                        <Link to="/"className="menu-back">&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Investment Bank</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Holdings</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Money Exchange</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Leasing</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Credit</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Capital Management</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Private Equity</span></Link>
                                    </li>
                                </ul>
                                <ul data-parentmenu="other" className={`${showSubMenu?.otherServices ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut ('otherServices')}>
                                    <li>
                                        <Link to="/"className="menu-back">&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Corporation</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Asiacyberx</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Accelerator Network</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>EzDrive</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Pictures Entertainment</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* small device */}
                    <div className='d-md-none'>
                        <div className={`row ${size(showSmallDeviceMenu) ? 'showsub' : ''}`}>
                            <div className="menu-left">
                                <ul>
                                    <li data-submenu="discover" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.discover ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('discover')} style={{transitionDelay: activeList ? '0.5s' : '0.4s'}}>
                                        <Link to="/"><span>Discover</span></Link>
                                    </li>
                                    <li data-submenu="banking" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.banking ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('banking')} style={{transitionDelay: activeList ? '0.6s' : '0.3s'}}>
                                        <Link to="/"><span>Banking &amp; Finance</span></Link>
                                    </li>
                                    <li data-submenu="other" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.otherServices ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('otherServices')} style={{transitionDelay: activeList ? '0.7s' : '0.2s'}}>
                                        <Link to="/"><span>Other Services</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0.1s'}}>
                                        <Link to="/"><span>Insights</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0s'}}>
                                        <Link to="/"><span>Contact</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul data-parentmenu="discover" className={`${showSmallDeviceMenu?.discover ? 'active': ""}`}>
                                    <li>
                                        <Link to="#" className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Corporate Video</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Strength</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Responsibility</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Leading Experts</span></Link>
                                    </li>
                                </ul>
                                <ul data-parentmenu="banking" className={`${showSmallDeviceMenu?.banking ? 'active': ""}`}>
                                    <li>
                                        <Link to="#"className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Investment Bank</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Holdings</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Money Exchange</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Leasing</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Credit</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Capital Management</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Private Equity</span></Link>
                                    </li>
                                </ul>
                                <ul data-parentmenu="other" className={`${showSmallDeviceMenu?.otherServices ? 'active': ""}`}>
                                    <li>
                                        <Link to="#"className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Corporation</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Asiacyberx</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Accelerator Network</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>EzDrive</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><span>Pictures Entertainment</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       </header>
    );
};

export default Navbar;