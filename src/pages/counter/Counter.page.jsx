export default function Counter(){

    return(
        <>
            <div className="container">
                <div className="h4 text-center text-secondary">Counter App</div>
                <div className ="mt-3">
                    <span className="h5"> Count : 0 </span>
                </div>
                <div className ="mt-3">
                    <button
                        className="btn btn-primary ms-3"
                    >Add</button>
                    <button
                        className="btn btn-primary ms-3"
                    >Sub</button>
                    <button
                        className="btn btn-primary ms-3"
                    >Mul</button>
                    <button
                        className="btn btn-primary ms-3"
                    >Div</button>
                    <button
                        className="btn btn-primary ms-3"
                    >Reset</button>
                </div>
            </div>
        </>
    )
}