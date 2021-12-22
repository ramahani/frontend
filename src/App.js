import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FlightsList from "./components/flightslist.component";
import addflight from './components/add';
import Navbar from "./components/navbar.component";
import updateflight from "./components/update.component";
import deleteflight from"./components/deleteflight";
import searchflights from "./components/Searchflights.component";






function App() {
  

  
  return (
    <Router>
      <div>
        <Navbar />

       
        <Switch>
          
          <Route exact path="/" component = {FlightsList}/> 
          <Route path="/add" component = {addflight}/> 
          <Route path="/flightlist" component = {FlightsList}/> 
          <Route path="/update/:id" component = {updateflight}/>
          <Route path="/deleteFlights" component={deleteflight}/>
          <Route path="/searchflights" component={searchflights}/>

       
       
    
            
          
        </Switch>
      </div>
   </Router>
  );
  
}

export default App;