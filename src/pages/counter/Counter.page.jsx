import { useSelector,useDispatch } from "react-redux"
import { addition,subraction } from "./couter.slice"

export default function Counter(){

    useSelector((state) => console.log("Store state====>",state))

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return(
        <>
            <div className="container">
                <div className="h4 text-center text-secondary">Counter App</div>
                <div className ="mt-3">
                    <span className="h5"> Count : {count} </span>
                </div>
                <div className ="mt-3">
                    <button
                        className="btn btn-primary ms-3"
                        onClick = {() => dispatch(addition()) }
                    >Add</button>
                    <button
                        className="btn btn-primary ms-3"
                        onClick = {() => dispatch(subraction()) }
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