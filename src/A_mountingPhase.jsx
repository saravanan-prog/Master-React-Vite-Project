import { Component } from "react";

export default class A_mountingPhase extends Component{

    constructor(){
        super()

        console.log("1. Constructor is calling")

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
        
      console.log("3. component Did mount is calling...")

      setTimeout(()=>{
         this.setState(
            {
                person:{
                    name:"Balakrishnan",
                    age:28,
                    work:"Uk based company"
                },
                address: {
                    temp:"2nd cross st, Madurai",
                    permanent:"4th Ave west mambakkam"
                }
            }
         )
      },6000)
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