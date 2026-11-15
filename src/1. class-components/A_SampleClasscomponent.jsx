import { Component } from "react";

export default class A_SampleClasssComponent extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className="container">
                <div className="h3">Welcome to React JS world </div>
                <div className="text-primary">I am a Class component </div>
            </div>
        )
    }

}