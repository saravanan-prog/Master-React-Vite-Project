import { Component } from "react";
import { fetchApiService } from "../service/fetch-api-Service";

export default class C_unmountiongPhase extends Component{

    controller = new AbortController();

    constructor(){
        console.log("1. constructor calling")
        super()
        this.state = {
            candidateName:"saravanan",
            canidateAge: 28,
            desigination: "Software Engieer"
        }
    }
    componentDidMount(){
        fetchApiService("products","GET")
        .then((data)=> console.log("Products====>",data))
        .catch((error) => console.log("error===>",error))
    }

    componentWillUnmount(){
        console.log("3. Component will un mount is triggred")
        this.controller.abort()
    }
   

    render(){
         console.log("2. render calling")
        return(
            <>
                <div className ="mt-3">
                    <h3 className = "text-center text-primary"> Un Mounting Phase </h3>
                    <p> Candidate Name : {this.state.candidateName}</p>
                    <p> Candidate Age : {this.state.canidateAge}</p>
                    <p> Candidate Designation : {this.state.desigination}</p>
                </div>
            </>
        )
    }
}