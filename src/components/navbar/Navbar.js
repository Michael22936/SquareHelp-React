import React  from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function Navbar () {
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">SquareHelp</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#features">Profile</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Community</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Message</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Verification</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">About Us</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#points">Points</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        Logout
                    </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Navbar;