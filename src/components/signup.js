import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';

var emptyField = 'false'
var UsernameTaken = 'false';
var EmailTaken = 'false';

var EmailInForm = 'true';
var telephone_numberLength = 'true';

class signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      homeaddress: '',
      countrycode: '',
      telephone_number: '',
      passportnumber: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeFirstName = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.firstname = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangeLastName = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.lastname = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangeUsername = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.username = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangePassword = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.password = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangePassportNumber = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.passportnumber = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangehomeaddress = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.homeaddress = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangeCountryCode = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.countrycode = e.target.value
    emptyField = 'false'
    this.forceUpdate()
  };

  onChangetelephone_number = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.telephone_number = e.target.value
    emptyField = 'false'
    telephone_numberLength = 'true'
    this.forceUpdate()
  };

  

 

  onChangeEmail = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.email = e.target.value
    emptyField = 'false'
    EmailInForm = 'true'
    EmailTaken = 'false'
    this.forceUpdate()
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      countrycode: this.state.countrycode,
      homeaddress: this.state.homeaddress,
      telephone_number: this.state.telephone_number,
      password: this.state.password,
      passportnumber: this.state.passportnumber,
    };

    
      axios
        .post('http://localhost:5000/users/signup', data)
        .then(res => {
          if (res.data === 'Username already taken') {
            console.log('Username already taken')
            UsernameTaken = 'true';
            EmailTaken = 'false';
            this.forceUpdate()
          }
          else {
            if (res.data === 'Another account is registered by this email') {
              console.log('Another account is registered by this email already taken')
              EmailTaken = 'true';
              UsernameTaken = 'false';
              this.forceUpdate()
            }
            if (res.data === 'User Created') {
              EmailTaken = 'false';
              UsernameTaken = 'false';
              this.setState({
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                homeaddress: '',
                countrycode: '',
                telephone_number: '',
                password: '',
                passportnumber: '',
              })
              this.props.history.push('/');
            }
          }
        })
        .catch(err => {
          console.log("Error in Registration!");
        })
    }
  ;

  render() {
    return (
      <div className="Registration">
        <br />
        <br />
        <div className="backgroundLabelRegistration">
          <b >Registration</b>
        </div>
        <div className="backgroundBoxRegistration">
          <br />
          
          <br />
          <form noValidate onSubmit={this.onSubmit}>
            {((emptyField === 'true')) ? (
              <Alert variant="filled" style={{
                width: "500px",
                margin: "auto",
                marginTop: "5px",
                marginBottom: "-13px"
              }} severity="error">All fields must be filled</Alert>
            ) : (
              <br />
            )}
            <br />
            <TextField
              onChange={this.onChangeFirstName} style={{
                width: "200px",
              }} label="First Name" id="outlined-size-normal" defaultValue="" />
            <TextField onChange={this.onChangeLastName} style={{
              width: "200px"
            }} label="Last Name" id="outlined-size-normal" defaultValue="" />
            <br />
            <br />

            {((UsernameTaken === 'true')) ? (
              <TextField error
                onChange={this.onChangeUsername} style={{
                  width: "400px"
                }}
                label="Username" helperText="Username already taken" id="outlined-size-normal" defaultValue="" />
            ) : (
              <TextField
                onChange={this.onChangeUsername}
                style={{
                  width: "400px",
                }}
                id="filled-helperText"
                label="Username"
                defaultValue=""
              />
            )}
            <br />
            <br/>
            <TextField
              onChange={this.onChangePassword}
              style={{
                width: "400px",
              }}
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            
            />
            <br />
            <br />


            {((EmailTaken === 'true')) ? (
              <TextField error
                onChange={this.onChangeEmail} style={{
                  width: "400px"
                }}
                label="Email" helperText="Another account is registered by this email" id="outlined-size-normal" defaultValue=""  />
            ) : (
              ((EmailInForm === 'true')) ? (
                <TextField
                  onChange={this.onChangeEmail}
                  style={{
                    width: "400px",
                  }}
                  placeholder="user@email.com"
                  id="filled-helperText"
                  label="Email"
                  defaultValue=""
                  
                />
              ) : (
                <TextField error
                  onChange={this.onChangeEmail} style={{
                    width: "400px"
                  }}
                  label="Email"  id="outlined-size-normal" defaultValue=""  />
              )
            )}
            <br />
            <br />
            <TextField onChange={this.onChangePassportNumber} style={{
              width: "400px",
            }} label="Passport Number" id="outlined-size-normal" defaultValue="" />
            <br />
            <br />
            <TextField onChange={this.onChangehomeaddress} style={{
              width: "400px",
            }} label=" homeaddress" placeholder="Street, City, Country" id="outlined-size-normal" defaultValue="" />
            <br />
            <br />
            <TextField onChange={this.onChangeCountryCode} style={{
              width: "400px",
            }} label="Country Code" id="outlined-size-normal" type="number" defaultValue="" />
            <br />
            <br />




            {((telephone_numberLength === 'false')) ? (
                <TextField error onChange={this.onChangetelephone_number} style={{
                  width: "400px",
                }} label="Telephone Number "  id="outlined-size-normal" type="number" defaultValue="" />
            ) : (
              <TextField onChange={this.onChangetelephone_number} style={{
                width: "400px",
              }} label="Telephone Number "  id="outlined-size-normal" type="number" defaultValue="" />
            )}
           
            <br />
            <Button type="submit" style={{
              width: "180px",
              height: "50px",
            }} variant="contained">Register</Button>
          </form>
        </div>
        <br />
      </div>
    );
  }
}
export default signup;