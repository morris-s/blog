import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
    return (
        <>
        <Router>
            <Navbar expand="md" sticky="top" bg="light"> 
                <Navbar.Brand href="/">s morris</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Router>
        </>
    );
}

export default NavBar;
