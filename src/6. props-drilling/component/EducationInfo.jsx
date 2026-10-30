import ExprienceInfo from "./ExprienceInfo";

export default function EducationInfo(
    {
       student: {
        education:{
            hsc,
            sslc
        }
       }
    }
) {


    return (
        <>
            <div className="container">
                <div className="h3">Education Information</div>
                <div>
                    <span className="fs-5">SSLC Mark</span>
                    <span> {sslc}  </span>
                </div>

                <div>
                    <span className="fs-5">HSC MArk</span>
                    <span> {hsc} </span>
                </div>

                <div>
                   <ExprienceInfo 
                        student = {student}
                   />
                </div>
            </div>
        </>
    )
}