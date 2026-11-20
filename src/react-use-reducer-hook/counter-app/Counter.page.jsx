
import { useReducer } from "react";
import { reducerFunction } from "./counter.page.action";


export default function Counter(){

    const [count,dispatch] = useReducer(reducerFunction,0)

    return(
        <>
            <div className="container">
                <div className="h1 text-center mt-3">Counter Application</div>
                <div className="mt-3">
                    <div>
                        <span className="h6">Conunt:</span>
                        <span className="ms-3">{count}</span>
                    </div>
                    <div>
                        <button onClick = {()=>dispatch({type:"add"})}> Add </button>
                        <button onClick = {()=>dispatch({type:"sub"})}> Sub </button>
                        <button onClick = {()=>dispatch({type:"mul"})}> Mul * 2 </button>
                        <button onClick = {()=>dispatch({type:"div"})}> div </button>
                         <button onClick = {()=>dispatch({type:"reset"})}> Rest </button>
                    </div>
                </div>
            </div>
        </>
    )
}