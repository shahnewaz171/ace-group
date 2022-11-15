import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarAnimation, setNavbarAnimation] = useState(false);
    const [activeList, setActiveList] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState({})

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
        setShowSubMenu({[value]: true});
    }

    return (
       <header className={`navbar navbar-default ${navbarAnimation ? 'invert' : ''}`} id="navbar">
        <div className="container">
            <div className='navbar-header'>
                <div className='region region-navigation'>
                    <div className="navi-left"> </div>
                    <div className="navi-center">
                        <Link to="/" className='logo navbar-btn'>
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
                <div class={`navigation-overlay ${activeList ? 'active' : ''}`}>
                    <div class="row showsub">
                        <div class="menu-left">
                            <ul>
                                <li data-submenu="discover" class={`fade-in ${showSubMenu?.discover ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut('discover')} style={{transitionDelay: '0.4s'}}>
                                    <Link to="/"><span>Discover</span></Link>
                                </li>
                                <li data-submenu="banking" class={`fade-in ${showSubMenu?.banking ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut('banking')} style={{transitionDelay: '0.3s'}}>
                                    <Link to="/"><span>Banking &amp; Finance</span></Link>
                                </li>
                                <li data-submenu="other" class={`fade-in ${showSubMenu?.otherServices ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut('otherServices')} style={{transitionDelay: '0.2s'}}>
                                    <Link to="/"><span>Other Services</span></Link>
                                </li>
                                <li class="fade-in" style={{transitionDelay: '0.1s'}}>
                                    <Link to="/"><span>Insights</span></Link>
                                </li>
                                <li class="fade-in"style={{transitionDelay: '0s'}}>
                                    <Link to="/"><span>Contact</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-right">
                            <ul data-parentmenu="discover" className={`${showSubMenu?.discover ? 'show active': ""}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut ('discover')}>
                                <li>
                                    <Link to="/" class="menu-back">&lt; Back</Link>
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
                            <ul data-parentmenu="banking" className={`${showSubMenu?.banking ? 'show active': ""}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut ('banking')}>
                                <li>
                                    <Link to="/"class="menu-back">&lt; Back</Link>
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
                            <ul data-parentmenu="other" className={`${showSubMenu?.otherServices ? 'show active': ""}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut ('otherServices')}>
                                <li>
                                    <Link to="/"class="menu-back">&lt; Back</Link>
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
       </header>
    );
};

export default Navbar;