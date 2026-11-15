import { Component } from "react";

export default class B_class_component_state extends Component{

    constructor(){
        super()
        this.state = {
            applicationname: "Counter App",
            count : 0
        }
    }

    render(){
        return(
            <>
               <div className="container">
                    <div className="h3 text-center text-primary"> {this.state.applicationname} </div>
                    <div className="ms-2">Count : {this.state.count} </div>
                    <div className="mt-3">
                        <button onClick={()=>this.setState({ count: this.state.count + 1 })}> ADD </button>
                        <button onClick={()=>this.setState({ count: this.state.count - 1 })}> SUB </button>
                    </div>
               </div>
            </>
        )
    }
}