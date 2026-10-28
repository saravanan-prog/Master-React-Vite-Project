import { Component } from "react";

export default class B_class_component_state extends Component{

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
            <>
                <div>
                    <div className="h2 text-primary text-center">Employee Information</div>
                </div>
                <div className="mt-3">
                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Name</span>
                        <span> {this?.state?.candidateName} </span>
                    </div>
                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Age</span>
                        <span> {this.state.candidateAge} </span>
                    </div>
                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Temporary Address</span>
                        <span> {this.state.address.temp} </span>
                    </div>
                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Permanent Address</span>
                        <span> {this.state.address.permanent} </span>
                    </div>
                </div>
            </>
        )
    }
}