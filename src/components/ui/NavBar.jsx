import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">Doc Manager</Link>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/docs" className="nav-link">Documents</Link>
      </Nav>
    </Navbar>
    );
  }
}