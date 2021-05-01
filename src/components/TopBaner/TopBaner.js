import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../../images/Gallery_1606626778263(1).png';
import './TopBaner.css';

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
                    <div className='mt-4'>
                        <button className='about-me me-3'>About me</button>
                        <span><button className='get-in-touch'>Get in Touch</button></span>
                    </div>
                </div>
                <div className="col-md-6 my-img">
                    <div className="outline"></div>
                    <img src={picture} alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopBaner;