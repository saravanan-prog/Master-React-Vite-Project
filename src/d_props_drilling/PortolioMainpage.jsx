import { useState } from "react";
import BasicInformation from "./component/BasicInformation";

export default function PortFolioMainpage(){
    const [student,setStudent] = useState(
        {
            name:"Saravanan",
            address: "2nd cross st",
            sslc : 425,
            hsc :780
        }
    )

    return(
        <>
            <div>
                <BasicInformation 
                    student = {student}
                />
            </div>
        </>
    )
}