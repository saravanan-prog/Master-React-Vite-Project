import EducationInfo from "./EducationInfo";

export default function BasicInformation(
     {
        student:{
            name,
            address,
            sslc,
            hsc
        }
    }
){


    return(
        <>
            <div className="h3">Basic Information</div>
            <div>
                <span className="fs-32">Name</span>
                <span> {name}</span>
            </div>

            <div>
                <span className="fs-32">Address</span>
                <span> {address}</span>
            </div>
            <div>
                <EducationInfo 
                    sslc = {sslc}
                    hsc = {hsc}
                />
            </div>

        
        </>
    )
}