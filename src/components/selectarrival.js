import React  , { Component } from "react";
import axios from 'axios';

import {Link } from 'react-router-dom';

const Flight = props => (
    <tr>
      <td>{props.flight.Flight_Number}</td>
      <td>{props.flight.From}</td>
      <td>{props.flight.To}</td>
      <td>{props.flight.Departure_Time}</td>
      <td>{props.flight.Arrival_Time}</td>
      <td>{props.flight.Flight_Date}</td>
      <td>{props.flight.Cabin}</td>
      <td>{props.flight.Seats_Available}</td>
      <td>
         <a href="#" onClick={() => { props.selectflight(props.flight._id) }}>select</a>
      </td>
    </tr>
  )

export default class selectarrival extends Component{
    constructor(props) {
        super(props);
        

        this.selectflight=this.selectflight.bind(this);
        this.state={flights:[] };
    }
        
        componentDidMount(){
            axios.get('http://localhost:5000/flights/flightslist').then(response => {
                this.setState({flights: response.data})
            })
            .catch((error) => 
            {
                console.log(error);
            })
        }
        selectflight(id) {
          // let answer = window.confirm ('Are you sure you want to delete this Flight?');
          if( window.confirm ('Are you sure you want to select this Flight?')){
            localStorage.setItem("flight2id",id)
            console.log(localStorage.getItem("flight2id"));
            window.location = '/selectseatone';

            
            
            
        
            
          }       
          }
        
    
          FlightsList() {
            return this.state.flights.map(currentflight => {
              return <Flight flight={currentflight} selectflight={this.selectflight} key={currentflight._id}/>;
            })
          }
render(){
    return (
        <div className= "container">
         
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>Arrival Flights</h4>
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
            <tbody>
              { this.FlightsList() }
            </tbody>
          </table>
        </div>
       
      )
  
}
}