import { useState } from "react";

export default function EmployeeBulkUpdate() {

    const [employee, setEmployee] = useState(
        {
            name: "Kishore",
            age: 27,
            degree: "MCA",
            desigination: "Software Engineer",
            workLocation: "TCS - Chennai"
        }
    )

    const handleBulkUpdate = () => {

        setEmployee(
            {
                ...employee,
                name: "Manikandan",
                age: 23,
               
            }
        )


    }


    return (
        <>
            <div className="container-fluid ">
                <div className="h2 text-center text-primary"> Employee information </div>
                <div className="mt-5">
                    <span className="h5">Canidate Name </span>
                    <span className="ms-4"> {employee.name} </span>
                </div>
                <div>
                    <span className="h5">Canidate Age </span>
                    <span className="ms-4"> {employee.age} </span>
                </div>
                <div>
                    <span className="h5">Canidate Qualification </span>
                    <span className="ms-4"> {employee.degree} </span>
                </div>
                <div>
                    <span className="h5">Canidate Desigination </span>
                    <span className="ms-4"> {employee.desigination} </span>
                </div>
                <div>
                    <span className="h5">Canidate Work Location </span>
                    <span className="ms-4"> {employee.workLocation} </span>
                </div>
                
                <div className="mt-4">
                    <button className="btn btn-info" onClick={handleBulkUpdate}> Bulk Update </button>
                </div>
            </div>

        </>
    )
}