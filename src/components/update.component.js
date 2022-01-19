import React from 'react';
import {useState} from "react";
import axios from 'axios';

const UpdateFlight =({match})=>{
    const [Flight_Number,setFlight_Number]=useState('')
    const [Departure_Time,setDeparture_Time]=useState('')
    const [Arrival_Time,setArrival_Time]=useState('')
    const [Flight_Date,setFlight_Date]=useState('')
    const [Seats,setSeats]=useState('')
    const [To,setTo]=useState('')
    const [From,setFrom]=useState('')
   
   
    const handleFlightUpdate =()=>{ 
        
        const data = {Flight_Number: Flight_Number,
            Departure_Time: Departure_Time, 
            Arrival_Time:Arrival_Time,
            Flight_Date:Flight_Date,
            Seats:Seats,
            To:To,
            From:From
        }    
        axios.put(`http://localhost:5000/updateflight/${match.params.id}`,data);
       
    }

    return(
      <div className="container">
          <h2 className="mt-5 mb-5"> Update Flight</h2>
        <form>
            <div className="form-group">
                <label> Flight Number: </label>
                <input  onChange={(event)=>setFlight_Number(event.target.value)} type="text" className="form-control" value={Flight_Number}/>
            </div>

            <div className="form-group">
                <label>From: </label>
                <input onChange={(event)=>setFrom(event.target.value)} type="text" className="form-control" value={From}/>
            </div>

            <div className="form-group">
                <label>To: </label>
                <input onChange={(event)=>setTo(event.target.value)} type="text" className="form-control" value={To}/>
            </div>
           
            <div className="form-group">
                <label> Departure Time: </label>
                <input onChange={(event)=>setDeparture_Time(event.target.value)} type="text" className="form-control" value={Departure_Time}/>
            </div>

            <div className="form-group">
                <label>Arrival Time: </label>
                <input onChange={(event)=>setArrival_Time(event.target.value)} type="text" className="form-control" value={Arrival_Time}/>
            </div>

            <div className="form-group">
                <label> Flight Date: </label>
                <input onChange={(event)=>setFlight_Date(event.target.value)} type="text" className="form-control" value={Flight_Date}/>
            </div>

          
            <div className="form-group">
                <label> Seats:  </label>
                <input onChange={(event)=>setSeats(event.target.value)} type="text" className="form-control" value={Seats}/>
            </div>
         
            <button  onClick={handleFlightUpdate} className="btn btn-raised btn-primary"> Update</button>
        </form>
      </div>
  ) 
};
export default UpdateFlight;
 
  