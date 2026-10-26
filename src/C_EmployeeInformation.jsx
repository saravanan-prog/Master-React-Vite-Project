import { useState } from "react";

export default function C_Employeeinformation(){

    const [employee,setEmployee] =  useState(
        {
            name:"Kishore",
            age : 27,
            degree:"MCA",
            work:"TCS",
            location : "Chennai"
        }
    )

    return(
        <>
            <div className="h2 text-center text-primary"> Employee information </div>
            <div>
                <table className="table">
                    <tr>
                        <th>Employee Name </th>
                        <td>{employee.name}</td>
                        <td>
                            <button onClick = {
                                ()=> { setEmployee( {...employee, name:"Rajesh" } )}
                            }>Update Name</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Employee Age </th>
                        <td>{employee.age}</td>
                        <td>
                            <button
                                onClick = {
                                  () => { setEmployee( {...employee, age:28 } )}
                                }
                            >Update Age</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Employee degree </th>
                        <td>{employee.degree}</td>
                        <td>
                            <button
                                onClick = {
                                  () => { setEmployee( {...employee, degree:"B.tech" } )}
                                }
                            
                            >Update degree</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Employee work </th>
                        <td>{employee.work}</td>
                        <td>
                            <button
                                onClick = {
                                  () => { setEmployee( {...employee, work:"Infosys" } )}
                                }
                            >Update Work</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Employee location </th>
                        <td>{employee.location}</td>
                        <td>
                            <button
                                onClick = {
                                  () => { setEmployee( {...employee, location:"Banglore" } )}
                                }
                            
                            >Update Location</button>
                        </td>
                    </tr>
                </table>
            </div>
        
        </>
    )
}