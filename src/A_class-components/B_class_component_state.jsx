import { Component } from "react";

export default class B_class_component_state extends Component{

    constructor(){
        super()
        this.state = {
            candidateName : "Saravanan",
            candidateAge  : 28
        }
    }

    render(){
        return(
            <>
                <div>
                    <div className="h2 text-primary text-center">Employee Information</div>
                </div>
                <div className="mt-3">
                    <div> 
                        <span>Candidate Name</span>
                        <span> {this.state.candidateName} </span>
                    </div>
                    <div> 
                        <span>Candidate Age</span>
                        <span> {this.state.candidateAge} </span>
                    </div>
                </div>
            </>
        )
    }
}