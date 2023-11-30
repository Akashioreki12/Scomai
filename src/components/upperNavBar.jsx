import React from 'react';
import '../styles/upperNavBar.css';

import logo from '../assets/upperNavBarLogo.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';
import linkedin from '../assets/linedin.png';
import twitter from '../assets/twitter.png';

function upperNavBar(props) {
    return (
        <div className="container">
            <div className="logo-container">
                <img className='logo' src={logo} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-container">
                <a className='contact' href="">Nous contacter</a>
            </div>

            <div className="socials-container">
                <div className='social-container'>
                    <img className='social' src={facebook} alt="" />
                </div>
                <div className='social-container'>
                    <img className='social' src={instagram} alt="" />
                </div>
                <div className='social-container'>
                    <img className='social' src={linkedin} alt="" />
                </div>
                <div className='social-container'>
                    <img className='social' src={twitter} alt="" />
                </div>
            </div>

            <div className="phone-container">
                <div className='phone-icon-container'>
                    <img className='phone' src={phone} alt="" />
                </div>
                <p className='phone-text'>+212 (0)5 32 05 84 23</p>
            </div>
            <div className="mail-container">
                <div className="mail-icon-container">
                    <img className='mail' src={mail} alt="" />
                </div>
                <p className='mail-text'>infoscomai@gmail.com</p>
            </div>
            </div>
            
        </div>
    );
}

export default upperNavBar;