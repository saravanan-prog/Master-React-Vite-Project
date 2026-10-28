import { Component } from "react";

export default class B_updatingPhase extends Component{

    constructor(){
        super()
        this.state = {
            productName : "Apple I Phone",
            price : 20000,
            tax : 3
        }
    }
    componentDidUpdate(prevProps, prevState){
       console.log("3. Component did update")
    }
   

    render(){
        return(
            <>  
                <div className="h1">Updating Phase</div>
                <div>
                    <p> Product Name : {this.state.productName}</p>
                    <div> 
                        <span>Product price : {this.state.price}</span>
                        <button onClick = {()=>this.setState({price:this.state.price + 2000})}>Increase Amt + 2000 </button>
                    </div> 
                    <p> Tax : {this.state.tax}</p>
                </div>
            </>
        )
    }
}