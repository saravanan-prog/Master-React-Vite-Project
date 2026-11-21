import { Component } from "react";

export default class B_updatingPhase extends Component {
    
    constructor() {
        console.log("1. Constrctor calling")
        super();

        this.state = {
            productName: "Apple I Phone",
            price: 20000,
            tax: 3,
        };
    }
    componentDidMount(){
         console.log("2. componentDidMount calling")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("3. componentDidUpdate calling")

        console.log("previous state =====>",prevState.price)
        console.log("current State =====>",this.state.price)

        if(prevState.price != this.state.price){
            if(this.state.price >= 30000)
                this.setState({tax:4})
        }
    }

   

    render() {
         console.log("4. render calling")
        return (
            <>
                <div className="container ">
                    <div className="h1 text-center text-primary mt-1">Updating Phase</div>
                    <div className="mt-4">
                        <p> Product Name : {this.state.productName}</p>
                        <span>Product price : {this.state.price}</span>
                        <button
                            className="ms-3"
                            onClick={() =>
                                this.setState({ price: this.state.price + 2000 })
                            }

                        >
                            Increase Amt + 2000
                        </button>
                    </div>
                    <p> Tax : {this.state.tax}</p>
                </div>
                <hr />
            </>
        );
    }
}
