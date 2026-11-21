import { Component } from "react";

export default class A_mountingPhase extends Component{
    
    constructor(){
        console.log("1. Constructor is calling....")
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
        console.log("2.  Component Did Mount is Calling...")
        setTimeout(()=>{
            this.setState(
                {
                    person:{
                        ...this.state.person,
                        name:"Rajesh",
                    },
                    address:{
                        ...this.state.address,
                        permanent:"Shiram gate way GST Raod thambaram"
                    }
                }
            )
        },5000)
    }

    

    render(){
        console.log("3. Render method is calling...")
 
        return(
            <>
               <div>
                  <div className="h1 text-center text-primary">Candidate Information</div>
                  <p> Candidate Name : {this.state.person.name}</p>
                  <p> Candidate Age : {this.state.person.age}</p>
                  <p> Candidate parmenant address : {this.state.address.permanent}</p>
                  <p> Candidate temp address : {this.state.address.temp}</p>
               </div>
                
            </>
        )
    }
}