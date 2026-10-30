import { useState } from "react";
import BasicInformation from "./component/BasicInformation";

export default function PortFolioMainpage(){
    const [student,setStudent] = useState(
        {
            name:"Saravanan",
            address: "2nd cross st",
            education:{
                sslc : 480,
                hsc : 780
            },
            exprience: {
                "2022-2024" : "TCS",
                "2024-2026" : "Infosys"
            },
            projects:[
                "online Attandance management",
                "Portfolio website"
            ],
            skills:[
                "React",
                "Angular"

            ]
        }
    )

    return(
        <>
            <div class="container">
                <BasicInformation 
                    student = {student}
                />
            </div>
        </>
    )
}