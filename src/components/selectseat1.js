import React  , { Component } from 'react';


class Seats extends Component
{

    constructor(props) {
        super(props);
        this.handleseat1 = this.handleseat1.bind(this);
      }

     handleseat1 ()
    {
        localStorage.setItem("seat1",1);
        console.log(localStorage.getItem("seat1"));
        window.location ='/selectseattwo';
    }
   
    render()
    {
    return(
        
<>
<div> 
<h1>Select Departure Seat</h1>
<br/>
<br/>
<br/>
    
<button Style ="margin : 5px" onClick={this.handleseat1}>Seat 1</button>
   
<button Style ="margin : 5px" onClick={this.handleseat1}>Seat 2</button>

<button Style ="margin : 5px" onClick={this.handleseat1}>Seat 3</button>
<br/>
</div>
</>



    )
    
   
}
}



export default Seats
   