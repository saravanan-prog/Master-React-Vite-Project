
export default function B_child_component(
    {
        employeeName,
        employeeAge,
        address: {
            temp:{
                streetNumber : tempStreetNumber,
                streetName : tempStreetName ,
                city : tempCity
            },
            permanent:{
                streetNumber : permanentStreetNumber,
                streetName :  permanentstreetName,
                city : permanentCity
            }
        },
        employeeSalary
    }
){

    

    return(
        <>
            <div>
                <span className="fs-3">Employee Name : </span>
                <span> {employeeName} </span>
            </div>

            <div>
                <span className="fs-3">Employee Age : </span>
                <span> {employeeAge} </span>
            </div>
            <div>
                <span className="fs-3">Employee Temporary address : </span>
                <span> {` ${tempStreetNumber},  ${tempStreetName} -  ${tempCity} ` } </span>
            </div>
            <div>
                <span className="fs-3">Employee Permanent address : </span>
                <span> {` ${permanentStreetNumber},  ${permanentstreetName} -  ${permanentCity} ` } </span>
            </div>

            <div>
                <span className="fs-3">Employee Take home Salary : </span>
                <span> {employeeSalary} </span>
            </div>
        
    
        </>
    )
}