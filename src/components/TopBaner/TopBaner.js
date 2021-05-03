import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../../images/Gallery_1606626778263(1).png';
import './TopBaner.css';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github(2).png';

const TopBaner = () => {
    return (
        <div className="top-baner">
            <div className="overlay"></div>
            <div className='container'>
            <div className="row text-center">
                <div className="col-md-6 my-title">
                    <h1><span style={{color: '#FF0077'}}>Hi,</span> I'm Md Umar Faruk</h1>
                    <div className='mt-4'>
                        <ReactTypingEffect
                            text={["Web Developer", "Programmer"]}
                            cursorRenderer={cursor => <h4 style={{color: '#fff'}}>{cursor}</h4>}
                            displayTextRenderer={(text, i) => {
                            return (
                                <h4>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                    <span
                                        key={key}
                                        style={{color: '#fff', fontFamily: "'Lora', serif"}}
                                    >{char}</span>
                                    );
                                })}
                                </h4>
                            );
                            }}        
                        />
                    </div>
                    <div className='mt-4 about'>
                        <button className='about-me-btn me-3' type='button'>About me</button>
                        <span><a rel="noreferrer" href='https://drive.google.com/uc?export=download&id=17z45BnAgosSL1GyXQHLQ3-IRxh-zksdq' className='get-in-touch'>Download CV</a></span>
                    </div>
                </div>
                <div className="col-md  my-img">
                    <div className="outline"></div>
                    <img src={picture} alt=""/>
                </div>
                <div className='social text-center mt-5 social-icon'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mdumar.faruk.3139241"><img src={facebook} alt=""/></a>
                        <span><a target="_blank" rel="noreferrer" href="https://github.com/mdumar112233"><img src={github} alt=""/></a></span>
                        <span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/umar-faruk-89a480185/"><img src={linkedin} alt=""/></a></span>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TopBaner;