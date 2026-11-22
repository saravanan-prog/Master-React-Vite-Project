import { useState } from "react";
import BasicInformation from "./component/BasicInformation";

export default function PortFolioMainpage(){

    const [student,setStudent] = useState(
        {
            name:"Saravanan",
            address: "2nd cross st 4th Ave west , velachery",
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
            <div className="container">
                <div className="h1 text-center text-secondar">Portfolio Mangement</div>
                <div className="mt-4">
                    <BasicInformation 
                        student = {student}
                    />
                </div>
                
            </div>
        </>
    )
}