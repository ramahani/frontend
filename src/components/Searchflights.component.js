import {useState,useEffect} from 'react';
import queryString from 'query-string';
import axios from 'axios'
const SearchResults =()=>{

    const[flights,setFlights]=useState([]);
    
    useEffect(()=>{
    const {Flight_Number,Departure_Time,Arrival_Time,Departure_Date,Arrival_Date,Departure_Terminal,Arrival_Terminal}=queryString.parse(window.location.search);
        AllFlights({Flight_Number,Departure_Time,Arrival_Time,Departure_Date,Arrival_Date,Departure_Terminal,Arrival_Terminal})
        .then(res=>{
                setFlights(res.data);
            })
    },[window.location.search]);

    const AllFlights = async (query)=> await axios.post("http://localhost:5000/flights/search-result",query);

return(
    <>
    <div className="container-fluid p-5 text-center"> 
    <h1> Search Results
        </h1>
    </div>
  
</>
)};
export default SearchResults;