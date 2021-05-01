import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <Navbar expand="lg" style={{height: '65px', color: ''}}>
                <Navbar.Brand style={{fontSize: '30px', fontWeight: 'bold', color: '#fff'}} href="/home">U</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-center menu">
                        <Nav.Link className='menu-link active' href="/home">Home</Nav.Link>
                        <Nav.Link className='menu-link' href="/about">About</Nav.Link>
                        <Nav.Link className='menu-link' href="/work">Work</Nav.Link>
                        <Nav.Link className='menu-link' href="/blog">Blog</Nav.Link>
                        <Nav.Link className='menu-link'  href="/contact">Contact</Nav.Link>
                        <Nav.Link className='resume-btn'  href="/contact">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;