import React from 'react';
import {useState} from "react";
import axios from 'axios';

const UpdateFlight =({match})=>{
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [passportnumber,setpassportnumber]=useState('')
  
   
    const handleFlightUpdate =()=>{ 
        
        const data = 
        {
            firstname: firstname,
            lastname: lastname, 
            email:email,
            passportnumber:passportnumber
        }    
        axios.put(`http://localhost:5000/edituser/${match.params.id}`,data);
       
    }

    return(
      <div className="container">
          <h2 className="mt-5 mb-5"> Update Flight</h2>
        <form>
            <div className="form-group">
                <label> First Name: </label>
                <input  onChange={(event)=>setfirstname(event.target.value)} type="text" className="form-control" value={firstname}/>
            </div>

            <div className="form-group">
                <label>Last Name: </label>
                <input onChange={(event)=>setlastname(event.target.value)} type="text" className="form-control" value={lastname}/>
            </div>

            <div className="form-group">
                <label>Email: </label>
                <input onChange={(event)=>setemail(event.target.value)} type="text" className="form-control" value={email}/>
            </div>
           
            <div className="form-group">
                <label> Passport Number: </label>
                <input onChange={(event)=>setpassportnumber(event.target.value)} type="text" className="form-control" value={passportnumber}/>
            </div>
         
            <button  onClick={handleFlightUpdate} className="btn btn-raised btn-primary"> Update</button>
        </form>
      </div>
  ) 
};
export default UpdateFlight;
 
  