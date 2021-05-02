import React from 'react';
import './Footer.css';
import location from '../../images/pin.png';
import email from '../../images/email.png';
import phone from '../../images/phone-call.png';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github(2).png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="container mt-5">
                <div className="row text-center text-white">
                    <div className="col-md-4 info mt-5">
                        <img src={location} alt=""/>
                        <p>Where To Find Me</p>
                        <small>Comilla,08,3520</small>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src={email} alt=""/>
                        <p>Email Me At</p>
                        <small>mdumarfaruk187326@gmail.com</small>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src={phone} alt=""/>
                        <p>Call Me At</p>
                        <small>+8801705481478</small>
                    </div>
                </div>
                <div className='social text-center mt-5'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mdumar.faruk.3139241"><img src={facebook} alt=""/></a>
                        <span><a target="_blank" rel="noreferrer" href="https://github.com/mdumar112233"><img src={github} alt=""/></a></span>
                        <span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/umar-faruk-89a480185/"><img src={linkedin} alt=""/></a></span>
                </div>
                <div className='text-center mt-3'>
                     <span style={{color: '#4b4b4b'}}>Design by</span> <span style={{color: '#FF0077'}}>Md Umar Faruk</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;