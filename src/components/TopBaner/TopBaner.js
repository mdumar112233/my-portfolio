import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../../images/Gallery_1606626778263(1).png';
import './TopBaner.css';

const TopBaner = () => {
    return (
        <div className="top-baner">
                    <div className='container'>
            <div className="row">
                <div className="col-md-6 my-title">
                    <h1>I'm Md Umar Faruk</h1>
                    <div>
                        <ReactTypingEffect
                            text={["Web Developer", "Programmer"]}
                            cursorRenderer={cursor => <h4>{cursor}</h4>}
                            displayTextRenderer={(text, i) => {
                            return (
                                <h4>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                    <span
                                        key={key}
                                    >{char}</span>
                                    );
                                })}
                                </h4>
                            );
                            }}        
                        />
                    </div>
                    <div>
                        <button className='about-me me-3'>About me</button>
                        <span><button className='get-in-touch'>Get in Touch</button></span>
                    </div>
                </div>
                <div className="col-md-6 my-img">
                    <img src={picture} alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopBaner;