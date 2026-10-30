
export default function B_child_component(
    {
        employeeName,
        employeeAge,
        employeeSalary
    }
) {


    return (
        <>
            <div className="container">
                <div>
                    <span className="fs-3">Employee Name : </span>
                    <span> {employeeName} </span>
                </div>

                <div>
                    <span className="fs-3">Employee Age : </span>
                    <span> {employeeAge} </span>
                </div>
                <div>
                    <span className="fs-3">Employee Take home Salary : </span>
                    <span> {employeeSalary} </span>
                </div>

            </div>
        </>
    )
}