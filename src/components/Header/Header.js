import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className='container'>
                <Navbar expand="lg" style={{width: '100%',height: '65px',color: 'red'}}>
                <Navbar.Brand style={{fontSize: '30px', fontWeight: 'bold', color: '#fff'}} href="/home">U</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-center menu">
                        <Nav.Link className='menu-link active' href="/home">Home</Nav.Link>
                        <Nav.Link className='menu-link' href="/about">About</Nav.Link>
                        <Nav.Link className='menu-link' href="/work">Work</Nav.Link>
                        <Nav.Link className='menu-link' href="/blog">Blog</Nav.Link>
                        <Nav.Link className='menu-link'  href="/contact">Contact</Nav.Link>
                        <Nav.Link className='menu-link resume-btn' rel="noreferrer" target='_blank'  href="https://drive.google.com/file/d/17z45BnAgosSL1GyXQHLQ3-IRxh-zksdq/view?usp=sharing">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;