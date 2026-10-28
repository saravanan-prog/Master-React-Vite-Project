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

                <div>
                    <div className="h2 text-primary text-center">Employee Information</div>
                </div>

                <div className="mt-3">

                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Name</span>
                        <span> {this.state.candidateName} </span>
                        <div>
                            <button 
                                onClick = { () => this.setState({candidateName:"Rajesh"}) }
                            >Update name</button>
                        </div>
                    </div>


                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Age</span>
                        <span> {this.state.candidateAge} </span>
                        <div>
                            <button 
                                onClick = { ()=> this.setState({candidateAge : 30}) }
                            >Update age</button>
                        </div>
                    </div>


                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Temporary Address</span>
                        <span> {this.state.address.temp} </span>
                        <div>
                            <button  onClick = { 
                                ()=> this.setState( { 
                                    address : { 
                                        ...this.state.address,
                                        temp :"1st cross st Tanjore"
                                    }
                                })}

                             > Update temp address</button>
                        </div>
                    </div>



                    <div className="mt-1"> 
                        <span className="h4 text-seocondary">Candidate Permanent Address</span>
                        <span> {this.state.address.permanent} </span>
                        <div>
                            <button
                                onClick = { 
                                    () => this.setState( { 
                                        address : { 
                                            ...this.state.address,
                                            permanent :"100rd cross st tiruchi"
                                    }})}
                            
                            >Update permanent address</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}