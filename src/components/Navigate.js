import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigate extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navcontent">
            <Nav.Link id="navstyle" href="#competitiveCoding">
              Competitve Coding
            </Nav.Link>
            <Nav.Link id="navstyle" href="#ArtificialIntelligenc">
              Artificial Intelligence
            </Nav.Link>
            <Nav.Link id="navstyle" href="#Finance">
              Finance
            </Nav.Link>
            <Nav.Link id="navstyle" href="#Business">
              Business
            </Nav.Link>
            <Nav.Link id="navstyle" href="#Management">
              Manangement
            </Nav.Link>
            <Nav.Link id="navstyle" href="#Consultancy">
              Consultancy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigate;
