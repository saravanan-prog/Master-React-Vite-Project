import { useState } from "react"
import B_child_component from "./B_Child_component"

export default function A_parent_component(){

    const [employeeName,setEmployeeName] = useState("Kishore")
    const [employeeAge,setEmployeeAge]   = useState(25)
    const [employeeSalary,setEmployeeSalary] = useState({
        "basic":2000,
        "hra" : 5000,
        "da" : 2000,
        "gross":{
            "takeHand": 7000,
            "tax" : 2000
        }
    })


    return(
        <>
            <div className="h2 text-primary text-center"> Parent Component </div>
            <div>
                <B_child_component
                    employeeName   = {employeeName}
                    employeeAge    = {employeeAge}
                    employeeSalary = {employeeSalary}
                />
            </div>
        
        
        </>
    )
}