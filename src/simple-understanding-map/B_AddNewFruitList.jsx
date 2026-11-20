import { useState } from "react";

export default function B_AddNewFruitList(){

    const [fruitList,setFruitList] = useState(["apple","orange","grapes","pineapple"])
    const [newFruit,setnewFruit] = useState(null)
    const [error,setError] = useState(false)
    
    const addFruitList = () => {
       
        const alreadyAvailable = fruitList.some((value) => value == newFruit)
        
        if(!alreadyAvailable){
            setFruitList([...fruitList,newFruit])
            setError(false)
        }
        else{
            setError(true)
        }
    }

    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-info"> Fruit List </div>
                <div className ="text-danger h5 ">{ error && ("The fruit is Already Available") } </div>
                <div>
                    {fruitList.map((fruit,key)=>{
                        return (
                            <div className="mt-1" key={key}>
                                <div className="fs-4">{fruit}</div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-5">
                    <div className="text-center text-primary h2">Add Fruit</div>
                    <label htmlFor="addFruit" className="form-label">Enter a new Fruit:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="addFruit" 
                        onChange = { (e)=> setnewFruit(e?.target.value) } 
                    />
                    <button onClick = {addFruitList} className="btn btn-primary mt-2"> ADD Fruit</button>
                </div>
                
            </div>
        </>
    )
}