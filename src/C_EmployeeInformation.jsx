import { useState } from "react";

export default function C_Employeeinformation() {
   
    const [employee,setEmployee] = useState(
        {
            name : "Saravanan",
            age : 27,
            degree: "MBA",
            work: "Non IT",
            location:"Bangalore"
        }
    )

    return (
        <>
            <div className="container mt-5">
                <div className="h2 text-center text-primary">
                    Employee information
                </div>
                <div className="mt-5">
                    <table className="table">
                        <tr>
                            <th>Employee Name </th>
                            <td> {employee?.name} </td>
                            <td>
                                <button onClick={ () => setEmployee( {...employee, name:"Rajesh" }) }>
                                    Change name
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>Employee Age </th>
                            <td> {employee?.age} </td>
                            <td>
                                <button onClick= { () => setEmployee( {...employee, age:29 })}>
                                    Update Age
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>Employee degree </th>
                            <td>{employee?.degree}</td>
                            <td>
                                <button onClick= { () => setEmployee( {...employee, degree:"M.tech" })}
                                >
                                    Update degree
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>Employee work </th>
                            <td>{employee.work}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setEmployee({ ...employee, work: "Infosys" });
                                    }}
                                >
                                    Update Work
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>Employee location </th>
                            <td>{employee?.location}</td>
                            <td>
                                <button onClick= { () => setEmployee( {...employee, location:"Chennai" })}>
                                    Update Location
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
