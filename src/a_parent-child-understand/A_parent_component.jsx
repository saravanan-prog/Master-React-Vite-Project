import { useState } from "react"
import B_child_component from "./B_Child_component"

export default function A_parent_component(){

    


    return(
        <>
            <div className="h2 text-primary text-center"> Parent Component </div>
            <div>
                <B_child_component />
            </div>
        </>
    )
}