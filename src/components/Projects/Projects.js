import React from 'react';
import assignment11 from '../../images/akIndustry.png';
import assignment9 from '../../images/assginment-9.png';
import assignment8 from '../../images/assignment-8.png';
import github from '../../images/github(1).png';
import link from '../../images/foreign(1).png';
import './Projects.css';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="text-center mb-5">
                <h2 style={{color: '#FF0077',fontWeight: 'bold'}}>PROJECTS</h2>
                <h4>Check Out Some of My Works</h4>
            </div>
            <div>
            <div class="card mb-3 projects mt-5" style={{maxWidth: '980px', height: '330px', }}>
                <div class="row g-0" style={{borderRadius: '6px'}}>
                    <div class="col-md-5 projects-img">
                    <img src={assignment11} alt=""/>
                    </div>
                    <div class="col-md-7">
                    <div class="card-body" style={{backgroundColor: '#172A45', height: '330px'}}>
                        <h3 class="card-title">Ak Industry</h3>
                        <p class="card-text">This is single page construction service web app where people can pic any service for their own building or Already made. We provide multiple services.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Strip.js</span>
                            <span>Firebase</span><br/><br/>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex'>
                            <div className="github mt-5 me-3">
                                <a target='_blank' href="https://github.com/mdumar112233/ak-industry-assignment-11-client">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-5">
                                <a target='_blank' href="https://ak-inductry-auth.web.app/">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card mb-3 projects mt-5" style={{maxWidth: '980px', height: '330px', }}>
                <div class="row g-0" style={{borderRadius: '6px'}}>
                    <div class="col-md-5 projects-img">
                    <img src={assignment9} alt=""/>
                    </div>
                    <div class="col-md-7">
                    <div class="card-body" style={{backgroundColor: '#172A45', height: '330px'}}>
                        <h3 class="card-title">One Call Riders</h3>
                        <p class="card-text">This is a ride site web app.There people can take a ride with their choose vehicle and write location to show in the map.There have so many other feature like firebase Authentication, google map etc.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>Firebase</span>
                            <span>React Router</span>
                            <span>Google map</span>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex'>
                            <div className="github mt-5 me-3">
                                <a target='_blank' href="https://github.com/mdumar112233/one-call-ride-assignment-9">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-5">
                                <a target='_blank' href="https://react-assignment-9.web.app/home">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card mb-3 projects mt-5" style={{maxWidth: '980px', height: '330px', }}>
                <div class="row g-0" style={{borderRadius: '6px'}}>
                    <div class="col-md-5 projects-img">
                    <img src={assignment8} alt=""/>
                    </div>
                    <div class="col-md-7">
                    <div class="card-body" style={{backgroundColor: '#172A45', height: '330px'}}>
                        <h3 class="card-title">Soccer Master League</h3>
                        <p class="card-text">This is a simple Soccer league web app.There people can choose any league to know about this league full details show dynamic.This web site make with popular React.js framework.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>React Router</span>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex'>
                            <div className="github mt-5 me-3">
                                <a target='_blank' href="https://github.com/mdumar112233/soccer-master-assignment-8">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-5">
                                <a target='_blank' href="https://604a31a785e99b09988f5055--silly-hamilton-0c53fc.netlify.app/">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;