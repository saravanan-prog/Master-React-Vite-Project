import { Component } from "react";

export default class C_update_the_state extends Component{

     constructor(){
        super()
        this.state = {
            candidateName : "saravanan",
            candidateAge : 27,
            address:{
                temp:"5th cross street velachery",
                permanent : "2nd cross street tambaram"
            }
        }
    }
    
    render(){
        return(
           <div className="container">
            
           </div>
        )
    }
}