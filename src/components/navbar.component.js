import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Airlines</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Flights List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Flights</Link>
          </li>
          <li className="navbar-item">
          <Link to="/searchflights" className="nav-link">Search</Link>
          </li>
          <li className="navbar-item">
          <Link to="/deleteFlights" className="nav-link">Delete Flights</Link>  
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}