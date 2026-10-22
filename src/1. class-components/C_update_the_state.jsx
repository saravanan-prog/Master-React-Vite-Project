import { Component } from "react";

export default class C_update_the_state extends Component{

    constructor(){
        super()
        this.state = {
           count : 0
        }
    }

    render(){
        return(
            <>
                <div>
                    <div className="h2 text-primary text-center">Simple Calculator</div>
                </div>
                <div className="mt-3">
                   <div className="h3"> {this?.state?.count} </div>
                   <div>
                        <button onClick ={()=> { this.setState({ count: this.state.count + 1 }) } }> ADD </button>
                        <button onClick ={()=> { this.setState({ count: this.state.count - 1 }) } }> SUB </button>
                        <button onClick ={()=> { this.setState({ count: this.state.count * 2 }) } }> MUL </button>
                        <button onClick ={()=> { this.setState({ count: this.state.count / 2 }) } }> DIV </button>
                        <button onClick ={()=> { this.setState({ count: 0 }) } }> RESET </button>
                   </div>
                </div>
            </>
        )
    }
}