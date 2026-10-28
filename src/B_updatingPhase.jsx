import { Component } from "react";

export default class B_updatingPhase extends Component {
    constructor() {
        super();

        this.state = {
            productName: "Apple I Phone",
            price: 20000,
            tax: 3,
        };
    }

    componentDidUpdate(prevPros, prevState) {
        if (prevState.price != this.state.price) {
            if (this.state.price > 30000) this.setState({ tax: 4 });
        }
    }

    render() {
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
