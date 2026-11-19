import { useState,useMemo } from "react";


const squareAreaCalc = (square) => {
    console.log("Running...");
    for(let i=1; i<10000000000; i++ ) {}
    return square * square;
};


export default function SimpleCalculator() {

    console.log("Componet rendering....")

    const [count, setCount] = useState(0)
    const [mulcount,setmulcount] = useState(60)
    const [square, setSquare] = useState(5)

    const squareAreaResult = useMemo(() => {
        return squareAreaCalc(square);
    },[square])

    return (
        <>
        
        <div>
            <div className="h3">Square App</div>
            <div>
                <label className="form-label"> Enter Sqaure Value </label>
                <input type="text"
                    value = {square || ""}
                    onChange={(e) => setSquare(e.target.value)} 
                     className="form-control"/>
                
                <p> Square Area : {squareAreaResult} </p>
            </div>
            <div className="h3">Counter App</div>
            <div>
                <p>  Count : {count} </p>
                <button onClick={() => setCount(count + 1)}>
                    Add count
                </button>
            </div>

            <div className="h3">Mul count App</div>
            <div>
                <p>  Mul count : {mulcount} </p>
                <button onClick={() => setmulcount(mulcount * 60)}>
                    multiply count
                </button>
            </div>

        </div>
        
        
        </>
    )
}