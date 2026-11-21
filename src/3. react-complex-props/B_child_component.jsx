
export default function B_child_component(
    {
        employeeName,
        employeeAge,
        employeeSalary,
        address: {
            temp: {
                streetNumber: temp_StreetNumber,
                streetName : temp_streetName,
                area : temp_area,
                city : temp_city
            },
            permanent: {
                streetNumber,
                streetName,
                area,
                city
            }
        }
    }
) {



    return (
        <>
            <div>
                <div className="ht text-primary">Temp Address</div>
                <div className="mt-2">
                    <span className="fs-5">Street Number</span>
                    <span className="ms-3">{temp_StreetNumber}</span>
                </div>
                <div className="mt-1">
                    <span className="fs-5">Street Name</span>
                    <span className="ms-3">{temp_streetName}</span>
                </div>
                <div className="mt-1">
                    <span className="fs-5">Street Area</span>
                    <span className="ms-3">{temp_area}</span>
                </div>
                <div className="mt-1">
                    <span className="fs-5">Street city</span>
                    <span className="ms-3">{temp_city}</span>
                </div>

            </div>
            <div>
                <div className="h6 text-priamry mt-5 text-success">Parmanent Address</div>

                <div className="mt-2">
                    <span className="fs-5">Street Number</span>
                    <span className="ms-3">{streetNumber}</span>
                </div>

                <div className="mt-1">
                    <span className="fs-5">Street Name</span>
                    <span className="ms-3">{streetName}</span>
                </div>
                <div className="mt-1">
                    <span className="fs-5">Street Area</span>
                    <span className="ms-3">{area}</span>
                </div>
                <div className="mt-1">
                    <span className="fs-5">Street city</span>
                    <span className="ms-3">{city}</span>
                </div>
            </div>
        </>
    )
}