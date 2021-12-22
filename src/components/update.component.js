import React, { Component } from 'react';
import axios from 'axios';



export default class updateflight extends Component {
    constructor(props){
        super(props);

        this.onChangeCabin = this.onChangeCabin.bind(this);
        this.onChangeSeats_available = this.onChangeSeats_available.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeFlightDate = this.onChangeFlightDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeArrival_Time = this.onChangeArrival_Time.bind(this);
        this.onChangeDeparture_Time=this.onChangeDeparture_Time.bind(this);
        this.onChangeFlight_Number=this.onChangeFlight_Number.bind(this);


        this.state={
          Flight_Number :0,
            From :"",
            To : "",
            Flight_Date :"",
            Cabin : "",
            Seats_Available : 0,
            flights :[]

        }
        
    }

  componentDidMount() {
    axios.get('http://localhost:5000/flights/'+this.props.match.params.id)
      .then(response => {
        this.setState({


          From: response.data.From,
          To: response.data.To,
          Departure_Time: response.data.Departure_Time,
          Arrival_Time : response.data.Arrival_Time,
          Date: response.data.Flight_Date,
          Cabin: response.data.Cabin,
          Seats_Available: response.data.Seats_Available,
          Flight_Number: response.data.Flight_Number

        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    

  }
  onChangeFrom(e){
    this.setState({
        From: e.target.value
    });
}
onChangeTo(e){
    this.setState({
        To: e.target.value
    });
}
onChangeFlightDate(e){
    this.setState({
        Flight_Date: e.target.value
    });
}
onChangeCabin(e){
    this.setState({
        Cabin: e.target.value
    });
}
onChangeSeats_available(e){
    this.setState({
        Seats_Available: e.target.value
    });
}
onChangeFlight_Number(e){
  this.setState({
      Flight_Number: e.target.value
  });
}
onChangeDeparture_Time(e){
  this.setState({
      Departure_Time: e.target.value
  });
}
onChangeArrival_Time(e){
  this.setState({
      Arrival_Time: e.target.value
  });
}

onSubmit(e){
    e.preventDefault();
    const flight ={
        From: this.state.From,
        To :this.state.To,
        Departure_Time : this.state.Departure_Time,
        Arrival_Time : this.state.Arrival_Time,
        Flight_Date:this.state.Flight_Date,
        Cabin :this.state.Cabin,
        Seats_Available : this.state.Seats_Available,
        Flight_Number: this.state.Flight_Number
    }
    console.log(flight);
    axios.post('http://localhost:5000/flights/update/' + this.props.match.params.id, flight)
    .then(res => console.log(res.data));
    window.location = '/';
}
  render() {
    return (
        <div>
        <h3>Update Flight</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label> Flight Number: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Flight_Number}
                onChange={this.onChangeFlight_Number}
                />
          
          </div>
        <div className="form-group"> 
            <label>From: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.From}
                onChange={this.onChangeFrom}
                />
          </div>
          <div className="form-group"> 
            <label>To: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.To}
                onChange={this.onChangeTo}
                />
          </div>
          <div className="form-group">
            <label> Departure Time: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Departure_Time}
                onChange={this.onChangeDeparture_Time}
                />
          </div>
          <div className="form-group">
            <label>Arrival Time: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Arrival_Time}
                onChange={this.onChangeArrival_Time}
                />
          </div>
          <div className="form-group">
            <label>Flight Date: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Flight_Date}
                onChange={this.onChangeFlightDate}
                />
          </div>
          <div className="form-group">
            <label>Cabin: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Cabin}
                onChange={this.onChangeCabin}
                />
          
          </div>

         
          <div className="form-group">
            <label>Seats Available: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Seats_Available}
                onChange={this.onChangeSeats_available}
                />
          </div>
  
          <div className="form-group">
            <input type="submit" value="Update Flight" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}