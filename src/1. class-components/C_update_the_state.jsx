import { Component } from "react";

export default class C_update_the_state extends Component {

    constructor() {
        super()
        this.state = {
            candidateName: "saravanan",
            candidateAge: 27,
            address: {
                temp: "5th cross street velachery",
                permanent: "2nd cross street tambaram"
            }
        }

        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(){
        this.setState({
            address:{
                ...this.state.address,
                temp:"4th cross st, chennai"
            }
        })
    }

    

    render() {
        return (
            <div className="container">
                <div>
                    <span className="h5">Candidate name : </span>
                    <span> {this.state.candidateName} </span>
                </div>
                <div>
                    <span className="h5">Candidate Age : </span>
                    <span> {this.state.candidateAge} </span>
                </div>
                <div>
                    <span className="h5">Candidate Temporary address : </span>
                    <span> {this.state?.address?.temp} </span>
                </div>
                <div>
                    <span className="h5">Candidate Permanent address : </span>
                    <span> {this.state?.address?.permanent} </span>
                </div>

                <div>
                    <button onClick = {this.handleUpdate}>Update Address</button>
                </div>
            </div>
        )
    }
}