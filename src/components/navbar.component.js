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
          <Link to="/flightslist" className="nav-link">Flights List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addflight" className="nav-link">Add Flights</Link>
          </li>
          <li className="navbar-item">
          <Link to="/searchflights" className="nav-link">Search</Link>
          </li>
          <li className="navbar-item">
          <Link to="/deleteflight/:flightId" className="nav-link">Delete Flights</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Signup</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/addbooking" className="nav-link">Round Trip</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/onetrip" className="nav-link">One Trip</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/edituser" className="nav-link">Edit Profile</Link>  
          </li>
          
        </ul>
        </div>
        <div>{this.props.children}</div> 
    
      </nav>
      

    );
  }
}