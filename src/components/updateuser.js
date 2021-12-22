import React, { Component } from 'react';
import axios from 'axios';




export default class updateuser extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        


        this.state={
            id     :"",
            FirstName :"",
            LastName :"",
            Email : "",
            Password :"",
            BirthDate :"",
            

        }
        
    }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({


          id: response.data.id,
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Password: response.data.Password,
          Email : response.data.Email,
          BirthDate: response.data.BirthDate
          

        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    

  }
  onChangeid(e){
    this.setState({
        id: e.target.value
    });
}
onChangeFirstName(e){
    this.setState({
        FirstName: e.target.value
    });
}
onChangeLastName(e){
    this.setState({
        LastName: e.target.value
    });
}
onChangeBirthDate(e){
    this.setState({
        BirthDate: e.target.value
    });
}
onChangeEmail(e){
    this.setState({
        Email: e.target.value
    });
}
onChangePassword(e){
  this.setState({
      Password: e.target.value
  });
}



onSubmit(e){
    e.preventDefault();
    const user ={
        id: this.state.id,
        FirstName :this.state.FirstName,
        LastName :this.state.LastName,
        Email : this.state.Email,
        Password : this.state.Password,
        BirthDate: this.state.BirthDate
        
    }
    console.log(user);
    axios.post('http://localhost:5000/users/edituser/' + this.props.match.params.id, user)
    .then(res => console.log(res.data));
    window.location = '/';
}
  render() {
    return (
        <div>
        <h3>Update User</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label> ID </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.id}
                onChange={this.onChangeid}
                />
          
          </div>
        <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.LastName}
                onChange={this.onChangeLastName}
                />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <label>Password </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.Password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <label>BirthDate </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.BirthDate}
                onChange={this.onChangeBirthDate}
                />
          </div>
          
  
          <div className="form-group">
            <input type="submit" value="Update User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}