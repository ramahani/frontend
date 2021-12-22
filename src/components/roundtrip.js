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
     <a href="#" onClick={() => { props.select(props.flight._id) }}>select</a>
      </td>
    </tr>
  )

export default class roundtrip extends Component{
    constructor(props) {
        super(props);
        

        this.select=this.select.bind(this);
        this.state={flights:[] };
    }
        
        componentDidMount(){
            axios.get('http://localhost:5000/flights/').then(response => {
                this.setState({flights: response.data})
            })
            .catch((error) => 
            {
                console.log(error);
            })
        }
        select(id) {
          // let answer = window.confirm ('Are you sure you want to delete this Flight?');
         
        
        
           
          
          
         
            
          }
        
    
          FlightsList() {
            return this.state.flights.map(currentflight => {
              return <Flight flight={currentflight} select={this.select} key={currentflight._id}/>;
            })
          }
render(){
    return (
        <div className= "container">
         
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
                <th>Price</th>
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