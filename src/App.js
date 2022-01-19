import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



import {BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import FlightsList from "./components/flightslist.component";
import Addflight from './components/add';
import Navbar from "./components/navbar.component";
import Updateflight from "./components/update.component";
import Deleteflight from"./components/deleteflight";
import Searchflights from "./components/Searchflights.component";
import Search from "./components/searchcomp.js";
import Home from "./components/homepage.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Booking from "./components/createbooking.js";
import Arrival from "./components/selectarrival.js";
import Selectseatone from "./components/selectseat1.js";
import Selectseattwo from "./components/selectseat2.js";
import Selectseatthree from "./components/selectseat3.js";
import Onetrip from "./components/onetrip.js";
import Editprofile from "./components/updateuser.js";
import Paymentround from "./components/paymentround.js";






const App=()=> {
 
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Home/>}>  </Route>
          <Route exact path="/addflight" element = {<Addflight/>}> </Route>
          <Route exact path="/flightslist" element = {<FlightsList/>}> </Route>
          <Route exact path="/updateflight/:flightId" element = {<Updateflight/>}></Route>
          <Route exact path="/deleteflight/:flightId" element={<Deleteflight/>}> </Route>
          <Route exact path="/searchresults" element={<FlightsList/>}></Route>
          <Route exact path="/search-result" element={<Searchflights/>}></Route>
          <Route exact path="/searchflights" element={<Search/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/addbooking" element={<Booking/>}></Route>
          <Route exact path="/selectarrival" element={<Arrival/>}></Route>
          <Route exact path="/selectseatone" element={<Selectseatone/>}></Route>
          <Route exact path="/selectseattwo" element={<Selectseattwo/>}></Route>
          <Route exact path="/selectseatthree" element={<Selectseatthree/>}></Route>
          <Route exact path="/onetrip" element={<Onetrip/>}></Route>
          <Route exact path="/edituser/:userId" element={<Editprofile/>}></Route>
          <Route exact path="/paymentround" element={<Paymentround/>}></Route>

       
          </Routes>
      </div>
   </BrowserRouter>
  );
  
}

export default App;