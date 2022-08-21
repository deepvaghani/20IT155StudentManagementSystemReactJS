import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as PropTypes from "prop-types";

function Link(props) {
    return null;
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};
export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Student Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" class="">
                        <Link to="/student">Add</Link>
                        <Link to="/listStudents">List/View/Delete</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}