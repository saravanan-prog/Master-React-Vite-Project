import { Component } from "react";

export default class A_mountingPhase extends Component{

    constructor(){

        console.log("1. Constructor calling")

        super()
        this.state = {
           
            person:{
                name:"saravanan",
                age:25,
                work:"tcs"
            },
            address: {
                temp:"2nd cross st, velachery",
                permanent:"4th Ave west mambakkam"
            }
        }
    }

    componentDidMount(){
    
    }

    render(){

        console.log("2. Render function is Calling")
        
        return(
            <>
               <div>
                  <p> Candidate Name : {this.state.person.name}</p>
                  <p> Candidate Age : {this.state.person.age}</p>
                  <p> Candidate temp address : {this.state.address.temp}</p>

               </div>
                
            </>
        )
    }
}