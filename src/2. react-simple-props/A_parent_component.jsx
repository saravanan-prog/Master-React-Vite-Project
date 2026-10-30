import { useState } from "react"
import B_child_component from "./B_child_component"

export default function A_parent_component(){

    const [employeeName,setEmployeeName] = useState("bala krishnan")
    const [employeeAge,setEmployeeAge]   = useState(28)
    
    const [employeeSalary,setEmployeeSalary] = useState(40000)


    return(
        <>
            <div className="h2 text-primary text-center"> Parent Component </div>
            <div>
                <B_child_component 
                   employeeName = {employeeName}
                   employeeAge  = {employeeAge}
                   employeeSalary = {employeeSalary}
                   address   = {address}
                />
            </div>
        
        
        </>
    )
}