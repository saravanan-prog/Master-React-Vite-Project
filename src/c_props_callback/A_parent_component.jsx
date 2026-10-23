import { useState } from "react"
import B_child_component from "./B_Child_component"

export default function A_parent_component(){

    const [count,setCount] = useState(0)
   
    const addCout = (item) => {
        setCount(count + item)
    }
    const subractCount = (item) => {
        setCount(count * item)
    }

    return(
        <>
            <div className="h2 text-primary text-center"> Functional Props </div>
            <div className="h5">Parent Component</div>
            <div>
                <B_child_component
                   count = {count}
                   addCout = {addCout}
                   subractCount = {subractCount}
                />
            </div>
        
        
        </>
    )
}