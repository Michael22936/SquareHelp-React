import React  from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function LandingNavbar () {
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">SquareHelp</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#points">Register</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#memes">
                        About Us
                    </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default LandingNavbar;