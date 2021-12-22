import React from 'react'
import { useState, useEffect } from 'react';

import axios from 'axios';




 function Searchflights(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [arr, setArr] = useState("");
    const [dep, setDep] = useState("");
    const [cab, setCabin] = useState("");
    const [seats, setSeats] = useState("");
    const [flightNum, setFlightNum] = useState("");
    const [flightlist, setFlightlist] = useState([]);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
    var queryParams = {
      Flight_Number: flightNum,
      From: from,
      To: to,
      Flight_Date: date,
      Arrival_Time: arr,
      Departure_Time: dep,
      Cabin : cab,
      Seats_Available : seats
    }
    let o = Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v != ""));
            console.log("search");
          axios.post('http://localhost:5000/searchflights', o)
            .then(function (response) {
              console.log("search");
              setFlightlist(response.data)
            })
          
          setClicked(false);
      });

   {
    
       
           return (
               <div>
               
            <div className= "container">
                <input type="text" id="flightno" name="flightno" onChange={event => setFlightNum(event.target.value)} />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="from" name="from" onChange={event => setFrom(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="to" name="to" onChange={event => setTo(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="date" name="date" onChange={event => setDate(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="Arrival" name="Arrival" onChange={event => setArr(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="dep" name="dep" onChange={event => setDep(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="cabin" name="cabin" onChange={event => setCabin(event.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

               
               
               
                <input type="text" id="seats" name="seat" onChange={event => setSeats(event.target.value)} />
               
         
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Flights</h4>
                </div>
                
              </div>
          
            
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Flight Number</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Date</th>
                  <th>Cabin</th>
                  <th>Seats Available</th>
                </tr>
              </thead>
            
            </table>
          </div>
          </div>
         
           )

       }
       
   }

   export default Searchflights