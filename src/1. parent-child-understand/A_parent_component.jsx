import { useState } from "react"
import B_child_component from "./B_Child_component"

export default function A_parent_component(){

    return(
        <>
            <div className="container">
                <div className="h2 text-primary text-center"> 
                    Employee Information 
                </div>
                <div>
                    <B_child_component />   { /* Child Component  */ }
                </div>
            </div>
        </>
    )
}