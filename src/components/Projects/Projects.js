import React from 'react';
import assignment11 from '../../images/akIndustry.png';
import assignment9 from '../../images/assginment-9.png';
import assignment10 from '../../images/assignment10.png';
import github from '../../images/github(1).png';
import link from '../../images/foreign(1).png';
import './Projects.css';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="container">
            <div className="text-center mb-5">
                <h2 style={{color: '#FF0077',fontWeight: 'bold', paddingTop: '40px'}}>PROJECTS</h2>
                <h4>Check Out Some of My Works</h4>
            </div>
            <div className='row'>
                <div className="col-md-6">
                <div class="card mb-3 projects mt-5" style={{maxWidth: '480px', height: 'auto'}}>
                    <img src={assignment11} class="card-img-top rounded-top" alt=""/>
                    <div class="card-body rounded-bottom" style={{backgroundColor: '#172A45', height: 'auto'}}>
                        <h3 class="card-title">Ak Industry</h3>
                        <p class="card-text">This is single page construction service web app where people can pic any service for their own building or Already made. We provide multiple services.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span> 
                            <span>Strip.js</span>
                            <span>Firebase</span>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex all-link'>
                            <div className="github mt-4 ml-2 me-3">
                                <a target='_blank' rel="noreferrer" href="https://github.com/mdumar112233/ak-industry-assignment-11-client">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-4">
                                <a target='_blank' rel="noreferrer" href="https://ak-inductry-auth.web.app/">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div class="card mb-3 projects mt-5" style={{maxWidth: '480px', height: 'auto'}}>
                    <img src={assignment10} className='rounded-top' alt=""/>
                    <div class="card-body rounded-bottom" style={{backgroundColor: '#172A45', height: 'auto'}}>
                        <h3 class="card-title">Learn Something New</h3>
                        <p class="card-text">This full-stack application people can buy any new book with order detail user can see their all checkout order information. Admin can add a new book or delete any book from the store.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>firebase</span>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex'>
                            <div className="github mt-4 ml-2 me-3">
                                <a target='_blank' rel="noreferrer" href="https://github.com/mdumar112233/book-shop-assignment-10-client">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-4">
                                <a target='_blank' rel="noreferrer" href="https://book-shop-assignment-auth.web.app/home">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="col-md-6">
                    <div class="card mb-3 projects mt-5" style={{maxWidth: '480px', height: 'auto'}}>
                    <img src={assignment9} className='rounded-top' alt=""/>
                    <div class="card-body rounded-bottom" style={{backgroundColor: '#172A45', height: 'auto'}}>
                        <h3 class="card-title">One Call Riders</h3>
                        <p class="card-text">There people can take a ride with their choose vehicle and write location to show in the map.There have so many other feature like firebase Authentication, google map etc.</p>
                        <div className='technology'>
                            <span>React.js</span>
                            <span>Firebase</span>
                            <span>React Router</span>
                            <span>Google map</span>
                            <span>Bootstrap4</span>
                        </div>
                        <div className='d-flex'>
                            <div className="github mt-4 ml-2 me-3">
                                <a target='_blank' rel="noreferrer" href="https://github.com/mdumar112233/one-call-ride-assignment-9">
                                    <img src={github} alt=""/>
                                </a>
                            </div>
                            <div className="live-site mt-4">
                                <a target='_blank' rel="noreferrer" href="https://react-assignment-9.web.app/home">
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