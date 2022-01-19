import React ,{useState} from 'react';
import {SearchOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";




const Search = ()=>{
    const[Flight_Number,setFlight_Number]=useState();
    const[Departure_Time,setDeparture_Time]=useState();
    const[Arrival_Time,setArrival_Time]=useState();
    const[Departure_Date,setDeparture_Date]=useState();
    const[Arrival_Date,setArrival_Date]=useState();
    const[Departure_Terminal,setDeparture_Terminal]=useState();
    const[Arrival_Terminal,setArrival_Terminal]=useState();

    const navigate = useNavigate();
    

  const handleSubmit=()=>{
      navigate(`/search-result?Flight_Number=${Flight_Number}&Departure_Time=${Departure_Time}&Arrival_Time=${setArrival_Time}&Departure_Date=${Departure_Date}&Arrival_Date=${Arrival_Date}&Departure_Terminal=${Departure_Terminal}&Arrival_Terminal=${Arrival_Terminal}`);

  } ;
  return(
<div className="form">
      <div className="Card">
          
        <input type="text" placeholder="Flight Number" size="10"
        onChange={(event)=>setFlight_Number(event.target.value)} value={Flight_Number}
        style={{height:"50px", width:"700px"}}/> <br></br> 

         <input type="text"  placeholder="Departure Time"
        onChange={(event)=>setDeparture_Time(event.target.value)} value={Departure_Time}
        style={{height:"50px", width:"700px"}}/><br></br>  

        <input type="text" placeholder="Arrival Time"
        onChange={(event)=>setArrival_Time(event.target.value)} value={Arrival_Time}
        style={{height:"50px", width:"700px"}}/>  <br></br> 

       <input type="text" placeholder="Departure Date"
        onChange={(event)=>setDeparture_Date(event.target.value)} value={Departure_Date}
        style={{height:"50px", width:"700px"}}/><br></br>

        <input type="text" placeholder="Arrival Date"
        onChange={(event)=>setArrival_Date(event.target.value)} value={Arrival_Date}
        style={{height:"50px", width:"700px"}}/><br></br>
        
        <input type="text" placeholder="Departure Terminal"
        onChange={(event)=>setDeparture_Terminal(event.target.value)} value={Departure_Terminal}
        style={{height:"50px", width:"700px"}}/><br></br>
        
        <input type="text" placeholder="Arrival Terminal"
        onChange={(event)=>setArrival_Terminal(event.target.value)} value={Arrival_Terminal}
        style={{height:"50px", width:"700px"}}/><br></br>
      
        <SearchOutlined onClick={handleSubmit}/>
        </div>
</div>
  )
  
}
export default Search;