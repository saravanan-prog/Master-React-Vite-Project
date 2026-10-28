import { Component } from "react";

export default class C_unmountiongPhase extends Component{

    constructor(){
        console.log("1. constructor calling")
        super()
        this.state = {
            candidateName:"saravanan",
            canidateAge: 28,
            desigination: "Software Engieer"
        }
    }
    componentWillUnmount(){
        console.log("Component will unmount caling")

        this.setState({})
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